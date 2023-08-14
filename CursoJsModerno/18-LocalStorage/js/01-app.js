localStorage.setItem("nombre", "juan");

const producto = {
  nombre: "Monitor 24 pulgadas",
  precio: 300,
};

const productoString = JSON.stringify(producto);
console.log(productoString);
localStorage.setItem("producto", productoString);

const meses = ["enero", "febrero", "marzo"];
const mesesString = JSON.stringify(meses);
localStorage.setItem("meses", mesesString);
