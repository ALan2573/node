const Persona = require('../models/persona')



async function verPersonas(req, res) {

  const personas = await Persona.find()
  let personasHtml = ""
  for(let i = 0; i < personas.length; i++){
    personasHtml += `<li>${personas[i].nombre} ${personas[i].apellidos} ${personas[i].edad}</li>`
  }

  res.send(personasHtml)
  
}

async function crearPersona(req, res) { 
  const { nombre, apellidos, edad, } = req.body
  const persona = new Persona({ nombre, apellidos, edad,})
  await persona.save()
  res.json(persona)
}

module.exports = {
  verPersonas,
  crearPersona,

}
 

