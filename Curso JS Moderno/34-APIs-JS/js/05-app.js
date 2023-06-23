document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'visible') {
        console.log("ejecuta para continuar el video")
    } else {
        console.log("pausar el video")
    }
    console.log(document.visibilityState);
})