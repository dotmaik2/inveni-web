const passport = require('passport')
const Strategy = require('passport-local').Strategy
const userService = require('../service/user_service')
const LOCAL_STRATEGY_PROPERTIES = {
  passwordField: 'password',
  usernameField: 'username',
  passReqToCallback: true
}

const LOCAL_SIGNUP_STRATEGY = new Strategy(LOCAL_STRATEGY_PROPERTIES, userService.passportUserSignUp)
const LOCAL_LOGIN_STRATEGY = new Strategy(LOCAL_STRATEGY_PROPERTIES, userService.passportUserLogin)
const STRATEGY_NAMES = {
  login: 'local-login',
  signup: 'local-signup',
  signupDowntimes: 'local-signup'
}

const AUTHENTICATE_PROCESS = {
  successRedirect: '/web/home/inicio',
  failureRedirect: '/web/login',
  failureFlash: true
}

function isLoggedIn (req, res, next) {
  if (req !== undefined && req !== null && req.isAuthenticated()) {
    if (req.user.role === 'GUEST') {
      console.log('opale eres un invitado prro')
      res.render('pages/errorPage')
    }
    next()
  } else {
    res.redirect('/web/login')
  }
}

passport.serializeUser((user, done) => {
  done(null, user)
})

passport.deserializeUser((user, done) => {
  userService
    .findUserById(user.id)
    .then((rows) => done(null, rows[0]))
    .catch((err) => done(err))
})

passport.use(STRATEGY_NAMES.signup, LOCAL_SIGNUP_STRATEGY)
passport.use(STRATEGY_NAMES.login, LOCAL_LOGIN_STRATEGY)
exports.passport = passport
exports.isLoggedIn = isLoggedIn
exports.loginAuthenticator = passport.authenticate(STRATEGY_NAMES.login, AUTHENTICATE_PROCESS)
exports.signUpAuthenticator = passport.authenticate(STRATEGY_NAMES.signup, AUTHENTICATE_PROCESS)
