import Citas from '../js/classes/Citas'


describe('Probar la clase de citas', () => {

    const citas = new Citas()
    const id = Date.now()
    test('agregar una nueva cita', () => {
        const citaObj = {
            mascota: 'Canelo',
            propietario: 'Gus',
            telefono: '12345',
            fecha: '10-12-2023',
            hora: '10:30',
            sintomas: 'solo duerme'
        }

        citaObj.id = id
        citas.agregarCita(citaObj)

        //prueba
        expect(citas).toMatchSnapshot()



    })
    test('actualizar cita', () => {
        const citaActualizada = {
            id,
            mascota: 'Candela',
            propietario: 'Gus',
            telefono: '12345',
            fecha: '10-12-2023',
            hora: '10:30',
            sintomas: 'solo duerme'
        }
        citas.editarCita(citaActualizada)

        expect(citas).toMatchSnapshot()
    })

    test('Elimiar cita', () => {
        citas.eliminarCita(id)
        expect(citas).toMatchSnapshot()
    })
})