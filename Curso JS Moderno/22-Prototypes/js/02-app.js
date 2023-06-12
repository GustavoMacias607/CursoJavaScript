function Cliente(nombre, saldo) {
  this.nombre = nombre;
  this.saldo = saldo;
}

const juan = new Cliente("juan", 500);

function formatearCliente(cliente) {
  const { nombre, saldo } = cliente;
  return `El cliente ${nombre} tien un saldo de ${saldo}`;
}

function formatearEmpresa(empresa) {
  const { nombre, saldo, categoria } = empresa;
  return `El cliente ${nombre} tien un saldo de ${saldo} pertenece a la categoria ${categoria}`;
}

console.log(formatearCliente(juan));

function Empresa(nombre, saldo, categoria) {
  this.nombre = nombre;
  this.saldo = saldo;
  this.categoria = categoria;
}

const CCJ = new Empresa("codigo con juan", 3000, "cursos en linea");
console.log(formatearEmpresa(CCJ));
