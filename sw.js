/* Service worker: lets the home-screen app open even with a weak connection.
   "Network first": always tries to load the latest version of the site,
   and only falls back to the saved copy when offline. So your updates
   show up right away — nothing to change here when you redeploy. */
const CACHE = "laprofe-v1";
const CORE = ["/", "/index.html", "/success.html", "/manifest.webmanifest", "/icons/icon-192.png"];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(CORE)).then(() => self.skipWaiting()));
});
self.addEventListener("activate", e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener("fetch", e => {
  const req = e.request;
  // Only handle this site's own GET requests (never the contact form, never Cal.com)
  if (req.method !== "GET" || new URL(req.url).origin !== self.location.origin) return;
  e.respondWith(
    fetch(req).then(res => {
      const copy = res.clone();
      caches.open(CACHE).then(c => c.put(req, copy));
      return res;
    }).catch(() => caches.match(req).then(r => r || caches.match("/")))
  );
});
