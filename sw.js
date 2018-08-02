self.addEventListener('install', e => {
    e.waitUntil(
        caches.open('restaurant-cached-items').then(cache => {
            return cache.addAll([
                '/',
                'css/styles.css',
                'js/dbhelper.js',
                'restaurant.html',
                'css/responsive.css',
                'data/restaurants.json',
                'js/main.js',
                'js/creator-sw.js',
                'js/restaurant_info.js',
                'img/1.jpg',
                'img/2.jpg',
                'img/3.jpg',
                'img/4.jpg',
                'img/5.jpg',
                'img/6.jpg',
                'img/7.jpg',
                'img/8.jpg',
                'img/9.jpg',
                'img/10.jpg',
                'https://fonts.gstatic.com/s/roboto/v18/KFOlCnqEu92Fr1MmEU9fBBc4AMP6lQ.woff2',
                'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700'
            ])
        })
    );
});

self.addEventListener('fetch', e => {
    e.respondWith(
        caches.open('restaurant-cached-items')
        .then(cache => cache.match(e.request, {ignoreSearch: true}))
        .then(response => response || fetch(e.request))
        // TODO: I don't know why the catch method does not work.. please tell me :)
        // .catch(err => console.log(err, `Here is your strange event request ${e.request}`));
    );
});
