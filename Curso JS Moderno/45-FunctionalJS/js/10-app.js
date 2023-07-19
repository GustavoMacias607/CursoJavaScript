//uso de composition

const obtenerNombre = info => ({
    mostrarNombre() {
        console.log(`Nombre: ${info.nombre}`)
    }
})


const modificarPuesto = info => ({
    actualizarPuesto(puesto) {
        info.puesto = puesto
        return puesto
    }
})


function Cliente(nombre, empresa) {
    let info = {
        nombre,
        empresa
    }

    return Object.assign(
        info,
        obtenerNombre(info)
    )
}

function Empresa(nombre, puesto) {
    let info = {
        nombre,
        puesto
    }


    return Object.assign(
        info,
        obtenerNombre(info),
        modificarPuesto(info)
    )
}

const cliente1 = Cliente("Gustavo", "Desarrollo")
cliente1.mostrarNombre()


const trabajador = Empresa("Desarrollo", "programador")
trabajador.mostrarNombre()
console.log('Nuevo Puesto:', trabajador.actualizarPuesto("Gerente"))
