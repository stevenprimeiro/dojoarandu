/* Arandu — service worker.
   Guarda o app em cache para abrir pelo atalho e funcionar offline.
   Funciona com qualquer nome de arquivo (index.html, dojo-arandu-v2.html…). */
const CACHE = 'arandu-v2';

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE)
      /* guarda a página que registrou o service worker (sem depender do nome do arquivo) */
      .then(c => c.add(new Request('./', { cache: 'reload' })).catch(() => {}))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  const url = new URL(e.request.url);
  if (url.origin !== location.origin) return;   /* não mexe em wa.me, CDNs etc. */

  /* rede primeiro, cache como rede de segurança */
  e.respondWith(
    fetch(e.request)
      .then(res => {
        if (res && res.status === 200) {
          const copy = res.clone();
          caches.open(CACHE).then(c => c.put(e.request, copy)).catch(() => {});
        }
        return res;
      })
      .catch(() => caches.match(e.request, { ignoreSearch: true })
        .then(hit => hit || caches.match('./')))
  );
});
