const CACHE_NAME = 'easy-browser-shell-v2';
const APP_ROOT = new URL('./', self.registration.scope);
const INDEX_URL = new URL('index.html', APP_ROOT).toString();
const APP_SHELL = [
  APP_ROOT.toString(),
  INDEX_URL,
  new URL('manifest.webmanifest', APP_ROOT).toString(),
  new URL('easy-browser-beta.png', APP_ROOT).toString()
];
const CACHED_URLS = new Set(APP_SHELL);

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(APP_SHELL))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(
        keys.filter(key => key.startsWith('easy-browser-shell-') && key !== CACHE_NAME)
          .map(key => caches.delete(key))
      ))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  const request = event.request;
  const url = new URL(request.url);
  if (request.method !== 'GET' || url.origin !== self.location.origin || url.pathname.includes('/api/')) {
    return;
  }

  if (request.mode === 'navigate') {
    event.respondWith(
      fetch(request)
        .then(response => {
          if (response.ok) {
            const copy = response.clone();
            caches.open(CACHE_NAME).then(cache => cache.put(INDEX_URL, copy));
          }
          return response;
        })
        .catch(() => caches.match(INDEX_URL))
    );
    return;
  }

  if (CACHED_URLS.has(url.toString())) {
    event.respondWith(
      caches.match(request).then(cached => cached || fetch(request))
    );
  }
});
