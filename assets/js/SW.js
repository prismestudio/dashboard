function registerServiceWorker() {
  // enregistre le script sw avec les navigateurs qui le gèrent
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js', { scope: '/prismestudio.github.io/dashboard' }).then(() => {
      console.log('Service Worker enregistré correctement.');
    }).catch(error => {
      console.log('Erreur lors de l''enregistrement du Service Worker : ', error);
    });
  }
}

// sw.js
self.addEventListener('install', e => {
 e.waitUntil(
   // Après l'installation du service worker,
   // ouvre un nouveau cache
   caches.open('mon-cache-pwa').then(cache => {
     // Ajoute toutes les URLs des éléments à mettre en cache
     return cache.addAll([
       '/',
       '/index.html',
       '/app.html',
       '/images/logo.png',
       '/assets/css/style.css',
       '/assets/js/main.js',
       '/assets/js/dashboard.js',
       '/assets/js/widgets.js',
     ]);
   })
 );
});