const moment = require('moment-timezone')
// const configurationModel = require('../model/configuracion_model')

exports.getFechaActual = async () => {
  let today = new Date()
  let dd = today.getDate()
  let mm = today.getMonth() + 1
  const yyyy = today.getFullYear()
  if (dd < 10) { dd = '0' + dd }

  if (mm < 10) { mm = '0' + mm }

  today = yyyy + '-' + mm + '-' + dd

  /* const d = new Date()
  const h = d.getHours()
  const m = d.getMinutes()
  const s = d.getSeconds()
  const horaActual = h + ':' + m + ':' + s */

  // let config = await configurationModel.getConfiguracionGeneral().catch((err) => console.log(err))

  // Obtiene y guarda la fecha actual
  // return moment(today + " " + horaActual, 'YYYY-MM-DD HH:mm:ss').tz(config[0].timezone)
  return moment(today, 'YYYY-MM-DD').tz('America/Mexico_City')
}
