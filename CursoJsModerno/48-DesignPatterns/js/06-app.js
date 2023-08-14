// Mixin Pattern agregarle un objeto de funciones a una clase para que esta las pueda usar 


class Persona {
    constructor(nombre, email) {
        this.nombre = nombre;
        this.email = email
    }
}


const funcionesPersona = {

    mostrarNombre() {
        console.log(`Mi nombre es ${this.nombre}`);
    }
}

Object.assign(Persona.prototype, funcionesPersona)

const cliente = new Persona('Gus', 'gus.com')
cliente.mostrarNombre()
