const SocketEvent = require('./socket_event').SocketEvent

const onMessage = (socket) => {
  return new SocketEvent('message', (message) => {
    socket.emit('message', 'alive')
    socket.emit('soto', 'Mensaje Recibido')
    console.log(`${message}`)
  })
}

exports.onConnection = new SocketEvent('connection', (socket) => {
  const socketEvents = [
    onMessage(socket)
  ]
  socketEvents.forEach((evt) => {
    socket.on(evt.name, evt.handler)
  })
})
