/* eslint-disable no-undef */
// @ts-nocheck
var cacheName = 'Portfolio';

var cacheAssets = ['/', './index.html', 'manifest.json', 'bundle.js'];

// installation
self.addEventListener('install', e => {
  e.waitUntil(
    caches
      .open(cacheName)
      .then(cache => {
        cache.addAll(cacheAssets);
      })
      .then(() => self.skipWaiting())
      .catch(err => {
        console.log('log err', err);
      })
  );
});

// activation
self.addEventListener('activate', e => {
  console.log('Service Worker: Installed');
});

// fetch
self.addEventListener('fetch', e => {
  e.respondWith(
    fetch(e.request)
      .then(res => {
        return res;
      })
      .catch(() => caches.match(e.request))
  );
});
