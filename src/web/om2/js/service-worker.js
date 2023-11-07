/*import { MAIN_CONST_EXPORT_apiPath, MAIN_CONST_EXPORT_mediaPath } from '../main.js/';

const CACHE_NAME = 'my-cache-v1';

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
        .then(cache => cache.addAll([
            // Add other resources you want to cache here
        ]))
    );
});

self.addEventListener('fetch', event => {
    const requestUrl = new URL(event.request.url);

    // Check if the request URL matches the specific API endpoint
    if (requestUrl.pathname === '/projects/get-projects/') {
        event.respondWith(
            caches.match(event.request)
            .then(response => {
                return response || fetch(event.request).then(response => {
                    // Cache the fetched response
                    const clonedResponse = response.clone();
                    caches.open(CACHE_NAME).then(cache => {
                        cache.put(event.request, clonedResponse);
                    });
                    return response;
                });
            })
        );
    }
    // For other requests, don't cache and fetch directly
    else {
        event.respondWith(
            fetch(event.request)
        );
    }
});*/