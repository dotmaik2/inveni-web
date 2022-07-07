const Router = require('express').Router
const passportVerification = require('../../config/passport_config').isLoggedIn
const userRouter = require('./user_controller').router
const loginRouter = require('./login_controller').router
const homeRouter = require('./home_controller').router

const router = Router()

router.use('/login', loginRouter)
router.use('/users', passportVerification, userRouter)
router.use('/home', passportVerification, homeRouter)

exports.router = router
