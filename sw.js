/* Offline shell for the branches site.
   غيّر رقم VERSION لما ترفع تعديل على الملفات عشان الموبايلات تاخد النسخة الجديدة.
   بيانات الشيت (CSV) بتتحفظ جوه الصفحة نفسها في localStorage، فالـ service worker بيتعامل مع ملفات الموقع بس. */
const VERSION = "branches-2026-11-14-v1";
const FILES = ["./", "index.html", "config.js", "data.js", "logo.png", "manifest.webmanifest",
  "icons/icon-192.png", "icons/icon-512.png", "icons/icon-maskable-512.png", "icons/apple-touch-icon.png"];
self.addEventListener("install", e => { e.waitUntil(caches.open(VERSION).then(c => c.addAll(FILES)).then(() => self.skipWaiting())); });
self.addEventListener("activate", e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== VERSION).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener("fetch", e => {
  if (e.request.method !== "GET") return;
  const u = new URL(e.request.url);
  if (u.origin !== location.origin) return;           // الشيت والخرائط تعدّي عادي
  // network-first: التعديلات تظهر فورًا، ولو مفيش نت يفتح من الكاش
  e.respondWith(
    fetch(e.request).then(r => { const copy = r.clone(); caches.open(VERSION).then(c => c.put(e.request, copy)); return r; })
      .catch(() => caches.match(e.request).then(r => r || caches.match("index.html")))
  );
});
