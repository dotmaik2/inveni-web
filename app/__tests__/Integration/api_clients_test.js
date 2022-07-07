/* eslint-disable no-undef */
const clientesService = require('../../service/clients_service')

test('consultar la lista de clientes', async () => {
  const clientes = await clientesService.getClientes()
  console.log(clientes)
  expect(clientes).toBeDefined()
})
