//  Map

const cliente = new Map()

cliente.set("nombre", "Karen")
cliente.set("tipo", "premium")
cliente.set("saldo", 3000)

console.log(cliente)

console.log(cliente.size)

console.log(cliente.has("nombre"))

console.log(cliente.get("nombre"))

cliente.delete("saldo")

cliente.clear()


const paciente = new Map([["nombre", "paciente"], ["cuarto", "no definido"]])

paciente.set("dr", "Dr Asignado")
paciente.set("nombre", "Antonio")
console.log(paciente)

paciente.forEach((datos, index) => {
    console.log(index)
})