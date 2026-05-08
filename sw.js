const CACHE_NAME = 'zettle-cache-v1';
const urlsToCache = [
  './',
  './index.html',
  './semester.html',
  './subject.html',
  './viewer.html',
  './login.html',
  './dashboard.html',
  './styles.css',
  './data.js',
  './icon.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Cache hit - return response
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
