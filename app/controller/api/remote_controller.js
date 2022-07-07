const Router = require('express').Router
const clientsService = require('../../service/clients_service')
const tablesService = require('../../service/tables_service')

const ROUTER = Router()

ROUTER.post('/autenticacion', (req, res) => {
  clientsService
    .clientAuthentication(req.body.usuario, req.body.password)
    .then((result) => {
      res.status(200)
      res.contentType('application/json')
      res.send(JSON.stringify({ message: result.message, couldLogIn: result.couldLogIn }))
    })
    .catch(function (err) {
      console.log('[Api/remote_controller][/autenticacion] Error: ', err)
      res.status(400)
      res.contentType('application/json')
      res.send(JSON.stringify({ message: err }))
    })
})

ROUTER.post('/getUserAllowedTables/', (req, res) => {
  tablesService.getUserAllowedTables(req.body.usuario)
    .then((result) => {
      res.status(200)
      res.contentType('application/json')
      res.send(JSON.stringify({ message: result.message, payload: result.rows }))
    })
    .catch((err) => {
      console.error('[remote_controller.js][/getUserAllowedTables]Error when pulling Table list: ', err)

      res.status(500)
      res.contentType('application/json')
      res.send(JSON.stringify({ message: err }))
    })
})

ROUTER.get('/getOneFromRemote/:nombreTabla', (req, res) => {
  const nombreTabla = req.params.nombreTabla
  tablesService.getOneFromRemote(nombreTabla)
    .then((rows) => {
      res.status(200)
      res.contentType('application/json')
      res.send(JSON.stringify({ message: 'Table found.', payload: rows }))
    })
    .catch((err) => {
      console.error('[tables_controller.js][/getOneFromRemote/' + nombreTabla + ']Error when pulling Table list: ', err)

      res.status(500)
      res.contentType('application/json')
      res.send(JSON.stringify({ message: 'Unable to lookup tables. Try again later, please.' }))
    })
})

ROUTER.post('/getUserAllowedTableServerSideQuery/', (req, res) => {
  const json = req.body
  console.log(json)
  tablesService.getUserAllowedTableServerSideQuery(json)
    .then((result) => {
      if (result.message) {
        console.error('[remote_controller.js][/getUserAllowedTableServerSideQuery/]Error when pulling server side query: ', result.message)
        res.status(401)
        res.contentType('application/json')
        res.send(JSON.stringify({ message: result.message }))
      }
      res.status(200)
      res.contentType('application/json')
      res.send(JSON.stringify(result))
    })
    .catch((err) => {
      console.error('[remote_controller.js][/getUserAllowedTableServerSideQuery/]Error when pulling server side query: ', err)
      res.status(500)
      res.contentType('application/json')
      res.send(JSON.stringify({ message: 'Unable to lookup tables. Try again later, please.' }))
    })
})

ROUTER.post('/persmisosDeImpresion/', (req, res) => {
  const { usuario, tabla } = req.body
  tablesService.persmisosDeImpresion(usuario, tabla)
    .then((result) => {
      res.status(200)
      res.contentType('application/json')
      res.send(JSON.stringify(result))
    })
    .catch((err) => {
      console.error('[tables_controller.js][/persmisosDeImpresion/]Error when pulling server side query: ', err)
      res.status(500)
      res.contentType('application/json')
      res.send(JSON.stringify({ message: 'Unable to lookup tables. Try again later, please.' }))
    })
})

/* ROUTER.post('/getUserAllowedTableGeneralServerSideQuery/', (req, res) => {
  const json = req.body
  tablesService.getUserAllowedTableGeneralServerSideQuery(json)
    .then((result) => {
      if (result.message) {
        console.error('[remote_controller.js][/getUserAllowedTableGeneralServerSideQuery/]Error when pulling server side query: ', result.message)
        res.status(401)
        res.contentType('application/json')
        res.send(JSON.stringify({ message: result.message }))
      }
      res.status(200)
      res.contentType('application/json')
      res.send(JSON.stringify(result))
    })
    .catch((err) => {
      console.error('[remote_controller.js][/getUserAllowedTableGeneralServerSideQuery/]Error when pulling server side query: ', err)
      res.status(500)
      res.contentType('application/json')
      res.send(JSON.stringify({ message: 'Unable to lookup tables. Try again later, please.' }))
    })
}) */

exports.router = ROUTER
