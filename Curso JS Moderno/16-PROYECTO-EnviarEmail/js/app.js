document.addEventListener("DOMContentLoaded", function () {
  const email = {
    email: "",
    asunto: "",
    mensaje: "",
    emailCC: "",
  };

  //Seleccionar los elemntos de la interfaz
  const inputEmail = document.querySelector("#email");
  const inputEmailCC = document.querySelector("#emailCC");
  const inputAsunto = document.querySelector("#asunto");
  const inputMensaje = document.querySelector("#mensaje");
  const formulario = document.querySelector("#formulario");
  const btnSubmit = document.querySelector("#formulario button[type='submit']");
  const btnReset = document.querySelector("#formulario button[type='reset']");
  const spinner = document.querySelector("#spin");
  //Asignar eventos
  inputEmail.addEventListener("input", validar);
  inputEmailCC.addEventListener("input", validar);
  inputAsunto.addEventListener("input", validar);
  inputMensaje.addEventListener("input", validar);
  formulario.addEventListener("submit", enviarEmail);

  btnReset.addEventListener("click", function (e) {
    e.preventDefault();
    //reiniciar el objeto
    resetFormulario();
  });

  function enviarEmail(e) {
    e.preventDefault();
    spinner.classList.add("flex");
    spinner.classList.remove("hidden");

    setTimeout(() => {
      spinner.classList.remove("flex");
      spinner.classList.add("hidden");

      resetFormulario();

      //Crear una alerta
      const alertaExito = document.createElement("P");
      alertaExito.classList.add(
        "bg-green-500",
        "text-white",
        "p-2",
        "text-center",
        "rounded-lg",
        "mt-10",
        "font-bold",
        "text-sm",
        "uppercase"
      );
      alertaExito.textContent = "Mensaje enviado correctamente";
      formulario.appendChild(alertaExito);
      setTimeout(() => {
        alertaExito.remove();
      }, 3000);
    }, 3000);
  }

  function validar(e) {
    if (e.target.value.trim() === "") {
      if (e.target.id === "emailCC") {
        limpiarAlerta(e.target.parentElement);
        return;
      }
      mostrarAlerta(
        `El campo ${e.target.id} es obligatorio`,
        e.target.parentElement
      );
      email[e.target.id] = "";

      return;
    }

    if (
      (e.target.id === "email" || e.target.id === "emailCC") &&
      !validarEmail(e.target.value)
    ) {
      mostrarAlerta("El email no es valido", e.target.parentElement);
      email[e.target.id] = "";
      comprobarEmail();
      return;
    }

    limpiarAlerta(e.target.parentElement);

    //Asignar los volores

    email[e.target.id] = e.target.value.trim().toLowerCase();

    // Comprobar el objeto de email
    comprobarEmail();
    console.log(email);
  }

  function mostrarAlerta(mensaje, referencia) {
    //comprueba si ya existe una alerta
    limpiarAlerta(referencia);
    //Generar alerta en HTML
    const error = document.createElement("P");
    error.textContent = mensaje;
    error.classList.add(
      "bg-red-600",
      "text-white",
      "p-2",
      "m-2",
      "text-center"
    );

    //inyectar el error al formulario
    referencia.appendChild(error);
  }

  function limpiarAlerta(referencia) {
    const alerta = referencia.querySelector(".bg-red-600");
    if (alerta) {
      alerta.remove();
    }
  }

  function validarEmail(email) {
    const regex = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
    const resultado = regex.test(email);
    return resultado;
  }

  function comprobarEmail() {
    if (Object.values(email).includes === "") {
      btnSubmit.classList.add("opacity-50");
      btnSubmit.disabled = true;
      return;
    }
    btnSubmit.classList.remove("opacity-50");
    btnSubmit.disabled = false;
  }

  function resetFormulario() {
    //reiniciar el objeto
    email.email = "";
    email.asunto = "";
    email.mensaje = "";
    email.emailCC = "";
    formulario.reset();
    comprobarEmail();
  }
});
