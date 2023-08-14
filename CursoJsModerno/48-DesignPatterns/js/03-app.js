// sigleton sirve para no crear dos objetos de una clase


let instancia = null


class Persona {
    constructor(nombre, email) {
        if (!instancia) {
            this.nombre = nombre
            this.email = email
            instancia = this
        } else {
            return intancia
        }
    }
}


const persona = new Persona('Juan', 'correo@correo.com')
console.log(persona)