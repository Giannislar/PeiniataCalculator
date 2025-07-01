// Define a cache name
const CACHE_NAME = 'peiniata-calculator-v2';

// List of files to cache. Make sure these paths match your files on GitHub.
const urlsToCache = [
  './',
  'index.html',
  'Peiniata_Calculator_Logo-min.png',
  'apple-touch-icon.png',
  'favicon-32x32.png',
  'favicon-16x16.png',
  'android-chrome-192x192.png',
  'android-chrome-512x512.png'
];

// Install the service worker and cache all the app's assets
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

// Intercept fetch requests and serve from cache if available
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Cache hit - return response
        if (response) {
          return response;
        }
        // Not in cache - fetch from network
        return fetch(event.request);
      }
    )
  );
});

// Clean up old caches when a new service worker is activated
self.addEventListener('activate', event => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
