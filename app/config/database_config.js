const createPool = require('promise-mysql').createPool

const options = {
  host: 'localhost',
  user: 'root',
  password: 'FundableD0ubles',
  database: 'inveni',
  connectionLimit: 5000,
  insecureAuth: true
}

const mysqlPool = createPool(options)

module.exports = {
  connectionPool: mysqlPool,
  options: options
}
