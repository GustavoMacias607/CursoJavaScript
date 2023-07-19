// Explicit Binding

function persona(el1, el2) {
    console.log(`mi nombre es: ${this.nombre}, y escucho ${el1} y ${el2}`)
}


const informacion = {
    nombre: 'Gus'
}

const musicaFavorita = ["POP", "POP Ingles"]

persona.call(informacion, musicaFavorita[0], musicaFavorita[1])
persona.apply(informacion, musicaFavorita)

const funcion = persona.bind(informacion, musicaFavorita[0], musicaFavorita[1])
funcion()