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

// DOM Elements
const searchInput = document.getElementById('searchInput');
const resultsSearchInput = document.getElementById('resultsSearchInput');
const searchWebBtn = document.getElementById('searchWebBtn');
const luckyBtn = document.getElementById('luckyBtn');
const main = document.querySelector('.main');
const resultsSection = document.getElementById('resultsSection');
const resultsList = document.getElementById('resultsList');
const noResults = document.getElementById('noResults');

// Event Listeners
searchInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    searchWebsites();
  }
});

searchInput.addEventListener('input', () => {
  if (searchInput.value.length > 0) {
    // Show preview on typing
  }
});

resultsSearchInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    searchWebsites();
  }
});

resultsSearchInput.addEventListener('input', () => {
  searchWebsites();
});

searchWebBtn.addEventListener('click', searchWebsites);

luckyBtn.addEventListener('click', () => {
  const randomSite = websites[Math.floor(Math.random() * websites.length)];
  window.open(randomSite.url, '_blank');
});

// Search function
function searchWebsites() {
  const query = searchInput.value.toLowerCase() || resultsSearchInput.value.toLowerCase();
  
  if (!query.trim()) {
    main.style.display = 'flex';
    resultsSection.style.display = 'none';
    return;
  }

  // Hide main, show results
  main.style.display = 'none';
  resultsSection.style.display = 'block';
  resultsSearchInput.value = query;

  // Filter websites
  const filtered = websites.filter(site => 
    site.name.toLowerCase().includes(query) || 
    site.url.toLowerCase().includes(query)
  );

  // Display results
  resultsList.innerHTML = '';
  
  if (filtered.length === 0) {
    resultsList.style.display = 'none';
    noResults.style.display = 'block';
  } else {
    resultsList.style.display = 'block';
    noResults.style.display = 'none';

    filtered.forEach(site => {
      const resultItem = document.createElement('div');
      resultItem.className = 'result-item';
      resultItem.innerHTML = `
        <a href="${site.url}" target="_blank" class="result-title">${site.name}</a>
        <div class="result-url">${site.url.replace('https://', '')}</div>
        <div class="result-desc">Visit ${site.name} now</div>
      `;
      resultsList.appendChild(resultItem);
    });
  }
}

// Go back to main search
function goBack() {
  searchInput.value = '';
  resultsSearchInput.value = '';
  main.style.display = 'flex';
  resultsSection.style.display = 'none';
}

// Close results on ESC key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    goBack();
  }
});

// Focus on search input on page load
window.addEventListener('load', () => {
  searchInput.focus();
});
