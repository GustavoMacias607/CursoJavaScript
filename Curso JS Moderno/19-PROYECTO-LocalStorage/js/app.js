// variables
const formulario = document.querySelector("#formulario");
const listaTweets = document.querySelector("#lista-tweets");
let tweets = [];

//event listeners
eventListeners();

function eventListeners() {
  //cuando el usuario agrega un nuevo tweet

  formulario.addEventListener("submit", agregarTweet);

  //cuando el documento esta listo
  document.addEventListener("DOMContentLoaded", () => {
    tweets = JSON.parse(localStorage.getItem("tweets")) || [];
    console.log(tweets);
    crearHtml();
  });
}

//funciones
function agregarTweet(e) {
  e.preventDefault();

  //text area donde el usuario escribe
  const tweet = document.querySelector("#tweet").value;

  //validacion
  if (tweet === "") {
    mostrarError("un mensaje no puede ir vacio");
    return;
  }
  const tweetObj = {
    id: Date.now(),
    tweet,
  };
  //añadir al arreglo de tweets
  tweets = [...tweets, tweetObj];

  // una ves agregado vamos a crear el html
  crearHtml();

  //reiniciar el formulario
  formulario.reset();
}

//mostrar mensaje de error
function mostrarError(error) {
  const mensajeError = document.createElement("p");
  mensajeError.textContent = error;
  mensajeError.classList.add("error");

  //insertarlo en el contenido
  const contenido = document.querySelector("#contenido");
  contenido.appendChild(mensajeError);
  setTimeout(() => {
    mensajeError.remove();
  }, 3000);
}

//muestra un listado de los tweets

function crearHtml() {
  limpiarHTML();
  if (tweets.length > 0) {
    tweets.forEach((tweet) => {
      //Agregar un boton de eliminar
      const btnEliminar = document.createElement("a");
      btnEliminar.classList.add("borrar-tweet");
      btnEliminar.innerText = "X";

      //añadir la funcion de eliminar
      btnEliminar.onclick = () => {
        borrarTweet(tweet.id);
      };

      //crear el html
      const li = document.createElement("li");
      //añadir el texto

      li.innerHTML = tweet.tweet;
      li.appendChild(btnEliminar);
      //insetarlo en el html
      listaTweets.appendChild(li);
    });
  }
  sincronizarStorage();
}

//agrega los tweets actuales al localStrorage

function sincronizarStorage() {
  localStorage.setItem("tweets", JSON.stringify(tweets));
}

//eliminar un tweet
function borrarTweet(id) {
  tweets = tweets.filter((tweets) => tweets.id !== id);
  crearHtml();
}

//limpiar el html
function limpiarHTML() {
  while (listaTweets.firstChild) {
    listaTweets.removeChild(listaTweets.firstChild);
  }
}
