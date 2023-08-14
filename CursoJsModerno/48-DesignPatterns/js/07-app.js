// namespace, funcion global

const restauranApp = {}

restauranApp.platillos = [
    {
        platillo: "Pizza",
        precio: 10
    },
    {
        platillo: "Hamburgesa",
        precio: 15
    }
]

restauranApp.funciones = {
    agregarPlatillos(platillo, precio) {
        plato = {
            platillo,
            precio
        }

        restauranApp.platillos.push(plato)
    },
    mostrarPlatillos(platillos) {
        platillos.forEach((plato, index) => {
            console.log(`${index} : platillo: ${plato.platillo}`);
        })
    }
}
restauranApp.funciones.agregarPlatillos("taco", 20)
console.log(restauranApp.platillos)
restauranApp.funciones.mostrarPlatillos(restauranApp.platillos)