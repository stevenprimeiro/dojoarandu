/* Arandu — service worker.
   Guarda o app em cache para abrir pelo atalho e funcionar offline.
   Funciona com qualquer nome de arquivo (index.html, DojoArandu vXp.html…). */
const CACHE = 'arandu-v2.90.19';
/* arquivos fixos do atalho (as imagens ficam em assets/) */
const ASSETS = ['manifest.webmanifest', 'assets/icon-192.png', 'assets/icon-512.png'];

self.addEventListener('install', e => {
  e.waitUntil((async () => {
    const c = await caches.open(CACHE);
    /* a página que registrou o service worker, sem depender do nome do arquivo */
    await c.add(new Request('./', { cache: 'reload' })).catch(() => {});
    /* ícones e manifest: se algum faltar, o app instala do mesmo jeito */
    await Promise.all(ASSETS.map(u => c.add(new Request(u, { cache: 'reload' })).catch(() => {})));
    await self.skipWaiting();
  })());
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

  /* página (navegação): rede primeiro, cache só quando estiver offline —
     assim uma versão nova aparece assim que o arquivo é atualizado no GitHub */
  const ehPagina = e.request.mode === 'navigate' ||
    /(?:^|\/)(index\.html|DojoArandu[^/]*\.html)$/.test(url.pathname);
  if (ehPagina) {
    e.respondWith(
      fetch(e.request, { cache: 'no-store' })
        .then(res => {
          if (res && res.ok) {
            const copy = res.clone();
            caches.open(CACHE).then(c => c.put(e.request, copy)).catch(() => {});
          }
          return res;
        })
        .catch(() => caches.match(e.request).then(hit => hit || caches.match('./')))
    );
    return;
  }

  /* imagens e manifest: cache primeiro (são arquivos que não mudam) */
  e.respondWith(
    caches.match(e.request).then(hit => hit || fetch(e.request).then(res => {
      if (res && res.ok) {
        const copy = res.clone();
        caches.open(CACHE).then(c => c.put(e.request, copy)).catch(() => {});
      }
      return res;
    }))
  );
});
