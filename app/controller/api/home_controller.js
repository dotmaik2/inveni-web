const Router = require('express').Router
const homeService = require('../../service/home_service')

const ROUTER = Router()

ROUTER.get('/', (_req, res) => {
  homeService
    .endPointExample()
    .then(() => {
      res.status(200)
      res.contentType('application/json')
      res.send(
        JSON.stringify({
          message: ''
        })
      )
    })
    .catch(function (err) {
      console.log('[Api/home_controller.js][/] Error: ', err)
      res.status(404)
      res.contentType('application/json')
      res.send(JSON.stringify({ message: err }))
    })
})

exports.router = ROUTER
