function Cliente(nombre, saldo) {
  this.nombre = nombre;
  this.saldo = saldo;
}

Cliente.prototype.tipoCliente = function () {
  let tipo;
  if (this.saldo > 10000) {
    tipo: "gold";
  } else if (this.saldo > 5000) {
    tipo = "platinum";
  } else {
    tipo = "normal";
  }
  return tipo;
};
Cliente.prototype.nombreClienteSaldo = function () {
  return `Nombre: ${this.nombre} Saldo: ${
    this.saldo
  } tipo cliente: ${this.tipoCliente()}`;
};

Cliente.prototype.retiraSaldo = function (retira) {
  this.saldo -= retira;
};

//Intanciarlo
const pedro = new Cliente("pedro", 6000);
console.log(pedro.tipoCliente());
console.log(pedro.nombreClienteSaldo());
pedro.retiraSaldo(1000);
console.log(pedro.nombreClienteSaldo());

console.log(pedro);
