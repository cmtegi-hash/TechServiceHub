const CACHE_NAME = "tech-service-hub-v1";
const ARCHIVOS = [
  "./index.html",
  "./commercial.html",
  "./residential.html",
  "./job-summary.html",
  "./manifest.json"
];

self.addEventListener("install", (event) => {
  event.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(ARCHIVOS)));
});

self.addEventListener("fetch", (event) => {
  event.respondWith(caches.match(event.request).then((res) => res || fetch(event.request)));
});
