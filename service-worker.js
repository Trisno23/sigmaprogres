self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open("tni-cache-v1").then((cache) => {
      return cache.addAll([
        "./",
        "./index.html",
        "./css/style.css",
        "./js/main.js",
        "./manifest.json"
      ]);
    })
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
