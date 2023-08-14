// callbacks

const paises = ["francia", "españa", "portugal", "australia", "inglaterra"]

function nuevoPais(pais, juanita) {
    setTimeout(() => {
        paises.push(pais);
        juanita();
    }, 2000)
}

function mostrarPaises() {
    setTimeout(() => {
        paises.forEach(pais => {
            console.log(pais)
        })


    }, 1000)
}

mostrarPaises();

nuevoPais("Alemania", mostrarPaises)
