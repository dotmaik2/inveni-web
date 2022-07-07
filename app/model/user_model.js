/* eslint-disable camelcase */
const connectionPool = require('../config/database_config').connectionPool

exports.findUserById = (userId) => {
  const statement = 'select * from usuarios where id= ?'

  return connectionPool.query(statement, [userId])
}

exports.findUserByUserName = (username) => {
  const statement = 'select * from usuarios where username = "' + username + '"'

  console.log(statement)
  return connectionPool.query(statement)
}

exports.createUser = (username, password, role, email) => {
  const statement = 'insert into `usuarios`(`username`, `password`, `role`, `email`) values (?, ?, ?, ?)'
  return connectionPool.query(statement, [username, password, role, email])
}

exports.createUserByClientesId = (nombre_completo, direccion, referencia, username, cryptedPassword, role, phone, email, clientes_id) => {
  const statement = 'insert into `usuarios`(`nombre_completo`, `direccion`, `referencia`, `username`, `password`, `role`, `phone`, `email`, `active`, `clientes_id`) values (?, ?, ?, ?, ?, ?, ?, ?, 1, ?)'
  return connectionPool.query(statement, [nombre_completo, direccion, referencia, username, cryptedPassword, role, phone, email, clientes_id])
}

exports.findUsers = (size, page) => {
  const defSize = size !== null &&
      size !== undefined &&
      typeof size === 'number'
    ? size
    : 10

  const defPage = page !== null &&
      page !== undefined &&
      typeof page === 'number'
    ? page
    : 1

  const offset = (defPage - 1) * defSize

  const statement = 'select * from `usuarios` `u` limit ?, ?'

  return connectionPool.query(statement, [offset, defSize])
}

exports.updateUser = (userId, username, role, email) => {
  const statement = 'update `usuarios` set `username` = ?, `role` = ?, `email` = ? where `id` = ?'

  return connectionPool.query(statement, [username, role, email, userId])
}

exports.deleteUser = (userId) => {
  const statement = 'delete from `usuarios` where `id` = ?'

  return connectionPool.query(statement, [userId])
}

exports.getID = () => {
  const statement = 'select id from `usuarios` order by `id` desc limit 1'

  return connectionPool.query(statement)
}

exports.getAllUsers = () => {
  const query = 'select * from `usuarios` where username <> "guest"'
  return connectionPool.query(query)
}
