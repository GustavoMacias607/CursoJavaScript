import { suma } from "../js/funciones.js"

describe('suma de dos numeros'), () => {
    test("Sumar 2 + 3 debe dar 5", () => {
        expect(suma(2, 3)).toBe(5)
    })
}