const nombreCache = 'apv-v2'

const archivos = [
    '/',
    '/index.html',
    '/error.html',
    '/css/bootstrap.css',
    '/css/styles.css',
    '/js/app.js',
    '/js/apv.js'
];



// cuando se instala el service worker
self.addEventListener('install', e => {
    e.waitUntil(
        caches.open(nombreCache)
            .then(cache => {
                console.log('cacheando')
                cache.addAll(archivos)
            })
    )
})

//Activar el service worker
self.addEventListener('activate', e => {
    console.log("service Worker Activado")

    e.waitUntil(
        caches.keys()
            .then(keys => {
                return Promise.all(
                    keys.filter(key => key !== nombreCache)
                        .map(key => caches.delete(key))
                )
            })
    )
})

// Evento fetch para descargar archivos estaticos
self.addEventListener('fetch', e => {


    e.respondWith(
        caches.match(e.request)
            .then(respuestaCache => {
                return respuestaCache
            })
            .then(() => caches.match('/error.html')
            )
    )
})