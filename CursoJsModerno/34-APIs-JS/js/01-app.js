const notificarBtn = document.querySelector('#notificar')

notificarBtn.addEventListener('click', () => {
    Notification
        .requestPermission()
        .then(resultado => {
            console.log(`el resultado es: ${resultado}`)
        })
})


const verNoficacion = document.querySelector('#verNotificacion');
verNoficacion.addEventListener('click', () => {
    if (Notification.permission === 'granted') {
        const notificacion = new Notification("Esta es la notificacion", {
            icon: 'img/ccj.png',
            body: 'codigo con juan, aprende de proyectos'
        })
        notificacion.onclick = function () {
            window.open('https://www.codigoconjuan.com')
        }
    }

})