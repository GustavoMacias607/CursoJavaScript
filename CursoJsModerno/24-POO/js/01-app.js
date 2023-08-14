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

const juan = new Cliente("juan", 400);
console.log(juan.mostrarInformacion());
console.log(juan);
console.log(Cliente.bienvenida());
const Cliente2 = class {
  constructor(nombre, saldo) {
    this.nombre = nombre;
    this.saldo = saldo;
  }
};

const juan2 = new Cliente2("juan", 400);

console.log(juan2);
