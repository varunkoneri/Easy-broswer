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
  {name:"Cruise Money",url:"https://cruise.money/"},
  {name:"Twitch",url:"https://twitch.tv"},
  {name:"Stack Overflow",url:"https://stackoverflow.com"},
  {name:"Medium",url:"https://medium.com"},
  {name:"Dev.to",url:"https://dev.to"},
  {name:"Figma",url:"https://figma.com"},
  {name:"Slack",url:"https://slack.com"},
  {name:"Trello",url:"https://trello.com"},
  {name:"Notion",url:"https://notion.so"},
  {name:"Canva",url:"https://canva.com"},
  {name:"VS Code",url:"https://vscode.dev"},
  {name:"Vercel",url:"https://vercel.com"},
  {name:"Netlify",url:"https://netlify.com"},
  {name:"Heroku",url:"https://heroku.com"},
  {name:"AWS",url:"https://aws.amazon.com"},
  {name:"Google Classroom",url:"https://classroom.google.com"},
  {name:"Coursera",url:"https://coursera.org"},
  {name:"Udemy",url:"https://udemy.com"},
  {name:"CodePen",url:"https://codepen.io"},
  {name:"JSFiddle",url:"https://jsfiddle.net"},
  {name:"Replit",url:"https://replit.com"},
  {name:"WhatsApp",url:"https://web.whatsapp.com"},
  {name:"Telegram",url:"https://web.telegram.org"},
  {name:"Twitter",url:"https://twitter.com"},
  {name:"Quora",url:"https://quora.com"},
  {name:"Airbnb",url:"https://airbnb.com"},
  {name:"Uber",url:"https://uber.com"},
  {name:"Booking.com",url:"https://booking.com"},
  {name:"eBay",url:"https://ebay.com"},
  {name:"PayPal",url:"https://paypal.com"},
  {name:"Stripe",url:"https://stripe.com"},
  {name:"Adobe Creative Cloud",url:"https://adobe.com"},
  {name:"Microsoft Office 365",url:"https://office.com"},
  {name:"Apple iCloud",url:"https://icloud.com"},
  {name:"Dropbox",url:"https://dropbox.com"},
  {name:"OneDrive",url:"https://onedrive.live.com"},
  {name:"Box",url:"https://box.com"},
  {name:"VLC Media Player",url:"https://videolan.org"},
  {name:"Zoom",url:"https://zoom.us"},
  {name:"Google Meet",url:"https://meet.google.com"},
  {name:"Skype",url:"https://skype.com"},
  {name:"Blender",url:"https://blender.org"},
  {name:"GIMP",url:"https://gimp.org"},
  {name:"Audacity",url:"https://audacityteam.org"},
  {name:"Inkscape",url:"https://inkscape.org"},
  {name:"Photopea",url:"https://photopea.com"},
  {name:"Handbrake",url:"https://handbrake.fr"},
  {name:"SoundCloud",url:"https://soundcloud.com"},
  {name:"Bandcamp",url:"https://bandcamp.com"},
  {name:"Tidal",url:"https://tidal.com"},
  {name:"Apple Music",url:"https://music.apple.com"},
  {name:"Amazon Music",url:"https://music.amazon.com"},
  {name:"YouTube Music",url:"https://music.youtube.com"},
  {name:"Deezer",url:"https://deezer.com"},
  {name:"DuckDuckGo",url:"https://duckduckgo.com"},
  {name:"Bing",url:"https://bing.com"},
  {name:"Yahoo",url:"https://yahoo.com"},
  {name:"Brave Search",url:"https://search.brave.com"},
  {name:"Ecosia",url:"https://ecosia.org"},
  {name:"Wolfram Alpha",url:"https://wolframalpha.com"},
  {name:"IMDb",url:"https://imdb.com"},
  {name:"Rotten Tomatoes",url:"https://rottentomatoes.com"},
  {name:"Letterboxd",url:"https://letterboxd.com"},
  {name:"Goodreads",url:"https://goodreads.com"},
  {name:"Kindle",url:"https://read.amazon.com"},
  {name:"Wattpad",url:"https://wattpad.com"},
  {name:"Snapchat",url:"https://snapchat.com"},
  {name:"TikTok",url:"https://tiktok.com"},
  {name:"Mastodon",url:"https://mastodon.social"},
  {name:"Bluesky",url:"https://bsky.app"},
  {name:"Threads",url:"https://threads.net"},
  {name:"Signal",url:"https://signal.org"},
  {name:"Proton Mail",url:"https://proton.me"},
  {name:"Tutanota",url:"https://tutanota.com"},
  {name:"Etsy",url:"https://etsy.com"},
  {name:"ASOS",url:"https://asos.com"},
  {name:"H&M",url:"https://hm.com"},
  {name:"Zara",url:"https://zara.com"},
  {name:"Target",url:"https://target.com"},
  {name:"Walmart",url:"https://walmart.com"},
  {name:"Best Buy",url:"https://bestbuy.com"},
  {name:"Costco",url:"https://costco.com"},
  {name:"IKEA",url:"https://ikea.com"},
  {name:"Wayfair",url:"https://wayfair.com"},
  {name:"DoorDash",url:"https://doordash.com"},
  {name:"Uber Eats",url:"https://ubereats.com"},
  {name:"Grubhub",url:"https://grubhub.com"},
  {name:"Zomato",url:"https://zomato.com"},
  {name:"Swiggy",url:"https://swiggy.com"},
  {name:"Expedia",url:"https://expedia.com"},
  {name:"Kayak",url:"https://kayak.com"},
  {name:"Skyscanner",url:"https://skyscanner.com"},
  {name:"Trivago",url:"https://trivago.com"},
  {name:"Hotels.com",url:"https://hotels.com"}
];

let filteredWebsites = [...websites];

const searchInput = document.getElementById('searchInput');
const appList = document.getElementById('appList');
const noResults = document.getElementById('noResults');

// Display all apps on page load
function displayApps(appsToDisplay) {
  appList.innerHTML = '';
  
  if (appsToDisplay.length === 0) {
    appList.style.display = 'none';
    noResults.style.display = 'block';
    return;
  }
  
  appList.style.display = 'flex';
  noResults.style.display = 'none';
  
  appsToDisplay.forEach(website => {
    const appCard = document.createElement('div');
    appCard.className = 'app';
    appCard.innerHTML = `
      <h3>${website.name}</h3>
      <button onclick="openWebsite('${website.url}')">Open</button>
    `;
    appList.appendChild(appCard);
  });
}

// Open website in new tab
function openWebsite(url) {
  window.open(url, '_blank');
}

// Search functionality
searchInput.addEventListener('input', () => {
  const query = searchInput.value.toLowerCase().trim();
  
  if (query === '') {
    filteredWebsites = [...websites];
  } else {
    filteredWebsites = websites.filter(site => 
      site.name.toLowerCase().includes(query) || 
      site.url.toLowerCase().includes(query)
    );
  }
  
  displayApps(filteredWebsites);
});

// Display all apps on page load
window.addEventListener('load', () => {
  displayApps(websites);
  searchInput.focus();
});
