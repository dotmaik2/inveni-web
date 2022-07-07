const Router = require('express').Router
const passport = require('../../config/passport_config')
const verifyRole = require('../../helpers/app_roles').verifyRole
const router = Router()

router.get('/inicio', isLoggedIn, (req, res) => {
  res.render('pages/inicio.ejs')
})

router.get('/notificaciones', isLoggedIn, (req, res) => {
  res.render('pages/notificaciones.ejs')
})

router.get('/usuario', isLoggedIn, (req, res) => {
  res.render('pages/usuario.ejs')
})

// Envia el formulario para crear un usuario
router.post('/signup', passport.signUpAuthenticator)

router.get('/clientes', (req, res) => {
  res.render('pages/clientes.ejs')
})

router.get('/cliente-perfil', (req, res) => {
  res.render('pages/cliente-perfil.ejs', { idCliente: req.query.idCliente })
})

router.get('/database-details', (req, res) => {
  res.render('pages/db-details.ejs', {
    tableName: req.query.tableName
  })
})

router.get('/usuarios', verifyRole(['SUPER USER']), (req, res) => {
  res.render('pages/usuarios.ejs')
})

router.get('/bases-de-datos', (req, res) => {
  res.render('pages/db-admin.ejs')
})

router.get('/database-detail', (req, res) => {
  res.render('pages/db-detail.ejs', {
    tableName: req.query.tableName
  })
})

// route middleware to make sure
function isLoggedIn (req, res, next) {
  //  console.log("verify is the user is authenticated")
  // if user is authenticated in the session, carry on
  if (req.isAuthenticated()) {
    return next()
  }
  // if they aren't redirect them to the home page
  res.redirect('/')
}

exports.router = router
