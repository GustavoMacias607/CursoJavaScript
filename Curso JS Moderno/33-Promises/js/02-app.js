const paises = []

function nuevoPais(pais, callback) {
    paises.push(pais);
    console.log(`Agregado: ${pais}`)
    callback();

}

function mostrarPaises() {
    console.log(paises)
}

function IniciarCallBackHell() {
    setTimeout(() => {
        nuevoPais("alemania", mostrarPaises);
        setTimeout(() => {
            nuevoPais("francia", mostrarPaises);
            setTimeout(() => {
                nuevoPais("inglaterra", mostrarPaises);
            }, 3000);
        }, 3000);
    }, 3000);
}

IniciarCallBackHell()