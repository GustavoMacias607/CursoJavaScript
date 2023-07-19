// New binding

function Auto(modelo, color) {
    this.modelo = modelo;
    this.color = color;
}

const auto = new Auto("Vocho", "Negro")
console.log(auto)


// Window binding
window.juanito = "perez"

function hola() {
    console.log(`Hola ${juanito}`)
}

hola()