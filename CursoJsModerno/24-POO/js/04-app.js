class Cliente {
  #nombre;

  constructor(nombre, saldo) {
    this.#nombre = nombre;
    this.saldo = saldo;
  }

  mostrarInformacion() {
    return `Cliente: ${this.#nombre}, Saldo: ${this.saldo}`;
  }
  static bienvenida() {
    return `Bienvenido al cajero`;
  }
}

const juan = new Cliente("juan", 2000);

console.log(juan.nombre);
