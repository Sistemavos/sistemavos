/**
 * SistemaVOS — Service Worker
 * Estrategia: Cache-first para recursos estáticos, Network-first para API
 * Versión: 1.0.0
 */

const SW_VERSION   = 'sistemavos-v1.0.0';
const CACHE_STATIC = SW_VERSION + '-static';
const CACHE_CDN    = SW_VERSION + '-cdn';

// Recursos del shell de la app (siempre en caché)
const SHELL_URLS = [
  '/app.html',
  '/manifest.json',
  '/icons/icon-192x192.png',
  '/icons/icon-512x512.png',
  '/icons/apple-touch-icon.png',
];

// Dominios de CDN que se cachean (recursos externos)
const CDN_DOMAINS = [
  'cdnjs.cloudflare.com',
  'fonts.googleapis.com',
  'fonts.gstatic.com',
  'ka-f.fontawesome.com',
];

// Dominios que NUNCA se cachean (APIs, autenticación, tiempo real)
const NO_CACHE_DOMAINS = [
  'supabase.co',
  'supabase.com',
  'hook.eu1.make.com',
  'mercadopago.com',
  'mercadolibre.com',
];

// ══════════════════════════════════════════════════════════════
// INSTALL — pre-cachear el shell
// ══════════════════════════════════════════════════════════════
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_STATIC)
      .then(cache => cache.addAll(SHELL_URLS))
      .then(() => self.skipWaiting())
      .catch(err => console.warn('[SW] Install error:', err))
  );
});

// ══════════════════════════════════════════════════════════════
// ACTIVATE — limpiar caches viejos
// ══════════════════════════════════════════════════════════════
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys
          .filter(key => key !== CACHE_STATIC && key !== CACHE_CDN)
          .map(key => caches.delete(key))
      )
    ).then(() => self.clients.claim())
  );
});

// ══════════════════════════════════════════════════════════════
// FETCH — estrategia por tipo de recurso
// ══════════════════════════════════════════════════════════════
self.addEventListener('fetch', event => {
  const url = new URL(event.request.url);

  // 1. Nunca interceptar solicitudes de autenticación / APIs
  if (NO_CACHE_DOMAINS.some(d => url.hostname.includes(d))) return;

  // 2. Solo GET
  if (event.request.method !== 'GET') return;

  // 3. CDN externos — cache-first con network fallback
  if (CDN_DOMAINS.some(d => url.hostname.includes(d))) {
    event.respondWith(cdnFirst(event.request));
    return;
  }

  // 4. Shell de la app — stale-while-revalidate
  if (SHELL_URLS.includes(url.pathname) || url.pathname === '/') {
    event.respondWith(staleWhileRevalidate(event.request));
    return;
  }

  // 5. Iconos y otros estáticos del mismo origen — cache-first
  if (url.origin === self.location.origin) {
    event.respondWith(cacheFirst(event.request));
    return;
  }
});

// ── Estrategias ────────────────────────────────────────────────

async function cacheFirst(request) {
  const cached = await caches.match(request);
  if (cached) return cached;
  try {
    const response = await fetch(request);
    if (response && response.status === 200) {
      const cache = await caches.open(CACHE_STATIC);
      cache.put(request, response.clone());
    }
    return response;
  } catch {
    return new Response('Recurso no disponible sin conexión.', { status: 503 });
  }
}

async function cdnFirst(request) {
  const cached = await caches.match(request);
  if (cached) return cached;
  try {
    const response = await fetch(request);
    if (response && response.status === 200) {
      const cache = await caches.open(CACHE_CDN);
      cache.put(request, response.clone());
    }
    return response;
  } catch {
    return caches.match(request) || new Response('CDN no disponible.', { status: 503 });
  }
}

async function staleWhileRevalidate(request) {
  const cache  = await caches.open(CACHE_STATIC);
  const cached = await cache.match(request);

  const networkFetch = fetch(request).then(response => {
    if (response && response.status === 200) {
      cache.put(request, response.clone());
    }
    return response;
  }).catch(() => null);

  return cached || await networkFetch || new Response('Sin conexión.', { status: 503 });
}

// ══════════════════════════════════════════════════════════════
// MENSAJE: forzar actualización desde la app
// ══════════════════════════════════════════════════════════════
self.addEventListener('message', event => {
  if (event.data === 'SKIP_WAITING') {
    self.skipWaiting();
  }
  if (event.data === 'CLEAR_CACHE') {
    caches.keys().then(keys => Promise.all(keys.map(k => caches.delete(k))));
  }
});
