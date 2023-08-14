(function () {
    let DB;
    let idCliente;
    const nombreInput = document.querySelector("#nombre")
    const telefonoInput = document.querySelector("#telefono")
    const emailInput = document.querySelector("#email")
    const empresaInput = document.querySelector("#empresa")
    const formularioInput = document.querySelector("#formulario")
    document.addEventListener("DOMContentLoaded", () => {
        conectarDB()

        //actualiza el registro
        formularioInput.addEventListener("submit", actualizaCliente)


        //verificar el id de la url
        const parametrosURL = new URLSearchParams(window.location.search);
        idCliente = parametrosURL.get("id")

        if (idCliente) {
            setTimeout(() => {
                obtenerCliente(idCliente);
            }, 1000)

        }
    })

    function actualizaCliente(e) {
        e.preventDefault();

        if (nombreInput.value === "" || emailInput.value === "" || empresaInput.value === "" || telefonoInput.value === "") {
            imprimirAlerta("Tienes que llenar todos los campos", "error")
            return;
        }
        //actualizar cliente
        const clientActualiado = {
            nombre: nombreInput.value,
            email: emailInput.value,
            empresa: empresaInput.value,
            telefono: telefonoInput.value,
            id: Number(idCliente)

        }

        const transaction = DB.transaction(["crm"], "readwrite");
        const objectStore = transaction.objectStore("crm")
        objectStore.put(clientActualiado)

        transaction.oncomplete = function () {
            imprimirAlerta("editado correctamente", "")
            setTimeout(() => {
                window.location.href = "Index.html"
            }, 3000)

        }
        transaction.onerror = function () {

            imprimirAlerta("hubo un error", "error")
        }
    }


    function obtenerCliente(id) {
        const transaction = DB.transaction(["crm"], "readwrite")
        const objectStore = transaction.objectStore("crm")

        const cliente = objectStore.openCursor();
        cliente.onsuccess = function (e) {
            const cursor = e.target.result;
            if (cursor) {
                if (cursor.value.id === Number(id)) {
                    llenarFormulario(cursor.value);
                }

                cursor.continue()
            }
        }
    }

    function llenarFormulario(datosCliente) {
        const { nombre, empresa, telefono, email } = datosCliente;
        nombreInput.value = nombre
        empresaInput.value = empresa
        telefonoInput.value = telefono
        emailInput.value = email
    }

    function conectarDB() {
        const abrirConexion = window.indexedDB.open("crm", 1)
        abrirConexion.onerror = function () {
            console.log("hubo un error")
        }

        abrirConexion.onsuccess = function () {
            DB = abrirConexion.result;
        }
    }
})()