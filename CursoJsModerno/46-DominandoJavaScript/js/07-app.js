// Event Loop o Loop de eventos en JS
// como se ejecuta el codigo y en que orden sobre prioridad

console.log('Primero')

setTimeout(() => {
    console.log('Segundo')
}, 0);


console.log('Tercero')

setTimeout(() => {
    console.log('Cuarto')
}, 0);


new Promise(resolve => {
    resolve('Desconocido....')
}).then(console.log)

console.log('Ultimo')

function hola() {
    console.log('hola')
}

hola()