import {precaching} from 'workbox-precaching';
import {registerRoute} from 'workbox-routing';
import {CacheFirst, StaleWhileRevalidate,NetworkFirst} from 'workbox-strategies';
import {precacheAndRoute} from 'workbox-precaching';

precacheAndRoute(self.__WB_MANIFEST);