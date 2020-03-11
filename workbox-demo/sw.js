importScripts('https://storage.googleapis.com/workbox-cdn/releases/5.0.0/workbox-sw.js');
const {NetworkFirst,StaleWhileRevalidate,CacheFirst} = workbox.strategies;
const {CacheableResponsePlugin} =workbox.cacheableResponse;
const {ExpirationPlugin} =workbox.expiration;
workbox.precaching.precacheAndRoute([{"revision":"9046a2433cc99a027944b63c92f94317","url":"images/Desktop-Wallpaper-HD1.jpg"},{"revision":"5d6230fe36c64277691783f1f6b9c704","url":"images/icons/android-icon-144x144.png"},{"revision":"ea9639ea1bfdb9f9ef162768a8544724","url":"images/icons/android-icon-192x192.png"},{"revision":"2eb6de5010495c9ed3ab9f7f5067a57b","url":"images/icons/android-icon-36x36.png"},{"revision":"ada38075f5d44c3db59795703ea24a4e","url":"images/icons/android-icon-48x48.png"},{"revision":"f48778a405b3d21d6a857395e188c741","url":"images/icons/android-icon-72x72.png"},{"revision":"0e3c7067a6892e88b531ca5a423e55f1","url":"images/icons/android-icon-96x96.png"},{"revision":"c16004dc903d74eea67a224b0b0a5fa1","url":"images/icons/apple-icon-114x114.png"},{"revision":"d1a3448a829eb726b5624bf9c17196c4","url":"images/icons/apple-icon-120x120.png"},{"revision":"5d6230fe36c64277691783f1f6b9c704","url":"images/icons/apple-icon-144x144.png"},{"revision":"14f333ee454761b47f1db5de46d2e16f","url":"images/icons/apple-icon-152x152.png"},{"revision":"a68d9b39279a10da096ef0f412fba524","url":"images/icons/apple-icon-180x180.png"},{"revision":"f234badc98c59a831e7aa4ed7ca93bac","url":"images/icons/apple-icon-57x57.png"},{"revision":"19b650a76753642d9a9b4267787df3da","url":"images/icons/apple-icon-60x60.png"},{"revision":"f48778a405b3d21d6a857395e188c741","url":"images/icons/apple-icon-72x72.png"},{"revision":"3311b4333835ecef0e2ad508f5684c58","url":"images/icons/apple-icon-76x76.png"},{"revision":"6dd3cd5166c720a93bcf7c625b68578d","url":"images/icons/apple-icon-precomposed.png"},{"revision":"6dd3cd5166c720a93bcf7c625b68578d","url":"images/icons/apple-icon.png"},{"revision":"be67e2c357d3a2e8e725e3e66afede0a","url":"images/icons/favicon-16x16.png"},{"revision":"cab2e049361c2bb526b772c9a118d2ee","url":"images/icons/favicon-32x32.png"},{"revision":"0e3c7067a6892e88b531ca5a423e55f1","url":"images/icons/favicon-96x96.png"},{"revision":"6d8a710de3876439f3deb64d1ebc832d","url":"images/icons/favicon.ico"},{"revision":"865c39c03112853b16a6e1a8d2c8eacb","url":"images/icons/icon-128x128.png"},{"revision":"0f31e80573331b6ce49f4e8e22d375d2","url":"images/icons/icon-144x144.png"},{"revision":"0e9b08a8312853f0c7cd480b42b3e26c","url":"images/icons/icon-152x152.png"},{"revision":"711501834a829bddc072f27c1e970cd7","url":"images/icons/icon-192x192.png"},{"revision":"a6d3635cda101f5231d5bdd47bc67408","url":"images/icons/icon-384x384.png"},{"revision":"cdfe6cb1cbf344378b325286b200d2fc","url":"images/icons/icon-512x512.png"},{"revision":"7cb3452684e16078349ca499a1f3e5ad","url":"images/icons/icon-72x72.png"},{"revision":"a33ce2661ad4631881249bd1259f355e","url":"images/icons/icon-96x96.png"},{"revision":"5d6230fe36c64277691783f1f6b9c704","url":"images/icons/ms-icon-144x144.png"},{"revision":"39ba7e3121763755b874496a161f63bc","url":"images/icons/ms-icon-150x150.png"},{"revision":"ec77438a8af83a3804d9d0a6840dd044","url":"images/icons/ms-icon-310x310.png"},{"revision":"c716f81f1461969229a801c837a05f39","url":"images/icons/ms-icon-70x70.png"},{"revision":"159cd617be4dc3d35d0acb1884d3c686","url":"index.html"},{"revision":"75a53eff14ad33b82b4c7b2a8723b57c","url":"js/app.js"},{"revision":"dddd0de6b5a5e679554e93dfb75fb38a","url":"manifest.json"},{"revision":"9130b38d841221def976f5769a483dd4","url":"package-lock.json"},{"revision":"30eb38456b8db3b9d74ab128615d29f3","url":"package.json"},{"revision":"5f63c060919737aa833fc730b6e6d7cb","url":"pages/about.html"},{"revision":"2b2b2f999a5411e25b367df3454d1a21","url":"styles/style.css"},{"revision":"ee170047ea35389fcc40499e0052ed2a","url":"workbox-066b4670.js"},{"revision":"39999a4900072b8786b0a77614fcc132","url":"workbox-7c85bfc1.js"},{"revision":"06e669632544a98765441067b55a3795","url":"workbox-config.js"}])

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