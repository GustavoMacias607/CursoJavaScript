//Symbols


const sym = Symbol(1);
const sym2 = Symbol(1);

const nombre = Symbol();
const apellido = Symbol();

const persona = {}

// Agregar nombre y apellido como llaves del objeto 
persona[nombre] = "juan"
persona[apellido] = "macias"
persona.tipoCliente = "Premium"
persona.saldo = 500


console.log(persona)
console.log(persona[nombre])

// las propiedades que utilizan un symbol no son iterables

for (let i in persona) {
    console.log(i)
}


// Definiar una descripcion del symbol

const nombreCliente = Symbol("nombre del cliente")
const cliente = {};

cliente[nombreCliente] = "pedro"

console.log(cliente[nombreCliente])