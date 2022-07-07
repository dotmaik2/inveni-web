const Router = require('express').Router
const userService = require('../../service/user_service')

const ROUTER = Router()

ROUTER.post('/create/', (req, res) => {
  userService.createUsers(req.body.username, req.body.password, req.body.role, req.body.email)
    .then((result) => {
      if (result.message !== '') {
        res.status(400)
        res.contentType('application/json')
        res.send(JSON.stringify({ message: result.message }))
      } else {
        res.status(201)
        res.contentType('application/json')
        res.send(JSON.stringify({ message: 'User created.' }))
      }
    }).catch((err) => {
      console.error('[user_controller.js][/]Error when creating user: ', err)
      res.status(400)
      res.contentType('application/json')
      res.send(JSON.stringify({ message: 'User couldn\'t be created. Check username and password.' }))
    })
})

ROUTER.put('/update/', (req, res) => {
  userService.updateUser(req.body.id, req.body.username, req.body.role, req.body.email).then(() => {
    res.status(200)
    res.contentType('application/json')
    res.send(JSON.stringify({ message: 'User has been updated successfully.' }))
  }).catch((err) => {
    console.error('[user_controller.js][/' + req.params.id + ']Error when updating user: ', err)
    res.status(500)
    res.contentType('application/json')
    res.send(JSON.stringify({ message: 'User couldn\'t be updated. Please retry.' }))
  })
})

ROUTER.get('/:id', (req, res) => {
  const userId = req.params.id

  userService.findUserById(req.params.id)
    .then((rows) => {
      res.contentType('application/json')
      console.log(rows)
      console.log(res)
      if (rows.length === undefined ||
                rows.length === null ||
                rows.length === 0) {
        res.status(404)
        res.contentType('application/json')
        res.send(JSON.stringify({ message: 'User not found.' }))
      } else {
        res.status(200)
        res.contentType('application/json')
        res.send(JSON.stringify({ message: 'User found', payload: rows }))
      }
    })
    .catch((err) => {
      console.error('[user_controller.js][/' + userId + ']Error when pulling user: ', err)

      res.status(500)
      res.contentType('application/json')
      res.send(JSON.stringify({ message: 'Unable to lookup user. Try again later, please.' }))
    })
})

ROUTER.delete('/delete/:id', (req, res) => {
  const userId = req.params.id

  userService.deleteuser(userId)
    .then(() => {
      res.status(200)
      res.contentType('application/json')
      res.send(JSON.stringify({ message: 'User deleted.' }))
    })
    .catch((err) => {
      console.error('[user_controller.js][/' + userId + ']Error when deleting user: ', err)

      res.status(500)
      res.contentType('application/json')
      res.send(JSON.stringify({ message: 'Unable to delete user. Try again later, please.' }))
    })
})

ROUTER.post('/getAll/', (req, res) => {
  userService.getAllUsers()
    .then((rows) => {
      res.status(200)
      res.contentType('application/json')
      res.send(JSON.stringify({ message: 'Users found.', payload: rows }))
    })
    .catch((err) => {
      console.error('[user_controller.js][/all]Error when pulling users: ', err)

      res.status(500)
      res.contentType('application/json')
      res.send(JSON.stringify({ message: 'Unable to lookup users. Try again later, please.' }))
    })
})

exports.router = ROUTER
