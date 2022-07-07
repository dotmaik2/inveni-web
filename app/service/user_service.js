const userModel = require('../model/user_model')
const bcrypt = require('bcrypt-nodejs')

function passportUserSignUpThenHandler (passportDone, createdUser) {
  return (rows) => {
    createdUser.id = rows.insertId
    passportDone(null, createdUser)
  }
}

exports.loginForm = (req, res) => {
  const flashMessage = req.flash('loginMessage') || ''
  const templateObject = {
    message: flashMessage
  }

  res.render('pages/login.ejs', templateObject)
}

exports.findUserById = async (userId) => {
  const data = await userModel.findUserById(userId)
  return data
}

exports.passportUserSignUp = (passportRequest, username, password, passportDone) => {
  userModel
    .findUserByUserName(username)
    .then((rows) => {
      if (rows.length !== undefined &&
              rows.length !== null &&
              typeof rows.length === 'number' &&
              rows.length > 0) {
        passportDone(null, false, passportRequest.flash('message', 'That username is already taken.'))
      } else {
        const cryptedPassword = bcrypt.hashSync(password, null)
        const userToCreate = {
          username: username,
          password: cryptedPassword
        }

        userModel
          .createUser(username, cryptedPassword, passportRequest.body.role, passportRequest.body.email)
          .then(passportUserSignUpThenHandler(passportDone, userToCreate))
          .catch((err) => passportDone(err))
      }
    })
}

exports.createUsers = async (username, password, role, email) => {
  const rows = await userModel.findUserByUserName(username)
  if (rows.length !== undefined && rows.length !== null && typeof rows.length === 'number' && rows.length > 0) {
    return { message: 'That username is already taken.' }
  } else {
    const cryptedPassword = bcrypt.hashSync(password, null)
    return await userModel.createUser(username, cryptedPassword, role, email)
  }
}

exports.passportUserLogin = (passportRequest, username, password, passportDone) => {
  userModel
    .findUserByUserName(username)
    .then((rows) => {
      if (rows.length === undefined ||
                rows.length === null ||
                typeof rows.length !== 'number' ||
                rows.length < 1) {
        passportDone(null, false, passportRequest.flash('message', 'Invalid user and/or password.'))
      } else if (!bcrypt.compareSync(password, rows[0].password)) {
        passportDone(null, false, passportRequest.flash('message', 'Invalid user and/or password.'))
      } else {
        passportDone(null, rows[0])
      }
    })
    .catch((err) => {
      console.error('[user_service.js][passportUserLogin] Error when login user:', err)
      passportDone(null, false, passportRequest.flash('message', 'Unable to connect to database. Please try again later.'))
    })
}

exports.updateUser = (userId, username, role, email) => {
  return userModel
    .updateUser(userId, username, role, email)
}

exports.deleteuser = (userId) => {
  return userModel
    .deleteUser(userId)
}

exports.getAllUsers = () => {
  return userModel
    .getAllUsers()
}
