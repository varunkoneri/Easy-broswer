"""Easy Browser — email OTP server (Python standard library only, no pip install).

Serves your site AND emails a 6-digit OTP to the user's Gmail/email address,
so only someone who owns that inbox can log in.
Secrets (email password) live in environment variables / a .env file, NEVER in the HTML.

Run:   python otp_server.py
Open:  http://127.0.0.1:8000/

OTP_PROVIDER:
  console -> prints the OTP in this terminal (default, for testing, no email sent)
  smtp    -> real email through SMTP (Gmail works: use an App Password, see .env.example)
"""
import hashlib, hmac, json, mimetypes, os, re, secrets, smtplib, ssl, sys, threading, time, urllib.parse
from email.message import EmailMessage
from http.server import BaseHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path

ROOT = Path(__file__).resolve().parent

# ---------- load .env (simple KEY=VALUE lines) ----------
env_file = ROOT / ".env"
if env_file.exists():
    for line in env_file.read_text(encoding="utf-8").splitlines():
        line = line.strip()
        if line and not line.startswith("#") and "=" in line:
            k, v = line.split("=", 1)
            os.environ.setdefault(k.strip(), v.strip().strip('"').strip("'"))

PROVIDER   = os.environ.get("OTP_PROVIDER", "console").lower()
PORT       = int(os.environ.get("PORT", "8000"))
HOST       = "0.0.0.0" if os.environ.get("PORT") else "127.0.0.1"
ALLOW_ORIGIN = os.environ.get("ALLOWED_ORIGIN", "")        # e.g. https://varunkoneri.github.io  (only if the site is hosted elsewhere)
APP_NAME   = os.environ.get("APP_NAME", "Easy Browser")
OTP_TTL, MAX_TRIES, RESEND_GAP, PER_PHONE_HOUR, PER_IP_HOUR = 300, 5, 30, 5, 20

_lock = threading.Lock()
_otps = {}        # email -> {hash, salt, exp, tries}
_sent = {}        # email -> [timestamps]
_ip_sent = {}     # ip -> [timestamps]

def normalise_email(raw):
    e = (raw or "").strip().lower()
    return e if len(e) <= 254 and re.fullmatch(r"[a-z0-9._%+\-]+@[a-z0-9\-]+(\.[a-z0-9\-]+)*\.[a-z]{2,}", e) else None

def mask_email(e):
    user, dom = e.split("@", 1)
    return (user[:2] + "•••" if len(user) > 2 else user[:1] + "•••") + "@" + dom

def _hash(code, salt):
    return hashlib.sha256((salt + code).encode()).hexdigest()

def _recent(lst, window):
    now = time.time()
    lst[:] = [t for t in lst if now - t < window]
    return lst

# ---------- sending ----------
def send_email(to, code):
    subject = f"{code} is your {APP_NAME} verification code"
    text = (f"Your {APP_NAME} verification code is {code}\n\n"
            f"It expires in 5 minutes. If you did not ask for it, you can ignore this email.\n"
            f"Never share this code with anyone.")
    html = (f'<div style="font-family:Arial,sans-serif;max-width:420px;margin:auto;padding:24px;border:1px solid #e3e8f0;border-radius:14px">'
            f'<h2 style="margin:0 0 8px">{APP_NAME}</h2><p style="color:#445">Your verification code is</p>'
            f'<p style="font-size:34px;letter-spacing:8px;font-weight:700;margin:8px 0 16px">{code}</p>'
            f'<p style="color:#667;font-size:13px">It expires in 5 minutes. If you did not ask for it, you can ignore this email.<br>Never share this code with anyone.</p></div>')
    if PROVIDER == "console":
        print(f"\n  [DEV] OTP for {to}: {code}   (no email sent; set OTP_PROVIDER=smtp to send real email)\n", flush=True)
        return True, ""
    if PROVIDER != "smtp":
        return False, f"Unknown OTP_PROVIDER '{PROVIDER}'"
    host = os.environ.get("SMTP_HOST", "smtp.gmail.com")
    port = int(os.environ.get("SMTP_PORT", "465"))
    mode = os.environ.get("SMTP_SECURITY", "ssl" if port == 465 else "starttls").lower()   # ssl | starttls | none
    user, pw = os.environ.get("SMTP_USER", ""), os.environ.get("SMTP_PASS", "").replace(" ", "")
    sender = os.environ.get("SMTP_FROM", user)
    if mode != "none" and not (user and pw):
        return False, "SMTP is not configured (set SMTP_USER and SMTP_PASS)"
    msg = EmailMessage()
    msg["Subject"], msg["From"], msg["To"] = subject, f"{APP_NAME} <{sender}>", to
    msg.set_content(text); msg.add_alternative(html, subtype="html")
    try:
        if mode == "ssl":
            with smtplib.SMTP_SSL(host, port, timeout=20, context=ssl.create_default_context()) as srv:
                srv.login(user, pw); srv.send_message(msg)
        else:
            with smtplib.SMTP(host, port, timeout=20) as srv:
                if mode == "starttls":
                    srv.starttls(context=ssl.create_default_context())
                if user and pw:
                    srv.login(user, pw)
                srv.send_message(msg)
        return True, ""
    except Exception as e:
        return False, f"SMTP error: {e}"

# ---------- API ----------
def api_send(body, ip):
    email = normalise_email(body.get("email"))
    if not email:
        return 400, {"ok": False, "error": "Enter a valid email address, e.g. yourname@gmail.com"}
    with _lock:
        if len(_recent(_ip_sent.setdefault(ip, []), 3600)) >= PER_IP_HOUR:
            return 429, {"ok": False, "error": "Too many requests. Try again later."}
        sent = _recent(_sent.setdefault(email, []), 3600)
        if sent and time.time() - sent[-1] < RESEND_GAP:
            wait = int(RESEND_GAP - (time.time() - sent[-1])) + 1
            return 429, {"ok": False, "error": f"Please wait {wait}s before asking for another OTP.", "wait": wait}
        if len(sent) >= PER_PHONE_HOUR:
            return 429, {"ok": False, "error": "Too many OTPs for this email. Try again in an hour."}
        code = f"{secrets.randbelow(1000000):06d}"
        salt = secrets.token_hex(8)
        _otps[email] = {"hash": _hash(code, salt), "salt": salt, "exp": time.time() + OTP_TTL, "tries": 0}
        sent.append(time.time()); _ip_sent[ip].append(time.time())
    ok, err = send_email(email, code)
    if not ok:
        with _lock:
            _otps.pop(email, None)
        print("OTP email failed:", err, file=sys.stderr, flush=True)
        return 502, {"ok": False, "error": "Could not send the email. Check the server settings and try again."}
    return 200, {"ok": True, "message": "OTP sent", "email_hint": mask_email(email), "ttl": OTP_TTL, "resend_in": RESEND_GAP}

def api_verify(body):
    email = normalise_email(body.get("email")); code = re.sub(r"\D", "", str(body.get("code", "")))
    if not email or len(code) != 6:
        return 400, {"ok": False, "error": "Enter the 6-digit OTP."}
    with _lock:
        rec = _otps.get(email)
        if not rec or time.time() > rec["exp"]:
            _otps.pop(email, None)
            return 400, {"ok": False, "error": "OTP expired. Please request a new one."}
        rec["tries"] += 1
        if rec["tries"] > MAX_TRIES:
            _otps.pop(email, None)
            return 429, {"ok": False, "error": "Too many wrong attempts. Please request a new OTP."}
        if not hmac.compare_digest(rec["hash"], _hash(code, rec["salt"])):
            return 400, {"ok": False, "error": f"Wrong OTP. {MAX_TRIES - rec['tries'] + 1} tries left."}
        _otps.pop(email, None)
    return 200, {"ok": True, "message": "Verified"}

# ---------- static files (only safe types; never .py / .env) ----------
SAFE = {".html", ".css", ".js", ".png", ".jpg", ".jpeg", ".ico", ".svg", ".webmanifest", ".txt", ".webp", ".gif"}

class Handler(BaseHTTPRequestHandler):
    server_version = "EasyBrowserOTP"
    def log_message(self, fmt, *a): pass
    def _cors(self):
        if ALLOW_ORIGIN:
            self.send_header("Access-Control-Allow-Origin", ALLOW_ORIGIN)
            self.send_header("Vary", "Origin")
            self.send_header("Access-Control-Allow-Headers", "Content-Type")
            self.send_header("Access-Control-Allow-Methods", "POST, GET, OPTIONS")
    def _json(self, code, obj):
        data = json.dumps(obj).encode()
        self.send_response(code); self._cors()
        self.send_header("Content-Type", "application/json"); self.send_header("Content-Length", str(len(data)))
        self.send_header("Cache-Control", "no-store"); self.end_headers(); self.wfile.write(data)
    def do_OPTIONS(self):
        self.send_response(204); self._cors(); self.end_headers()
    def do_POST(self):
        path = urllib.parse.urlparse(self.path).path
        try:
            n = int(self.headers.get("Content-Length", "0"))
            if n > 4096: return self._json(413, {"ok": False, "error": "Too large"})
            body = json.loads(self.rfile.read(n) or b"{}")
        except Exception:
            return self._json(400, {"ok": False, "error": "Bad request"})
        ip = (self.headers.get("X-Forwarded-For", "").split(",")[0].strip() or self.client_address[0])
        if path == "/api/send-otp":   return self._json(*api_send(body, ip))
        if path == "/api/verify-otp": return self._json(*api_verify(body))
        self._json(404, {"ok": False, "error": "Not found"})
    def do_GET(self):
        path = urllib.parse.unquote(urllib.parse.urlparse(self.path).path)
        if path == "/api/status": return self._json(200, {"ok": True, "provider": PROVIDER})
        if path in ("", "/"): path = "/index.html"
        f = (ROOT / path.lstrip("/")).resolve()
        if ROOT not in f.parents or not f.is_file() or f.suffix.lower() not in SAFE or any(p.startswith(".") for p in f.relative_to(ROOT).parts):
            self.send_response(404); self.end_headers(); self.wfile.write(b"Not found"); return
        data = f.read_bytes()
        self.send_response(200)
        self.send_header("Content-Type", (mimetypes.guess_type(str(f))[0] or "application/octet-stream") + ("; charset=utf-8" if f.suffix in (".html", ".css", ".js") else ""))
        self.send_header("Content-Length", str(len(data))); self.end_headers(); self.wfile.write(data)

if __name__ == "__main__":
    if not (ROOT / "index.html").exists():
        sys.exit("index.html not found. Put index.html in the same folder as otp_server.py")
    print(f"{APP_NAME} OTP server  |  provider: {PROVIDER}  |  http://{'127.0.0.1' if HOST=='127.0.0.1' else '0.0.0.0'}:{PORT}/")
    if PROVIDER == "console":
        print("Running in TEST mode: OTPs are printed here, no email is sent. See .env.example to send real email.")
    try:
        ThreadingHTTPServer((HOST, PORT), Handler).serve_forever()
    except KeyboardInterrupt:
        pass

--
Ganesh
