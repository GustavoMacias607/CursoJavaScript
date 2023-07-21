const suma = (a, b) => a + b


const resta = (a, b) => a - b



describe("testing funciones", () => {
    test('comprobar que 10 + 20 sean 30', () => {
        expect(suma(10, 20)).toBe(30)
    })

    test('cormprobar que 20-10 sean 10', () => {
        expect(resta(20, 10)).toBe(10);
    })
})