// Implicit Binding

const cliente = {
    nombre: 'Gus',
    edad: 20,
    mostrarCliente() {
        console.log(`Nombre del Cliente ${this.nombre}, Edad: ${this.edad}`)
    },
    mascota: {
        nombre: 'Canelo',
        edad: 3,
        mostrarMascota() {
            console.log(`Nombre de la mascota ${this.nombre}, Edad: ${this.edad}`)
        },
    }


}

cliente.mostrarCliente()

cliente.mascota.mostrarMascota()