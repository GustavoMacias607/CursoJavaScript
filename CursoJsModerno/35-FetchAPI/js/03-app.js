const cargarJsonArray = document.querySelector('#cargarJSONArray')
cargarJsonArray.addEventListener('click', obtenerDatos)

function obtenerDatos() {
    const url = 'data/empleados.json'
    fetch(url)
        .then(respuesta => respuesta.json())
        .then(respuesta => mostrarHtml(respuesta))
}

function mostrarHtml(respuesta) {
    const contenido = document.querySelector('#contenido')
    let html = '';
    respuesta.forEach(element => {
        const { id, nombre, empresa, trabajo } = element

        html += `
            <p onclick="hola(${id})">Nombre: ${nombre}</p>
            <p>ID: ${id}</p>
            <p>Empresa: ${empresa}</p>
            <p>Trabajo: ${trabajo}</p>
            
        `

    });
    contenido.innerHTML = html
}


function hola(id) {
    console.log("se dio clic")
    console.log(id)
}