// =======================================
// Easy Browser Script
// =======================================

// ---------- BLUE PARTICLES ----------

const particles = document.getElementById("particles");

const colors = [
"#0057FF",
"#007BFF",
"#009DFF",
"#00BFFF",
"#4FC3FF",
"#8FE8FF",
"#FFFFFF"
];

if (particles) {

for (let i = 0; i < 2000; i++) {

const dot = document.createElement("div");

dot.className = "dot";

const size = Math.random() * 4 + 1;

dot.style.width = size + "px";
dot.style.height = size + "px";

dot.style.left = Math.random() * 100 + "%";
dot.style.top = Math.random() * 100 + "%";

dot.style.background =
colors[Math.floor(Math.random() * colors.length)];

dot.style.animationDuration =
(Math.random() * 10 + 8) + "s";

dot.style.animationDelay =
(Math.random() * 5) + "s";

particles.appendChild(dot);

}

}

// ---------- WEBSITE LIST ----------

const websites = [
const websites = [
{name:"Google",url:"https://google.com",image:"https://www.google.com/s2/favicons?sz=256&domain=google.com"},
{name:"YouTube",url:"https://youtube.com",image:"https://www.google.com/s2/favicons?sz=256&domain=youtube.com"},
{name:"ChatGPT",url:"https://chatgpt.com",image:"https://www.google.com/s2/favicons?sz=256&domain=chatgpt.com"},
{name:"Gemini",url:"https://gemini.google.com",image:"https://www.google.com/s2/favicons?sz=256&domain=gemini.google.com"},
{name:"Claude",url:"https://www.claude.ai",image:"https://www.google.com/s2/favicons?sz=256&domain=claude.ai"},
{name:"Perplexity",url:"https://www.perplexity.ai",image:"https://www.google.com/s2/favicons?sz=256&domain=perplexity.ai"},
{name:"Wikipedia",url:"https://wikipedia.org",image:"https://www.google.com/s2/favicons?sz=256&domain=wikipedia.org"},
{name:"Instagram",url:"https://instagram.com",image:"https://www.google.com/s2/favicons?sz=256&domain=instagram.com"},
{name:"Facebook",url:"https://facebook.com",image:"https://www.google.com/s2/favicons?sz=256&domain=facebook.com"},
{name:"X",url:"https://x.com",image:"https://www.google.com/s2/favicons?sz=256&domain=x.com"},
{name:"Threads",url:"https://threads.net",image:"https://www.google.com/s2/favicons?sz=256&domain=threads.net"},
{name:"Snapchat",url:"https://snapchat.com",image:"https://www.google.com/s2/favicons?sz=256&domain=snapchat.com"},
{name:"WhatsApp",url:"https://web.whatsapp.com",image:"https://www.google.com/s2/favicons?sz=256&domain=whatsapp.com"},
{name:"Telegram",url:"https://telegram.org",image:"https://www.google.com/s2/favicons?sz=256&domain=telegram.org"},
{name:"Discord",url:"https://discord.com",image:"https://www.google.com/s2/favicons?sz=256&domain=discord.com"},
{name:"Reddit",url:"https://reddit.com",image:"https://www.google.com/s2/favicons?sz=256&domain=reddit.com"},
{name:"Pinterest",url:"https://pinterest.com",image:"https://www.google.com/s2/favicons?sz=256&domain=pinterest.com"},
{name:"LinkedIn",url:"https://linkedin.com",image:"https://www.google.com/s2/favicons?sz=256&domain=linkedin.com"},
{name:"Netflix",url:"https://netflix.com",image:"https://www.google.com/s2/favicons?sz=256&domain=netflix.com"},
{name:"Spotify",url:"https://spotify.com",image:"https://www.google.com/s2/favicons?sz=256&domain=spotify.com"},
{name:"Prime Video",url:"https://primevideo.com",image:"https://www.google.com/s2/favicons?sz=256&domain=primevideo.com"},
{name:"Disney+",url:"https://disneyplus.com",image:"https://www.google.com/s2/favicons?sz=256&domain=disneyplus.com"},
{name:"JioHotstar",url:"https://hotstar.com",image:"https://www.google.com/s2/favicons?sz=256&domain=hotstar.com"},
{name:"Amazon",url:"https://amazon.in",image:"https://www.google.com/s2/favicons?sz=256&domain=amazon.in"},
{name:"Flipkart",url:"https://flipkart.com",image:"https://www.google.com/s2/favicons?sz=256&domain=flipkart.com"},
{name:"Myntra",url:"https://myntra.com",image:"https://www.google.com/s2/favicons?sz=256&domain=myntra.com"},
{name:"Meesho",url:"https://meesho.com",image:"https://www.google.com/s2/favicons?sz=256&domain=meesho.com"},
{name:"eBay",url:"https://ebay.com",image:"https://www.google.com/s2/favicons?sz=256&domain=ebay.com"},
{name:"AliExpress",url:"https://aliexpress.com",image:"https://www.google.com/s2/favicons?sz=256&domain=aliexpress.com"},
{name:"Gmail",url:"https://mail.google.com",image:"https://www.google.com/s2/favicons?sz=256&domain=mail.google.com"},
{name:"Google Maps",url:"https://maps.google.com",image:"https://www.google.com/s2/favicons?sz=256&domain=maps.google.com"},
{name:"Google Drive",url:"https://drive.google.com",image:"https://www.google.com/s2/favicons?sz=256&domain=drive.google.com"},
{name:"Google Photos",url:"https://photos.google.com",image:"https://www.google.com/s2/favicons?sz=256&domain=photos.google.com"},
{name:"Google Translate",url:"https://translate.google.com",image:"https://www.google.com/s2/favicons?sz=256&domain=translate.google.com"},
{name:"GitHub",url:"https://github.com",image:"https://www.google.com/s2/favicons?sz=256&domain=github.com"},
{name:"CodePen",url:"https://codepen.io",image:"https://www.google.com/s2/favicons?sz=256&domain=codepen.io"},
{name:"Replit",url:"https://replit.com",image:"https://www.google.com/s2/favicons?sz=256&domain=replit.com"},
{name:"Stack Overflow",url:"https://stackoverflow.com",image:"https://www.google.com/s2/favicons?sz=256&domain=stackoverflow.com"},
{name:"Canva",url:"https://canva.com",image:"https://www.google.com/s2/favicons?sz=256&domain=canva.com"},
{name:"Figma",url:"https://figma.com",image:"https://www.google.com/s2/favicons?sz=256&domain=figma.com"},
{name:"Khan Academy",url:"https://khanacademy.org",image:"https://www.google.com/s2/favicons?sz=256&domain=khanacademy.org"},
{name:"Coursera",url:"https://coursera.org",image:"https://www.google.com/s2/favicons?sz=256&domain=coursera.org"},
{name:"Duolingo",url:"https://duolingo.com",image:"https://www.google.com/s2/favicons?sz=256&domain=duolingo.com"},
{name:"Brainly",url:"https://brainly.in",image:"https://www.google.com/s2/favicons?sz=256&domain=brainly.in"},
{name:"Poki",url:"https://poki.com",image:"https://www.google.com/s2/favicons?sz=256&domain=poki.com"},
{name:"CrazyGames",url:"https://crazygames.com",image:"https://www.google.com/s2/favicons?sz=256&domain=crazygames.com"},
{name:"Chess.com",url:"https://chess.com",image:"https://www.google.com/s2/favicons?sz=256&domain=chess.com"},
{name:"Roblox",url:"https://roblox.com",image:"https://www.google.com/s2/favicons?sz=256&domain=roblox.com"},
{name:"BBC News",url:"https://bbc.com/news",image:"https://www.google.com/s2/favicons?sz=256&domain=bbc.com"},
{name:"The Hindu",url:"https://thehindu.com",image:"https://www.google.com/s2/favicons?sz=256&domain=thehindu.com"}
];
];
// =======================================
// CREATE APP CARDS
// =======================================

const appList = document.getElementById("appList");

if (appList) {

    websites.forEach(site => {

        const app = document.createElement("div");

        app.className = "app";

        // Get a reliable icon for each website
        const domain = new URL(site.url).hostname;
        app.innerHTML = `
    <img class="appImage" src="${site.image}" alt="${site.name}">
    <h3>${site.name}</h3>
    <button>Open</button>
`;
        app.querySelector(".openBtn").addEventListener("click", () => {
            window.open(site.url, "_blank");
        });

        appList.appendChild(app);

    });

}

// =======================================
// CONTINUE BUTTON
// =======================================

const continueBtn = document.getElementById("continueBtn");

if (continueBtn) {

    continueBtn.addEventListener("click", () => {

        const splash = document.getElementById("splash");
        const home = document.getElementById("home");

        splash.style.opacity = "0";

        setTimeout(() => {

            splash.style.display = "none";

            home.style.display = "block";

            setTimeout(() => {

                home.style.opacity = "1";

                document.body.style.overflow = "auto";

            }, 100);

        }, 800);

    });

}

// =======================================
// PRESS ENTER TO CONTINUE
// =======================================

document.addEventListener("keydown", (e) => {

    if (e.key === "Enter" && continueBtn) {

        continueBtn.click();

    }

});

// =======================================
// OPTIONAL: DOUBLE-CLICK A CARD TO OPEN
// =======================================

document.addEventListener("dblclick", (e) => {

    const card = e.target.closest(".app");

    if (!card) return;

    const title = card.querySelector("h3").textContent;

    const site = websites.find(w => w.name === title);

    if (site) {

        window.open(site.url, "_blank");

    }

});

console.log("Easy Browser Loaded Successfully!");
