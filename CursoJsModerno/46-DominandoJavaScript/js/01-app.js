// Scope -- el alcance de una variable



const cliente = 'Gus'

function Cliente() {
    const cliente = 'juanito'
    console.log(cliente)
}

Cliente()
console.log(cliente)