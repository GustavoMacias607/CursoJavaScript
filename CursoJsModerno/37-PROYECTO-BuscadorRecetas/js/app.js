function iniciarApp() {
    const resultado = document.querySelector('#resultado')
    const selectCategorias = document.querySelector('#categorias')
    if (selectCategorias) {
        selectCategorias.addEventListener('change', seleccionarCategoria)
        obtenerCategorias()
    }
    const favoritosDiv = document.querySelector('.favoritos')
    if (favoritosDiv) {
        obtenerFavoritos()
    }




    const modal = new bootstrap.Modal('#modal', {})



    function obtenerCategorias() {
        const url = 'https://www.themealdb.com/api/json/v1/1/categories.php'
        fetch(url)
            .then(response => response.json())
            .then(resultado => mostrarCategorias(resultado.categories))
    }
    function mostrarCategorias(categorias = []) {
        categorias.forEach(categoria => {
            const { strCategory } = categoria
            const option = document.createElement('option')
            option.value = strCategory;
            option.textContent = strCategory
            selectCategorias.appendChild(option)
        })

    }

    function seleccionarCategoria(e) {
        const categoria = e.target.value
        const url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoria}`
        fetch(url)
            .then(respuesta => respuesta.json())
            .then(resultado => mostrarRecetas(resultado.meals))
    }



    function mostrarRecetas(recetas = []) {

        limpiarHTML(resultado)

        const heading = document.createElement('H2')
        heading.classList.add('text-center', 'text-black', 'my-5')
        heading.textContent = recetas.length ? 'Resultados' : 'No hay resultados'
        resultado.appendChild(heading)

        //iterar en los resultados

        recetas.forEach(receta => {
            const { idMeal, strMeal, strMealThumb } = receta
            const recetaContenedor = document.createElement('div');
            recetaContenedor.classList.add('col-md-4')

            const recetaCard = document.createElement('div');
            recetaCard.classList.add('card', 'mb-4')

            const recetaImagen = document.createElement('IMG')
            recetaImagen.classList.add('card-img-top');
            recetaImagen.alt = `Imagen de la teceta ${strMeal ?? receta.titulo}`
            recetaImagen.src = strMealThumb ?? receta.img;


            const recetaCardBody = document.createElement('div');
            recetaCardBody.classList.add('card-body')

            const recetaHeading = document.createElement('H3');
            recetaHeading.classList.add('card-title', 'mb-3')
            recetaHeading.textContent = strMeal ?? receta.titulo

            const recetaBtn = document.createElement('button')
            recetaBtn.classList.add('btn', 'btn-danger', 'w-100')
            recetaBtn.textContent = 'Ver Receta';
            // recetaBtn.dataset.bsTarget = '#modal';
            // recetaBtn.dataset.bsToggle = 'modal';
            recetaBtn.onclick = function () {
                seleccionarReceta(idMeal ?? receta.id)
            }


            //inyectar en el codigo HTML
            recetaCardBody.appendChild(recetaHeading)
            recetaCardBody.appendChild(recetaBtn)

            recetaCard.appendChild(recetaImagen)
            recetaCard.appendChild(recetaCardBody)

            recetaContenedor.appendChild(recetaCard)

            resultado.appendChild(recetaContenedor)





        })

    }

    function seleccionarReceta(id) {
        const url = `https://themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
        fetch(url)
            .then(respuesta => respuesta.json())
            .then(resultado => mostrarRecetaModal(resultado.meals[0]))
    }

    function mostrarRecetaModal(receta) {

        const { idMeal, strInstructions, strMeal, strMealThumb } = receta
        //Añadir contenido al modal
        const modalTitle = document.querySelector('.modal-title')
        const modalBody = document.querySelector('.modal-body')
        modalTitle.textContent = strMeal
        modalBody.innerHTML = `
        <img class="img-fluid" src="${strMealThumb}" alt="Receta" ${strMealThumb} </img>
        <h3 class="my-3">Instrucciones</h3>
        <p>${strInstructions}</p>
        <h3 class="my-3">Ingredientes y Cantidades</h3>`;
        const listGroup = document.createElement('ul');
        listGroup.classList.add('list-group')
        //mostrar cantidades e ingredientes
        for (let i = 1; i <= 20; i++) {
            if (receta[`strIngredient${i}`]) {
                const ingrediente = receta[`strIngredient${i}`]
                const cantidad = receta[`strMeasure${i}`]

                const ingredienteLi = document.createElement('li')
                ingredienteLi.classList.add('list-group-item')
                ingredienteLi.textContent = `${ingrediente} - ${cantidad}`

                listGroup.appendChild(ingredienteLi)
            }

        }
        modalBody.appendChild(listGroup)

        const modalFooter = document.querySelector('.modal-footer')
        limpiarHTML(modalFooter)
        //botones de cerrar y favorito
        const btnFavorito = document.createElement('button')
        btnFavorito.classList.add('btn', 'btn-danger', 'col')
        btnFavorito.textContent = existeStorage(idMeal) ? 'Eliminar Favorito' : 'Guardar Favorito';

        //almacenar en localStorage
        btnFavorito.onclick = () => {
            if (existeStorage(idMeal)) {
                eliminarFavorito(idMeal)
                btnFavorito.textContent = "Guardar Favorito";
                mostrarToast("Eliminado correctamente")
                return
            }
            agregarFavorito({
                id: idMeal,
                titulo: strMeal,
                img: strMealThumb
            })
            btnFavorito.textContent = "Eliminar Favorito";
            mostrarToast("Agregado Correctamente")
        }

        const btnCerrar = document.createElement('button')
        btnCerrar.classList.add('btn', 'btn-secondary', 'col')
        btnCerrar.textContent = 'Cerrar';
        btnCerrar.onclick = () => modal.hide()



        modalFooter.appendChild(btnFavorito);
        modalFooter.appendChild(btnCerrar);




        //muestra el modal
        modal.show();
    }
    function agregarFavorito(receta) {
        const favoritos = JSON.parse(localStorage.getItem('favoritos')) ?? []
        localStorage.setItem('favoritos', JSON.stringify([...favoritos, receta]))
    }
    function eliminarFavorito(id) {
        const favoritos = JSON.parse(localStorage.getItem('favoritos')) ?? []

        const nuevosFavoritos = favoritos.filter(favorito => favorito.id !== id)

        localStorage.setItem('favoritos', JSON.stringify(nuevosFavoritos))
    }
    function existeStorage(id) {
        const favoritos = JSON.parse(localStorage.getItem('favoritos')) ?? []
        return favoritos.some(favorito => favorito.id === id)
    }
    function mostrarToast(mensaje) {
        const toastDiv = document.querySelector('#toast')
        const toastBody = document.querySelector('.toast-body')
        const toast = new bootstrap.Toast(toastDiv)
        toastBody.textContent = mensaje
        toast.show()

    }
    function obtenerFavoritos() {
        const favoritos = JSON.parse(localStorage.getItem('favoritos')) ?? [];
        if (favoritos.length) {
            mostrarRecetas(favoritos);
            return
        }
        const noFavoritos = document.createElement('P')
        noFavoritos.textContent = 'No hay favoritos aun'
        noFavoritos.classList.add('fs-4', 'text-center', 'font-bold', 'mt-5')
        favoritosDiv.appendChild(noFavoritos)
    }
    function limpiarHTML(selector) {
        while (selector.firstChild) {
            selector.removeChild(selector.firstChild)
        }
    }
}
document.addEventListener("DOMContentLoaded", iniciarApp)