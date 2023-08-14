import express from 'express'
import router from './routes/index.js';
import db from './config/db.js';



// conectar a la base de datos
db.authenticate()
    .then(() => console.log('base de datos conectada'))
    .catch(error => console.log(error))

//Definir puerto
const port = process.env.PORT || 4000


//Habilitar pug
app.set('view engine', 'pug')

// Obtener el año actual
app.use((req, res, next) => {
    const year = new Date()
    res.locals.actualYear = year.getFullYear()
    res.locals.nombresitio = "Agencia de Viajes"

    next()
})


// Agregar body parser para leer los datos del formulario

app.use(express.urlencoded({ extended: true }));


//Definir la carpeta publica
app.use(express.static('public'))


//Agregar router

app.use('/', router)

app.listen(port, () => {
    console.log(`Server is running in the port ${port}`);
})