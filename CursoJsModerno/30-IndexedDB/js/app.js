
let DB;
document.addEventListener('DOMContentLoaded', () => {
    crmDB();


    setTimeout(() => {
        crearCliente()
    }, 5000)
})


function crmDB() {
    //Crear base de datos version 1.0
    let crmDB = window.indexedDB.open("crm", 1);

    // si hay un error
    crmDB.onerror = function () {
        console.log("hubo un error en la creacion de la base dedatos")
    }

    //si se creo bien
    crmDB.onsuccess = function () {
        console.log("base de datos creada")

        DB = crmDB.result
    }

    // configuracion de la base de datos
    crmDB.onupgradeneeded = function (e) {
        const db = e.target.result;

        const objectStore = db.createObjectStore("crm", {
            keyPath: "crm",
            autoIncrement: true
        });

        //Definir las columnas

        objectStore.createIndex("nombre", "nombre", { unique: false });
        objectStore.createIndex("email", "email", { unique: true });
        objectStore.createIndex("telefono", "telefono", { unique: false });
        console.log("columnas creadas")
    }

}


function crearCliente() {
    let transaction = DB.transaction(["crm"], "readwrite")

    transaction.oncomplete = function () {
        console.log("transaccion completada")
    }
    transaction.onerror = function () {
        console.log("hubo un error en la transaccion")
    }

    const objectStore = transaction.objectStore("crm")

    const nuevoCliente = {
        nombre: "Gustavo",
        email: "gus.com",
        telefono: "12312312"

    }
    const peticion = objectStore.add(nuevoCliente)
    console.log(peticion)
}
