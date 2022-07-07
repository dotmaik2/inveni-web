const Router = require('express').Router
const clientesService = require('../../service/clients_service')

const ROUTER = Router()

ROUTER.get('/getAll', (_req, res) => {
  clientesService
    .getClientes()
    .then((rows) => {
      res.status(200)
      res.contentType('application/json')
      res.send(JSON.stringify({ message: 'Clients found', payload: rows }))
    })
    .catch(function (err) {
      console.log('[Api/clientes_controller][/getClientes] Error: ', err)
      res.status(400)
      res.contentType('application/json')
      res.send(JSON.stringify({ message: err }))
    })
})

ROUTER.post('/create/', (req, res) => {
  clientesService
    .addCliente(req.body.nombre, req.body.usuario, req.body.password)
    .then((result) => {
      res.status(201)
      res.contentType('application/json')
      res.send(JSON.stringify({ message: 'Client created.' }))
    })
    .catch((err) => {
      console.error('[Api/clientes_controller][/addCliente/' + req.body.nombre + '] Error al actualizar: ', err)
      res.status(400)
      res.contentType('application/json')
      res.send('Unable to retrieve data from database.')
    })
})

ROUTER.delete('/delete/:idCliente', (req, res) => {
  clientesService
    .deleteCliente(req.params.idCliente)
    .then(() => {
      res.sendStatus(200)
    })
    .catch((error) => {
      console.error('[Api/clientes_controller][/clientes/:idCliente] error: \n', error)
      res.status(400)
      res.send('Unable to retrieve data from database.')
    })
})

ROUTER.put('/update/', (req, res) => {
  clientesService
    .updateCliente(req.body.id, req.body.nombre, req.body.usuario, req.body.password, req.body.activo)
    .then(() => {
      res.sendStatus(200)
    })
    .catch((error) => {
      console.error('[Api/clientes_controller][/updateCliente] error: \n', error)
      res.status(400)
      res.send('Unable to retrieve data from database.')
    })
})

ROUTER.get('/getById/:idCliente', (req, res) => {
  clientesService
    .getClientesById(req.params.idCliente)
    .then((rows) => {
      res.status(200)
      res.contentType('application/json')
      res.send(JSON.stringify({ message: 'Client found', payload: rows }))
    })
    .catch(function (err) {
      console.log('[Api/clientes_controller][/getClientesById] Error: ', err)
      res.status(400)
      res.contentType('application/json')
      res.send(JSON.stringify({ message: err }))
    })
})

ROUTER.put('/detalles/', (req, res) => {
  clientesService
    .updateDetalles(req.body.id, req.body.direccion, req.body.telefono, req.body.email, req.body.fechaLimite, req.body.notas)
    .then(() => {
      res.status(200)
      res.contentType('application/json')
      res.send(JSON.stringify({ message: 'Se guardaron los cambios.' }))
    })
    .catch((err) => {
      console.error('[Api/clientes_controller][/detalles] error: \n', err)
      res.status(400)
      res.contentType('application/json')
      res.send(JSON.stringify({ message: err }))
    })
})

exports.router = ROUTER
