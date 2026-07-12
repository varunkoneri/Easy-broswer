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

for(let i=0;i<2000;i++){

    const dot = document.createElement("div");

    dot.className = "dot";

    const size = Math.random()*3+1;

    dot.style.width = size + "px";
    dot.style.height = size + "px";

    dot.style.left = Math.random()*100 + "%";
    dot.style.top = Math.random()*100 + "%";

    dot.style.background =
        colors[Math.floor(Math.random()*colors.length)];

    dot.style.animationDuration =
        (Math.random()*10+8)+"s";

    dot.style.animationDelay =
        (Math.random()*5)+"s";

    particleContainer.appendChild(dot);

}

// ---------- WEBSITE LIST ----------

const websites = [

{name:"Google",url:"https://google.com"},
{name:"YouTube",url:"https://youtube.com"},
{name:"ChatGPT",url:"https://chatgpt.com"},
{name:"Wikipedia",url:"https://wikipedia.org"},
{name:"Instagram",url:"https://instagram.com"},
{name:"Facebook",url:"https://facebook.com"},
{name:"X",url:"https://x.com"},
{name:"Spotify",url:"https://spotify.com"},
{name:"Netflix",url:"https://netflix.com"},
{name:"Amazon",url:"https://amazon.in"},
{name:"Flipkart",url:"https://flipkart.com"},
{name:"Gmail",url:"https://mail.google.com"},
{name:"Google Maps",url:"https://maps.google.com"},
{name:"Google Drive",url:"https://drive.google.com"},
{name:"GitHub",url:"https://github.com"},
{name:"Reddit",url:"https://reddit.com"},
{name:"Discord",url:"https://discord.com"},
{name:"LinkedIn",url:"https://linkedin.com"},
{name:"Pinterest",url:"https://pinterest.com"},
{name:"Poki Games",url:"https://poki.com"},
{name:"Cruise Money",url:"https://cruise.money/"}
const apps = [
  { name: "Google", url: "https://www.google.com" },
  { name: "YouTube", url: "https://www.youtube.com" },
  { name: "ChatGPT", url: "https://chatgpt.com" },
  { name: "Wikipedia", url: "https://wikipedia.org" },
  { name: "Gmail", url: "https://mail.google.com" },
  { name: "Google Drive", url: "https://drive.google.com" },
  { name: "Google Maps", url: "https://maps.google.com" },
  { name: "Google Translate", url: "https://translate.google.com" },
  { name: "Google Photos", url: "https://photos.google.com" },
  { name: "Google Docs", url: "https://docs.google.com" },
  { name: "Google Sheets", url: "https://sheets.google.com" },
  { name: "Google Slides", url: "https://slides.google.com" },
  { name: "Bing", url: "https://www.bing.com" },
  { name: "DuckDuckGo", url: "https://duckduckgo.com" },
  { name: "Yahoo", url: "https://www.yahoo.com" },
  { name: "Amazon", url: "https://www.amazon.in" },
  { name: "Flipkart", url: "https://www.flipkart.com" },
  { name: "eBay", url: "https://www.ebay.com" },
  { name: "Netflix", url: "https://www.netflix.com" },
  { name: "Disney+", url: "https://www.disneyplus.com" },
  { name: "Prime Video", url: "https://www.primevideo.com" },
  { name: "Spotify", url: "https://www.spotify.com" },
  { name: "Apple Music", url: "https://music.apple.com" },
  { name: "JioHotstar", url: "https://www.hotstar.com" },
  { name: "JioCinema", url: "https://www.jiocinema.com" },
  { name: "Instagram", url: "https://www.instagram.com" },
  { name: "Facebook", url: "https://www.facebook.com" },
  { name: "X", url: "https://x.com" },
  { name: "Threads", url: "https://www.threads.net" },
  { name: "Snapchat", url: "https://www.snapchat.com" },
  { name: "Pinterest", url: "https://www.pinterest.com" },
  { name: "Reddit", url: "https://www.reddit.com" },
  { name: "Discord", url: "https://discord.com" },
  { name: "Telegram", url: "https://web.telegram.org" },
  { name: "WhatsApp Web", url: "https://web.whatsapp.com" },
  { name: "LinkedIn", url: "https://www.linkedin.com" },
  { name: "GitHub", url: "https://github.com" },
  { name: "GitLab", url: "https://gitlab.com" },
  { name: "CodePen", url: "https://codepen.io" },
  { name: "Replit", url: "https://replit.com" },
  { name: "Stack Overflow", url: "https://stackoverflow.com" },
  { name: "W3Schools", url: "https://www.w3schools.com" },
  { name: "MDN Web Docs", url: "https://developer.mozilla.org" },
  { name: "GeeksforGeeks", url: "https://www.geeksforgeeks.org" },
  { name: "FreeCodeCamp", url: "https://www.freecodecamp.org" },
  { name: "LeetCode", url: "https://leetcode.com" },
  { name: "HackerRank", url: "https://www.hackerrank.com" },
  { name: "Scratch", url: "https://scratch.mit.edu" },
  { name: "Canva", url: "https://www.canva.com" },
  { name: "Figma", url: "https://www.figma.com" },
  { name: "Pixabay", url: "https://pixabay.com" },
  { name: "Pexels", url: "https://www.pexels.com" },
  { name: "Unsplash", url: "https://unsplash.com" },
  { name: "Khan Academy", url: "https://www.khanacademy.org" },
  { name: "Coursera", url: "https://www.coursera.org" },
  { name: "Udemy", url: "https://www.udemy.com" },
  { name: "BYJU'S", url: "https://byjus.com" },
  { name: "Vedantu", url: "https://www.vedantu.com" },
  { name: "Brainly", url: "https://brainly.in" },
  { name: "NCERT", url: "https://ncert.nic.in" },
  { name: "BBC", url: "https://www.bbc.com" },
  { name: "CNN", url: "https://www.cnn.com" },
  { name: "NDTV", url: "https://www.ndtv.com" },
  { name: "The Hindu", url: "https://www.thehindu.com" },
  { name: "Cricbuzz", url: "https://www.cricbuzz.com" },
  { name: "ESPN Cricinfo", url: "https://www.espncricinfo.com" },
  { name: "Weather.com", url: "https://weather.com" },
  { name: "AccuWeather", url: "https://www.accuweather.com" },
  { name: "Time and Date", url: "https://www.timeanddate.com" },
  { name: "Desmos Calculator", url: "https://www.desmos.com/scientific" },
  { name: "Notion", url: "https://www.notion.so" },
  { name: "Trello", url: "https://trello.com" },
  { name: "Zoom", url: "https://zoom.us" },
  { name: "Google Meet", url: "https://meet.google.com" },
  { name: "Microsoft Teams", url: "https://teams.microsoft.com" },
  { name: "Dropbox", url: "https://www.dropbox.com" },
  { name: "OneDrive", url: "https://onedrive.live.com" },
  { name: "MEGA", url: "https://mega.nz" },
  { name: "Internet Archive", url: "https://archive.org" },
  { name: "NASA", url: "https://www.nasa.gov" },
  { name: "Google Earth", url: "https://earth.google.com" },
  { name: "OpenStreetMap", url: "https://www.openstreetmap.org" },
  { name: "Chess.com", url: "https://www.chess.com" },
  { name: "Lichess", url: "https://lichess.org" },
  { name: "Poki", url: "https://poki.com" },
  { name: "CrazyGames", url: "https://www.crazygames.com" },
  { name: "Miniclip", url: "https://www.miniclip.com" },
  { name: "Steam", url: "https://store.steampowered.com" },
  { name: "Epic Games", url: "https://store.epicgames.com" },
  { name: "Roblox", url: "https://www.roblox.com" },
  { name: "Minecraft", url: "https://www.minecraft.net" },
  { name: "OpenAI", url: "https://openai.com" },
  { name: "Perplexity", url: "https://www.perplexity.ai" }
];    

];

const appList = document.getElementById("appList");

websites.forEach(site=>{

const app=document.createElement("div");

app.className="app";

app.innerHTML=`

<h3>${site.name}</h3>

<button>
Open
</button>

`;

app.querySelector("button").onclick=()=>{

window.open(site.url,"_blank");

};

appList.appendChild(app);

});

// ---------- CONTINUE BUTTON ----------

const continueBtn=document.getElementById("continueBtn");

continueBtn.onclick=function(){

const splash=document.getElementById("splash");

const home=document.getElementById("home");

splash.style.opacity="0";

setTimeout(()=>{

splash.style.display="none";

home.style.display="block";

setTimeout(()=>{

home.style.opacity="1";

document.body.style.overflow="auto";

},50);

},800);

};

// ---------- ENTER KEY ----------

document.addEventListener("keydown",function(e){

if(e.key==="Enter"){

continueBtn.click();

}

});
