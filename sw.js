self.addEventListener('install', e => {
  self.skipWaiting();
  e.waitUntil(
    caches.open('shabangu-v4').then(cache => {
      return cache.addAll(['./index.html','./manifest.json','./icon.png']);
    })
  );
});
self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(res => res || fetch(e.request))
  );
});
