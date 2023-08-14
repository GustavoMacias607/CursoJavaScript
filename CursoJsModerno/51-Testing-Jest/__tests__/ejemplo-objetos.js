const cliente = {
    nombre: 'Gus',
    balance: 500
}

describe("Testing al cliente", () => {
    test('Comprobar el saldo del cliente', () => {
        expect(cliente.balance).toBe(500)
    })

    test('Comprobar el nombre del cliente', () => {
        expect(cliente.nombre).toBe('Gus')
    })
})