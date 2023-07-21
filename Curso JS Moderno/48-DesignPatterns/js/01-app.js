// Class Pattern

class Persona {
    constructor(nombre, email) {
        this.nombre = nombre;
        this.email = email
    }
}

const persona = new Persona("Gus", "gus.com")
console.log(persona)