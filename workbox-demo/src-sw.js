importScripts('https://storage.googleapis.com/workbox-cdn/releases/5.0.0/workbox-sw.js');
const {NetworkFirst,StaleWhileRevalidate,CacheFirst} = workbox.strategies;
const {CacheableResponsePlugin} =workbox.cacheableResponse;
const {ExpirationPlugin} =workbox.expiration;
workbox.precaching.precacheAndRoute(self.__WB_MANIFEST)

workbox.routing.registerRoute(
    /https:\/\/cdnjs\.cloudflare\.com/,
    new NetworkFirst()
);
workbox.routing.registerRoute(
    /https:\/\/cdn\.jsdelivr\.net/,
    new NetworkFirst()
);

workbox.routing.registerRoute(
    /^https:\/\/fonts\.googleapis\.com/,
    new StaleWhileRevalidate({
      cacheName: 'google-fonts-stylesheets',
    }),
  );


  // Cache the Google Fonts webfont files with a cache first strategy for 1 year.
  workbox.routing.registerRoute(
    /^https:\/\/fonts\.gstatic\.com/,
    new CacheFirst({
      cacheName: 'google-fonts-webfonts',
      plugins: [
        new CacheableResponsePlugin({
          statuses: [0, 200],
        }),
        new ExpirationPlugin({
          maxAgeSeconds: 60 * 60 * 24 * 365,
        }),
      ],
    }),
  );

workbox.precaching.precacheAndRoute([]);