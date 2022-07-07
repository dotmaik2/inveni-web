
exports.verifyRole = (acceptedRoles) => {
  return function (req, res, next) {
    if (req.user.role === 'SUPER USER') {
      return next()
    }
    if (acceptedRoles.includes(req.user.role)) {
      return next()
    } else {
      // return res.send(403);
      return res.render('pages/signup.ejs', { message: '' })
    }
  }
}

exports.verifySignupRole = (acceptedRoles) => {
  return function (req, res, next) {
    if (req.hasOwnProperty('user')) {
      if (req.user.role === 'SUPER USER') {
        return next()
      }
    } else {
      // return res.send(403);
      return res.render('pages/signup.ejs', { message: '' })
    }
  }
}
