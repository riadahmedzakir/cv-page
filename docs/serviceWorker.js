const cachedName = "version-1";

self.addEventListener("install", (e) => {
  console.log("Service Worker Installed");
});

self.addEventListener("activate", (e) => {
  console.log("Service Worker Activated");

  //Step - Keep Cache light
  e.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cache) => {
          if (cache !== cachedName) {
            console.log("Cached Service worker is being cleared");
            return caches.delete(cache);
          }
        }),
      );
    }),
  );
});

self.addEventListener("fetch", (event) => {
  console.log("fetching service worker");
  event.respondWith(
    caches.match(event.request).then((cacheResponse) => {
      if (cacheResponse) {
        fetch(event.request).then((networkResponse) => {
          return caches.open(cachedName).then((cache) => {
            cache.put(event.request, networkResponse.clone());
            return networkResponse;
          })
        });
        return cacheResponse;
      } else {
        return fetch(event.request).then((networkResponse) => {
          return caches.open(cachedName).then((cache) => {
            cache.put(event.request, networkResponse.clone());
            return networkResponse;
          })
        });
      }
    })
  );
});
