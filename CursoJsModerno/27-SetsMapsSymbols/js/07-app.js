// iterador yield

function* createGenerador() {
    yield 1;
    yield "gus";
    yield 3 + 3
    yield true;
}

// const iterador = createGenerador();

// console.log(iterador.next().value);
// console.log(iterador.next());
// console.log(iterador.next().value);
// console.log(iterador.next());
// console.log(iterador.next());
// console.log(iterador);



//Generador para carrito de compras

function* generadorCarrito(carrito) {
    for (let i = 0; i < carrito.length; i++) {
        yield carrito[i]
    }
}


const carrito = ["producto 1", "producto 2", "producto 3"]

const iterador = generadorCarrito(carrito);
console.log(iterador.next());
console.log(iterador.next());
console.log(iterador.next());