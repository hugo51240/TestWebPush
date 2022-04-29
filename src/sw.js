const CACHE_NAME = 'test-v1';
const CACHE = [
  '/',
  './index.html',
  './style.css',
  './manifest.webmanifest',
  '/images/pwa-48x48.png',
  '/images/pwa-192x192.png',
  '/images/pwa-512x512.png',
];

self.addEventListener('install', (e) => {
  self.skipWaiting();
  console.log('[Service Worker] installation');
  /*e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('[Service Worker] Mise en cache du contenu');
      return cache.addAll(CACHE);
    })
  );*/
});



self.addEventListener('fetch', (e) => {
  /*e.respondWith(
    caches.match(e.request).then((r) => {
      console.log('[Service Worker] Récupération de la ressource: ' + e.request.url);
      return r || fetch(e.request).then((response) => {
        return caches.open(CACHE_NAME).then((cache) => {
          console.log('[Service Worker] Mise en cache de la nouvelle ressource: ' + e.request.url);
          cache.put(e.request, response.clone());
          return response;
        });
      });
    })
  );*/
});


self.addEventListener('activate', (event) => {
  /*event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME)
            return caches.delete(cacheName);
        })
      );
    })
  );*/
});

self.addEventListener('push', function (e) {
  var options = {
    body: 'This notification was generated from a push!',
    icon: 'images/example.png',
    vibrate: [100, 50, 100],
    data: {
      dateOfArrival: Date.now(),
      primaryKey: '2'
    },
    actions: [
      {
        action: 'explore', title: 'Explore this new world',
        icon: 'images/checkmark.png'
      },
      {
        action: 'close', title: 'Close',
        icon: 'images/xmark.png'
      },
    ]
  };
  e.waitUntil(
    self.registration.showNotification('Hello world!', options)
  );
});

self.addEventListener('notificationclick', (e => {
  if (e.action === "explore") {
    clients.openWindow("http://merry-tanuki-7ee9cd.netlify.app");
    e.notification.close();
  }
  if (e.action === "close")
    e.notification.close();
}));