

export const nombreCliente = "gus"

export const ahorro = 200


export function mostrarInformacion(nombre, ahorro) {
    return `Cliente: ${nombre} - ahorro: ${ahorro}`
}

export function tieneSaldo(ahorro) {
    if (ahorro > 0) {
        console.log("tiene saldo")
    } else {
        console.log("no tienes saldo")
    }
}


export class Cliente {
    constructor(nombre, ahorro) {
        this.nombre = nombre
        this.ahorro = ahorro
    }

    mostrarInformacion() {
        return `Cliente: ${this.nombre} - ahorro: ${this.ahorro}`
    }
}

export default function nuevaFuncion(){
    console.log("Este es el export default")
}