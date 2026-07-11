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

websites.forEach(site => {
  const div = document.createElement("div");

  div.className = "app";

  div.innerHTML = `
    <h3>${site.name}</h3>
    <button onclick="window.open('${site.url}','_blank')">
      Open
    </button>
  `;

  appList.appendChild(div);
});
