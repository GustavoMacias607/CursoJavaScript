import nuevaFuncion, { nombreCliente, ahorro, mostrarInformacion, tieneSaldo, Cliente } from "./cliente.js";

// importar empresa
import { Empresa } from "./empresa.js"

console.log(nombreCliente);
console.log(ahorro);
console.log(mostrarInformacion(nombreCliente, ahorro));

console.log(tieneSaldo(ahorro));

const cliente = new Cliente(nombreCliente, ahorro)

console.log(cliente.mostrarInformacion())



const empresa = new Empresa("Gustavo", 100, "aprendizaje ")
console.log(empresa.mostrarInformacion())

console.log(nuevaFuncion())