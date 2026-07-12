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
