const aplicarDescuento = new Promise((resolve, reject) => {
    const descuento = false
    if (descuento) {
        resolve("despuesto aplicado")
    } else {
        reject("no se puedo aplicar el descuento")
    }
})


aplicarDescuento
    .then(resultado => descuento(resultado))
    .catch(error => console.log(error))

//hay 3 valores posibles

// fulfilled - El promise se cumplio
// rejected - el promise no se cumplio
// pending - aun no se ha determinado si se cumple o no.


function descuento() {
    console.log(mensaje)
}