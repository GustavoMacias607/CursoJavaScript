const cargarJSONBtn = document.querySelector('#cargarJSON')

cargarJSONBtn.addEventListener('click', obtenerDatos)

function obtenerDatos() {
    fetch('data/empleado.json')
        .then(respuesta => {
            console.log(respuesta)
            return respuesta.json()
        })
        .then(respuesta => mostrarHtml(respuesta));

}

function mostrarHtml({ empresa, id, nombre, trabajo }) {
    const contenido = document.querySelector('.contenido');

    contenido.innerHTML = `
    <p>Nombre: ${nombre}
    <p>ID: ${id}
    <p>Empresa: ${empresa}
    <p>Trabajo: ${trabajo}</p
    `

}