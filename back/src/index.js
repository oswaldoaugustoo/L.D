import express from 'express'
import {
  activityCheckin,
  activityCheckout,
  listActivities,
  removeActivity
} from './controllers/activitiesController.js'
import {
  cadastroFuncionario,
  listFuncionarios,
  removeFuncionario,
  updateFuncionario
} from './controllers/vehiclesController.js'

import {
  cadastroUsuario,
  listUsuarios
} from './controllers/usuarioController.js'
const app = express()

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*') // dentro do '*' poderia ser qual site poderia fazer a requisiçao.

  res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE')

  res.header(
    'Access-Control-Allow-Headers',
    'X-PINGOTHER, Content-Type, Authorization'
  )

  next()
})

app.use(express.json())

app.get('/api/ping', (request, response) => {
  response.send({
    message: 'pong'
  })
})

/* Endpoints Vehicles */
app.get('/api/funcionarios', listFuncionarios)
app.post('/api/funcionarios', cadastroFuncionario)
app.put('/api/funcionarios/:id', updateFuncionario)
app.delete('/api/funcionarios/:id', removeFuncionario)

/* Endpoints  Activities */
app.post('/api/login/logado', activityCheckin)
app.put('/api/activities/checkout', activityCheckout)
app.delete('/api/activities/:id', removeActivity)
app.get('/api/login', listActivities)

/* Endpoints Login */
app.post('/api/usuarios', cadastroUsuario)
app.get('/api/usuarios', listUsuarios)

app.listen(8000, () => {
  console.log('Servidor rodando na porta 8000...')
})
