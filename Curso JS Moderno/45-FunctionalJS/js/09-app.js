// partials y currying

const suma = (a, b, c) => {
    return a + b + c
}

const parcial = a => b => c => suma(a, b, c)

const resultado = parcial(1)(2)(3)
console.log(resultado)