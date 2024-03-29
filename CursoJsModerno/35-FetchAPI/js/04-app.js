const cargarAPI = document.querySelector('#cargarAPI')
cargarAPI.addEventListener('click', obtenerDatos)


function obtenerDatos() {
    const url = 'https://picsum.photos/list'
    fetch(url)
        .then(respuesta => respuesta.json())
        .then(respuesta => mostrarHTML(respuesta))
}

function mostrarHTML(datos) {
    const contenido = document.querySelector('.contenido')

    let html

    datos.forEach(element => {
        const { author, post_url } = element

        html += `
        <p>Autor: ${author}</p>
        <a href="${post_url}" target="_blank">Ver Imagen</a>
        `
    });

    contenido.innerHTML = html
}