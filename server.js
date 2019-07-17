const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const controller = require('./alergiasController')

const app = express()
app.use(cors())
app.use(bodyParser.json())

app.get('/alergias', async (request, response) => {
  controller.getAll()
    .then(alergias => response.send(alergias))
})

app.get('/alergias/:id', (request, response) => {
  const id = request.params.id
  controller.getById(id)
    .then(alergias => {
      if(!alergias){ // comida === null || comida === undefined
        response.sendStatus(404) // comida nao encontrada
      } else {
        response.send(alergias)
      }
    })
    .catch(error => {
      if(error.name === "CastError"){
        response.sendStatus(400) // bad request - tem algum parametro errado
      } else {
        response.sendStatus(500) // deu ruim, e nao sabemos oq foi
      }
    })
})

app.post('/alergias', (request, response) => {
  response.status(200).send(controller.add(request.body))
})

app.patch('/alergias/:id', (request, response) => {
  const id = request.params.id
  controller.update(id, request.body)
    .then(alergias => {
      if(!alergias) { response.sendStatus(404) } // nao encontrei a comida
      else { response.send(alergias) } // o status default 200
    })
    .catch(error => {
      if(error.name === "MongoError" || error.name === "CastError"){
        response.sendStatus(400) // bad request
      } else {
        response.sendStatus(500)
      }
    })
})

app.delete('/alergias/:id', async (request, response) => {
  controller.remove(request.params.id)
    .then(alergias => response.sendStatus(204))
})

app.listen(3000)
console.log("servidorzinho rodando na porta 3000")

