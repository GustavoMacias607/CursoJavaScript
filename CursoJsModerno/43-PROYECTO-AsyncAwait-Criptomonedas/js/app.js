const criptomonedasSelect = document.querySelector('#criptomonedas')
const monedaSelect = document.querySelector('#moneda')


const formulario = document.querySelector('#formulario')
const resultado = document.querySelector('#resultado')

const objBusqueda = {
    moneda: '',
    criptomoneda: ''
}

//crear un promise
const obtenerCriptomonedas = criptomonedas => new Promise(resolve => {
    resolve(criptomonedas)
})

document.addEventListener('DOMContentLoaded', () => {
    consultarCriptomonedas();
    formulario.addEventListener('submit', submitFormulario)

    criptomonedasSelect.addEventListener('change', leerValor)
    monedaSelect.addEventListener('change', leerValor)
})

async function consultarCriptomonedas() {
    const url = `https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD`

    // fetch(url)
    //     .then(respuesta => respuesta.json())
    //     .then(resultado => obtenerCriptomonedas(resultado.Data))
    //     .then(criptomonedas => selectCriptomonedas(criptomonedas))

    try {
        const respuesta = await fetch(url)
        const resultado = await respuesta.json()
        const criptomonedas = await obtenerCriptomonedas(resultado.Data)
        selectCriptomonedas(criptomonedas)
    } catch (error) {
        console.log(error)
    }

}


function selectCriptomonedas(criptomonedas) {
    criptomonedas.forEach(cripto => {
        const { FullName, Name } = cripto.CoinInfo;

        const option = document.createElement('option');
        option.value = Name
        option.textContent = FullName
        criptomonedasSelect.appendChild(option)
    });
}

function leerValor(e) {
    objBusqueda[e.target.name] = e.target.value
}
function submitFormulario(e) {
    e.preventDefault()

    //validar
    const { moneda, criptomoneda } = objBusqueda

    if (moneda === '' || criptomoneda === '') {
        mostrarAlerta('Ambos campos son obligatorios')
        return;
    }

    //consultar la API con los resultados

    consultarAPI();
}

async function consultarAPI() {
    const { moneda, criptomoneda } = objBusqueda;

    const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`
    mostrarSpinner();




    // fetch(url)
    //     .then(respuesta => respuesta.json())
    //     .then(cotizacion => mostrarCotizacionHTML(cotizacion.DISPLAY[criptomoneda][moneda]));



    try {
        const respuesta = await fetch(url)
        const cotizacion = await respuesta.json();
        mostrarCotizacionHTML(cotizacion.DISPLAY[criptomoneda][moneda])
    } catch (error) {
        console.log(error)
    }



}

function mostrarCotizacionHTML(cotizacion) {


    limpiarHTML()
    const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, LASTUPDATE } = cotizacion;

    const precio = document.createElement('p')
    precio.classList.add('precio')
    precio.innerHTML = `El precio es: <span>${PRICE}</span>`

    const precioAlto = document.createElement('p')
    precioAlto.innerHTML = `El precio mas alto del dia es: <span>${HIGHDAY}</span>`


    const precioBajo = document.createElement('p')
    precioBajo.innerHTML = `El precio mas bajo del dia es: <span>${LOWDAY}</span>`


    const ultimasHoras = document.createElement('p')
    ultimasHoras.innerHTML = `Variacion ultimas 24 horas: <span>${CHANGEPCT24HOUR}%</span>`


    const UltimaActualizacion = document.createElement('p')
    UltimaActualizacion.innerHTML = `Ultima Actualizacion: <span>${LASTUPDATE}</span>`


    resultado.appendChild(precio)
    resultado.appendChild(precioAlto)
    resultado.appendChild(precioBajo)
    resultado.appendChild(ultimasHoras)
    resultado.appendChild(UltimaActualizacion)
}

function mostrarAlerta(msg) {

    const existeError = document.querySelector('.error')
    if (!existeError) {
        const divMensaje = document.createElement('div')
        divMensaje.classList.add('error')

        //mensaje de error
        divMensaje.textContent = msg

        formulario.appendChild(divMensaje)

        setTimeout(() => {
            divMensaje.remove()
        }, 3000);
    }

}

function limpiarHTML() {
    while (resultado.firstChild) {
        resultado.removeChild(resultado.firstChild);
    }
}
function mostrarSpinner() {
    limpiarHTML()

    const spinner = document.createElement('div')
    spinner.classList.add('sk-cube-grid')
    spinner.innerHTML = `
    <div class="sk-cube sk-cube1"></div>
  <div class="sk-cube sk-cube2"></div>
  <div class="sk-cube sk-cube3"></div>
  <div class="sk-cube sk-cube4"></div>
  <div class="sk-cube sk-cube5"></div>
  <div class="sk-cube sk-cube6"></div>
  <div class="sk-cube sk-cube7"></div>
  <div class="sk-cube sk-cube8"></div>
  <div class="sk-cube sk-cube9"></div>
    `

    resultado.appendChild(spinner)
}