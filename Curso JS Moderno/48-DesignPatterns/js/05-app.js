//Module Pattern

//forma nueva

const mostrarCliente = nombre => {
    console.log(nombre)
}

export default mostrarCliente;

// forma antigua

const module1 = (function () {

    const nombre = 'Gus'

    function hola() {
        console.log("hola")
    }


    return {
        nombre,
        hola
    }
})()