const electron = require('electron')
const { ipcRenderer } = require('electron')
const settings = require('electron-settings').remote;

let inveni_url
ipcRenderer.on('ask-url', (event, arg) => { inveni_url = arg.url })
ipcRenderer.send('ask-url')

const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3500
});

const getLogin = async(_usuario, _password) => { 
  //return await fetch('http://localhost:3000/api/remote/autenticacion',{
  return await fetch('http://157.245.245.81:3000/api/remote/autenticacion',{
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify({usuario: _usuario, password: _password}) // body data type must match "Content-Type" header
  })
}

const initUI = async () => {
  $("#btn_iniciar_sesion").on('click', function(event){
    event.preventDefault()

    let usuario = $("#input_usuario").val()
    let password = $("#input_password").val()
    let recordarme = $("#input_recordarme").is(":checked")

    getLogin(usuario, password)
        .then(res => res.json())
        .then( async response => {
            console.log(response)
            if (response.couldLogIn){
              ipcRenderer.send('save-setting', { 'property': 'usuario', 'value': usuario })
              ipcRenderer.send('save-setting', { 'property': 'password', 'value': password })
              ipcRenderer.send('show-dashboard')
              window.close();
            } else {
              $("#login_status").text(response.message)
            }
        })
        .catch(err => {
          if (err == "TypeError: Failed to fetch") {
            Toast.fire({
              icon: 'error',
              title: 'El servidor no esta disponible'
            });
          } else {
            Toast.fire({
              icon: 'error',
              title: err
            });
          }
        })
  })
}

initUI()
