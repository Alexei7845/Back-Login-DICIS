const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
require('dotenv').config()

const app = express()

//como capturar el body 
app.use(bodyParser.urlencoded({
    extended: false
}))
app.use(bodyParser.json())

//conexion a la base de datos
const url = `mongodb+srv://${process.env.USUARIO}:${process.env.PASSWORD}@cluster0.6ocwwfl.mongodb.net/${process.env.DBNAME}?retryWrites=true&w=majority`

mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology:true
}).then(() => console.log('Conectado a BD'))
.catch((error) => console.log('Error: ' + error))

//crear e importacion de rutas 
const authRoutes = require('./routes/auth')

//ruta del middleware
app.use('/api/user', authRoutes)

app.get('/', (req, res) => {
    res.json({
        estado: true,
        mensaje: 'Funciona bien'
    })
})

//iniciamos el servidor 
const PORT = process.env.PORT || 10000
app.listen(PORT, () => {
    console.log(`Servidor en Puerto: ${PORT}`)
})

