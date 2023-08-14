const cliente = {

    nombre: 'Gustavo',
    balance: 500,
    tipo: 'Premium'
}

describe('testing al cliente', () => {
    test('Es gustavo', () => {
        expect(cliente).toMatchSnapshot()
    })
})
