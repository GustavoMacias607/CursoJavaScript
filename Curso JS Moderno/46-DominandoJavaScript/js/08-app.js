// self

self.onload = () => {

    console.log('Ventana lista')
}
window.nombre = "Monitor"
const producto = {
    mostrarInfo: function (id) {
        return `El producto: ${self.nombre}`
    }
}

console.log(producto.mostrarInfo());