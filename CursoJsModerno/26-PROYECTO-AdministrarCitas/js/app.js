//campos del formulario
const mascotaInput = document.querySelector("#mascota");
const propietarioInput = document.querySelector("#propietario");
const telefonoInput = document.querySelector("#telefono");
const fechaInput = document.querySelector("#fecha");
const horaInput = document.querySelector("#hora");
const sintomasInput = document.querySelector("#sintomas");

// UI
const formulario = document.querySelector("#nueva-cita");
const contenedorCitas = document.querySelector("#citas");

let editando;

//clases
class Citas {
  constructor() {
    this.citas = [];
  }
  agregarCita(cita) {
    this.citas = [...this.citas, cita]

  }

  eliminarCita(id) {
    this.citas = this.citas.filter(citas => citas.id !== id)
  }

  editarCita(citaActualizada) {
    this.citas = this.citas.map(cita => cita.id === citaActualizada.id ? citaActualizada : cita)
  }
}

class UI {
  imprimirAlerta(mensaje, tipo) {
    const divMensaje = document.createElement("div");
    divMensaje.classList.add("text-center", "alert", "d-block", "col-12");

    //agregar clase en base al tipo de error
    if (tipo === "error") {
      divMensaje.classList.add("alert-danger")
    } else {
      divMensaje.classList.add("alert-success")
    }

    // mensaje de error
    divMensaje.textContent = mensaje

    // agregamos al DOM
    document.querySelector("#contenido").insertBefore(divMensaje, document.querySelector(".agregar-cita"))

    setTimeout(() => {
      divMensaje.remove()
    }, 3000)
  }

  imprimirCitas({ citas }) {
    this.limpiarHtml()

    citas.forEach(cita => {
      const { mascota, propietario, telefono, fecha, hora, sintomas, id } = cita;

      const divCita = document.createElement('div');
      divCita.classList.add("cita", "p-3");
      divCita.dataset.id = id;

      // scripting de los elementos de la cita
      const mascotaParrafo = document.createElement('h2');
      mascotaParrafo.classList.add("card-title", "font-weight-bolder")
      mascotaParrafo.textContent = mascota;

      const propietarioParrafo = document.createElement('p');
      propietarioParrafo.innerHTML = `
      <span class="font-weight-bolder">Propietario:</span> ${propietario}
      `

      const telefonoParrafo = document.createElement('p');
      telefonoParrafo.innerHTML = `
      <span class="font-weight-bolder">Telefono:</span> ${telefono}
      `
      const fechaParrafo = document.createElement('p');
      fechaParrafo.innerHTML = `
      <span class="font-weight-bolder">Fecha:</span> ${fecha}
      `
      const horaParrafo = document.createElement('p');
      horaParrafo.innerHTML = `
      <span class="font-weight-bolder">Hora:</span> ${hora}
      `
      const sintomasParrafo = document.createElement('p');
      sintomasParrafo.innerHTML = `
      <span class="font-weight-bolder">Sintomas:</span> ${sintomas}
      `

      //boton para eliminar esta cita
      const btnEliminar = document.createElement('button')
      btnEliminar.classList.add("btn", "btn-danger", "mr-2")
      btnEliminar.innerHTML = 'Eliminar <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"> <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>'
      btnEliminar.onclick = () => eliminarCita(id);

      //añade un boton para editar
      const btnEditar = document.createElement('button');
      btnEditar.classList.add("btn", "btn-info")
      btnEditar.innerHTML = 'Editar <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"> <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" /> </svg>'
      btnEditar.onclick = () => cargarEdicion(cita)



      // agregar los parrafos al divCita
      divCita.appendChild(mascotaParrafo);
      divCita.appendChild(propietarioParrafo);
      divCita.appendChild(telefonoParrafo);
      divCita.appendChild(fechaParrafo);
      divCita.appendChild(horaParrafo);
      divCita.appendChild(sintomasParrafo);
      divCita.appendChild(btnEliminar);
      divCita.appendChild(btnEditar);

      // agregar las citas al html
      contenedorCitas.appendChild(divCita);
    })
  }
  limpiarHtml() {
    while (contenedorCitas.firstChild) {
      contenedorCitas.removeChild(contenedorCitas.firstChild);
    }
  }
}

const ui = new UI();
const administrarCitas = new Citas();

//registrar eventos
eventListeners();
function eventListeners() {
  mascotaInput.addEventListener("input", datosCita);
  propietarioInput.addEventListener("input", datosCita);
  telefonoInput.addEventListener("input", datosCita);
  fechaInput.addEventListener("input", datosCita);
  horaInput.addEventListener("input", datosCita);
  sintomasInput.addEventListener("input", datosCita);

  formulario.addEventListener("submit", nuevaCita);
}

//objeto con informacion de la cita
const citaObj = {
  mascota: "",
  propietario: "",
  telefono: "",
  fecha: "",
  hora: "",
  sintomas: "",
};

//agrega datos al objeto de cita
function datosCita(e) {
  citaObj[e.target.name] = e.target.value;

}

//valida y agrega una nueva cita a la clase de citas

function nuevaCita(e) {
  e.preventDefault();

  const { mascota, propietario, telefono, fecha, hora, sintomas } = citaObj;

  //validar
  if (mascota === "" || telefono === "" || telefono === "" || fecha === "" || hora === "" || sintomas === "") {
    ui.imprimirAlerta("Todos los campos son obligatorios", "error")
    return;
  }
  if (editando) {
    ui.imprimirAlerta("Editado Correctamente", "")
    //pasar el objeto de la cita a la edicion

    administrarCitas.editarCita({ ...citaObj })

    //regresar el texto del boton a su estado original
    formulario.querySelector('button[type=submit]').textContent = "Crear cita"

    //quitar modo edicion
    editando = false
  } else {
    //generar un id unico
    citaObj.id = Date.now()

    // creando una nueva cita
    administrarCitas.agregarCita({ ...citaObj })

    //mensaje de agregado correctamente
    ui.imprimirAlerta("Se agrego Correctamente", "")
  }



  // reiniciar el objeto para la validacion
  reiniciarObjeto();

  //reiniciar el formulario 
  formulario.reset()

  //mostrar el html
  ui.imprimirCitas(administrarCitas);
}

function reiniciarObjeto() {
  citaObj.mascota = ""
  citaObj.propietario = ""
  citaObj.telefono = ""
  citaObj.fecha = ""
  citaObj.hora = ""
  citaObj.sintomas = ""
}

function eliminarCita(id) {
  // Eliminar la cita
  administrarCitas.eliminarCita(id);
  // Muestre un mensaje
  ui.imprimirAlerta("la cita se elimino correctamente", "");
  // refrescar las citas
  ui.imprimirCitas(administrarCitas);

}

//carga los datos y el modo edicion
function cargarEdicion(cita) {
  const { mascota, propietario, telefono, fecha, hora, sintomas, id } = cita;

  //llenar los inputs
  mascotaInput.value = mascota
  propietarioInput.value = propietario
  telefonoInput.value = telefono
  fechaInput.value = fecha
  horaInput.value = hora
  sintomasInput.value = sintomas

  //llenar el objeto 
  citaObj.mascota = mascota
  citaObj.propietario = propietario
  citaObj.telefono = telefono
  citaObj.fecha = fecha
  citaObj.hora = hora
  citaObj.sintomas = sintomas
  citaObj.id = id


  //cambiar el texto del boton
  formulario.querySelector('button[type=submit]').textContent = "Guardar Cambios"
  editando = true

}