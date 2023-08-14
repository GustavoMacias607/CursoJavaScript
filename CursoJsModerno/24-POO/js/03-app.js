class Cliente {
  constructor(nombre, saldo) {
    this.nombre = nombre;
    this.saldo = saldo;
  }

  mostrarInformacion() {
    return `Cliente: ${this.nombre}, Saldo: ${this.saldo}`;
  }
  static bienvenida() {
    return `Bienvenido al cajero`;
  }
}

//Herencia
class Empresa extends Cliente {
  constructor(nombre, saldo, telefono, categoria) {
    super(nombre, saldo);
    this.telefono = telefono;
    this.categoria = categoria;
  }

  mostrarInformacion() {
    return `Cliente: ${this.nombre}, Saldo: ${this.saldo}, Telefono: ${this.telefono}, Categoria: ${this.categoria}`;
  }
}

const juan = new Cliente("juan", 400);
const empresa = new Empresa("codigo Empresa", 2000, "1213213", "que onda");

console.log(empresa.mostrarInformacion());
console.log(juan.mostrarInformacion());
