// ==============================
// Easy Browser
// ==============================

// ---------- PARTICLES ----------

const particleContainer = document.getElementById("particles");

const colors = [
    "#0057FF",
    "#007BFF",
    "#009DFF",
    "#00BFFF",
    "#4FC3FF",
    "#8FE8FF",
    "#FFFFFF"
];

for (let i = 0; i < 2000; i++) {

    const dot = document.createElement("div");

    dot.className = "dot";

    const size = Math.random() * 3 + 1;

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

    particleContainer.appendChild(dot);

}

// ---------- WEBSITE LIST ----------

const websites = [

{ name:"Google", url:"https://google.com", image:"https://www.google.com/s2/favicons?sz=256&domain=google.com" },
{ name:"YouTube", url:"https://youtube.com", image:"https://www.google.com/s2/favicons?sz=256&domain=youtube.com" },
{ name:"ChatGPT", url:"https://www.chatgpt.com", image:"https://www.google.com/s2/favicons?sz=256&domain=chatgpt.com" },
{ name:"Wikipedia", url:"https://wikipedia.org", image:"https://www.google.com/s2/favicons?sz=256&domain=wikipedia.org" },
{ name:"Instagram", url:"https://instagram.com", image:"https://www.google.com/s2/favicons?sz=256&domain=instagram.com" },
{ name:"Facebook", url:"https://facebook.com", image:"https://www.google.com/s2/favicons?sz=256&domain=facebook.com" },
{ name:"X", url:"https://x.com", image:"https://www.google.com/s2/favicons?sz=256&domain=x.com" },
{ name:"Spotify", url:"https://spotify.com", image:"https://www.google.com/s2/favicons?sz=256&domain=spotify.com" },
{ name:"Netflix", url:"https://netflix.com", image:"https://www.google.com/s2/favicons?sz=256&domain=netflix.com" },
{ name:"Amazon", url:"https://amazon.in", image:"https://www.google.com/s2/favicons?sz=256&domain=amazon.in" },
{ name:"Flipkart", url:"https://flipkart.com", image:"https://www.google.com/s2/favicons?sz=256&domain=flipkart.com" },
{ name:"Gmail", url:"https://mail.google.com", image:"https://www.google.com/s2/favicons?sz=256&domain=mail.google.com" },
{ name:"Google Maps", url:"https://maps.google.com", image:"https://www.google.com/s2/favicons?sz=256&domain=maps.google.com" },
{ name:"Google Drive", url:"https://drive.google.com", image:"https://www.google.com/s2/favicons?sz=256&domain=drive.google.com" },
{ name:"GitHub", url:"https://github.com", image:"https://www.google.com/s2/favicons?sz=256&domain=github.com" },
{ name:"Reddit", url:"https://reddit.com", image:"https://www.google.com/s2/favicons?sz=256&domain=reddit.com" },
{ name:"Discord", url:"https://discord.com", image:"https://www.google.com/s2/favicons?sz=256&domain=discord.com" },
{ name:"LinkedIn", url:"https://linkedin.com", image:"https://www.google.com/s2/favicons?sz=256&domain=linkedin.com" },
{ name:"Pinterest", url:"https://pinterest.com", image:"https://www.google.com/s2/favicons?sz=256&domain=pinterest.com" },
{ name:"Poki Games", url:"https://poki.com", image:"https://www.google.com/s2/favicons?sz=256&domain=poki.com" },
{ name:"Cruise Money", url:"https://cruise.money/", image:"https://www.google.com/s2/favicons?sz=256&domain=cruise.money" }

];

// ---------- CREATE APPS ----------

const appList = document.getElementById("appList");

websites.forEach(site => {

    const app = document.createElement("div");

    app.className = "app";

    app.innerHTML = `
        <img src="${site.image}" class="appImage" alt="${site.name}">
        <h3>${site.name}</h3>
        <button class="openBtn">Open</button>
    `;

    app.querySelector(".openBtn").onclick = () => {
        window.open(site.url, "_blank");
    };

    appList.appendChild(app);

});

// ---------- CONTINUE BUTTON ----------

const continueBtn = document.getElementById("continueBtn");

continueBtn.onclick = function () {

    const splash = document.getElementById("splash");
    const home = document.getElementById("home");

    splash.style.opacity = "0";

    setTimeout(() => {

        splash.style.display = "none";

        home.style.display = "block";

        setTimeout(() => {

            home.style.opacity = "1";

            document.body.style.overflow = "auto";

        }, 50);

    }, 800);

};

// ---------- ENTER KEY ----------

document.addEventListener("keydown", function (e) {

    if (e.key === "Enter") {

        continueBtn.click();

    }

});
