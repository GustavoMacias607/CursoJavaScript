// Hoisting
//funciones

//Declaresion 

obtenerCliente('Gus')

function obtenerCliente(nombre) {
    console.log(`El nombre del cliente es ${nombre}`);
}


//Expresion 

const obtenerCliente2 = function (nombre) {
    console.log(`El nombre del cliente es ${nombre}`);
}

obtenerCliente2("Adolfo")