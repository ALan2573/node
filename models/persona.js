const moongoose = require('mongoose')
const   Schema = moongoose.Schema


const personaSchema = new Schema({
  
  nombre: {type: String, required: true}, 
  apellidos: {type: String, required: true},
  edad:{type: Number, required: true},
 

})


const Persona = moongoose.model('Persona', personaSchema)

module.exports = Persona

