const connectionPool = require('../config/database_config').connectionPool

exports.endPointExample = () => {
  const statement = 'select * from `usuarios`'

  return connectionPool.query(statement)
}
