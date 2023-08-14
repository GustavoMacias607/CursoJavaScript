
//closures, sirve para sacar una variable de una funcion

const obtenerCliente = () => {

    const cliente = "gus"

    const mostrarCliente = () => {
        console.log(cliente)
    }

    return mostrarCliente


}

const cliente = obtenerCliente()

cliente()