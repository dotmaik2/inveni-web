const connectionPool = require('../config/database_config').connectionPool

exports.getDashboard = (clientesId) => {
  const statement = 'select * from `clientes` where `id` = ?'

  return connectionPool.query(statement, [clientesId])
}

exports.actualizarCliente = (name, value, pk) => {
  const statement = 'update `clientes` set `' + name + '` = ? where `id` = ?'

  return connectionPool.query(statement, [value, pk])
}

exports.getUsuarios = (clientesId) => {
  const statement = 'select * from `usuarios` where `clientes_id` = ?'

  return connectionPool.query(statement, [clientesId])
}
