const express = require('express')
const app = express()
const puerto = 3000
const routerPersonas = require('./routes/personas')
const moongoose = require('mongoose')
const bodyParser = require('body-parser')

app.use(bodyParser.json())

console.log('hola')


moongoose.connect('mongodb://127.0.0.1:27017/carpetanodejs', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

const db = moongoose.connection
db.on('error', (error) => console.log(error))
db.once('open', function () {
  console.log('Conectado a MongoDB')
})

app.use("/personas", routerPersonas)




app.listen(puerto, () => {
  console.log(`Servidor escuchando en el puerto ${puerto}`)
})


