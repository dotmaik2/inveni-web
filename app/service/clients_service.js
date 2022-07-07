const clientesModel = require('../model/clients_model')

exports.getClientes = async () => {
  return await clientesModel.getClientes().catch((err) => console.log(err))
}

exports.addCliente = async (nombre, usuario, password) => {
  return await clientesModel.addCliente(nombre, usuario, password).catch((err) => console.log(err))
}

exports.deleteCliente = async (id) => {
  return await clientesModel.deleteCliente(id).catch((err) => console.log(err))
}

exports.updateCliente = async (id, nombre, usuario, password, activo) => {
  return await clientesModel.updateCliente(id, nombre, usuario, password, activo).catch((err) => console.log(err))
}

exports.getClientesById = async (id) => {
  return await clientesModel.getClientesById(id).catch((err) => console.log(err))
}

exports.clientAuthentication = async (usuario, password) => {
  const rows = await clientesModel.clientAuthentication(usuario, password)

  if (rows.length !== undefined && rows.length !== null && typeof rows.length === 'number' && rows.length > 0) {
    if (rows[0].activo === 1) {
      return {
        message: 'Login exitoso.',
        couldLogIn: true
      }
    } else {
      return {
        message: 'El usuario no está activo.',
        couldLogIn: false
      }
    }
  } else {
    return {
      message: 'Usuario o password incorrecto intente nuevamente.',
      couldLogIn: false
    }
  }
}

exports.updateDetalles = async (id, direccion, telefono, email, fechaLimite, notas) => {
  return await clientesModel.updateDetalles(id, direccion, telefono, email, fechaLimite, notas)
}
