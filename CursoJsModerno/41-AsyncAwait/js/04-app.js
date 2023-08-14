
function descargarNuevosClientes() {


    return new Promise(resolve => {
        console.log("Descargando Clientes....")

        setTimeout(() => {
            resolve('los clientes fueron descargados')
        }, 5000);
    })
}



function descargarNuevosPedidos() {


    return new Promise(resolve => {
        console.log("Descargando Pedidos....")

        setTimeout(() => {
            resolve('los Pedidos fueron descargados')
        }, 3000);
    })
}

const app = async () => {


    try {
        const respuesta = await Promise.all([descargarNuevosClientes(), descargarNuevosPedidos()])
        console.log(respuesta[0])
        console.log(respuesta[1])
    } catch (error) {

    }
}

app()