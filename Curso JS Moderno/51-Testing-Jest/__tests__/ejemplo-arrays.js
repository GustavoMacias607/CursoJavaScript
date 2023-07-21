const carrito = ['Producto1', 'Producto2', 'Producto3']



describe('Testing al carrito de compras', () => {

    test('verifica que el carrito tenga 3 elementos', () => {
        expect(carrito).toHaveLength(3)
    })

    test('Verifica que el carrito no este vacio', () => {
        expect(carrito).not.toHaveLength(0)
    })


})