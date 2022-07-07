const Router = require('express').Router
const usersRouter = require('./user_controller').router
const homeRouter = require('./home_controller').router
const clientsRouter = require('./clients_controller').router
const tablesRouter = require('./tables_controller').router
const remoteRouter = require('./remote_controller').router

const router = Router()
router.use('/users', usersRouter)
router.use('/home', homeRouter)
router.use('/clients', clientsRouter)
router.use('/tables', tablesRouter)
router.use('/remote', remoteRouter)

exports.router = router
