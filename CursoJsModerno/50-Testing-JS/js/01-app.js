const suma = (a, b) => a + b


let resultado = suma(1, 2)
let esperado = 3

expected(esperado).toBe(resultado)


function expected() {
    return {
        toBe(resultado) {
            if (esperado === resultado) {
                console.log("todo esta bien")
            } else {
                console.error("No paso la prueba")
            }
        }
    }
}