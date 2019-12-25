const CACHE_NAME = "app-cache-v2";
const urlsToCache = ["/", "/css/app.css", "/js/app.js"];

self.addEventListener("install", function(event) {
    // Perform install steps
    event.waitUntil(
        caches.open(CACHE_NAME).then(function(cache) {
            console.log("Opened cache");
            return cache.addAll(urlsToCache);
        })
    );
});
