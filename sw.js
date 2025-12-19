const CACHE = 'epic-adventure-cache-v9';
const ASSETS = [
  './',
  './index.html',
  './styles.css',
  './game.js',
  './manifest.json'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE).then(cache => cache.addAll(ASSETS)).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
  );
});

self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;
  event.respondWith(
    caches.match(event.request).then(resp => resp || fetch(event.request).then(network => {
      const copy = network.clone();
      caches.open(CACHE).then(cache => cache.put(event.request, copy));
      return network;
    }).catch(() => caches.match('./index.html')))
  );
});
