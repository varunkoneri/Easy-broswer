# Easy Browser

## Run locally

From the project directory, start the app from a terminal:

```sh
python3 "python otp_server.py"
```

Open [http://127.0.0.1:8000](http://127.0.0.1:8000) in your browser. Press `Ctrl+C` in the terminal to stop the server.

The server uses Python's standard library, so no package installation is needed. By default, OTP verification codes are printed in the terminal for testing; email delivery requires SMTP configuration.

## Install as an app

The site is a progressive web app. While it is running locally, use your browser's **Install app** option (in Chrome, in the address bar or browser menu). The app shell is cached for offline reopening; browsing websites and other network features still need an internet connection.
