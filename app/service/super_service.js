const superModel = require('../model/super_model')

/*
* Usuarios
*/

exports.getUsuariosById = (id) => {
  return superModel.getUsuariosById(id).catch((err) => console.log(err))
}
