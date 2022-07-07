const io = require('socket.io').listen()
const HOME_EVENTS = require('../socket/home_events').onConnection

// Se inicializa el server con las configuraciones del server desde app_config.js
exports.init = (server) => {
  io.listen(server) // Iniciamos la escucha
  io.on(HOME_EVENTS.name, HOME_EVENTS.handler) // Se pasan todos los eventos registrados en home_events.js
}
