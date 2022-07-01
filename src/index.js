const { app, BrowserWindow, dialog } = require('electron')
const path = require('path')
const { ipcMain } = require('electron')
var macaddress = require('macaddress')
const ejse = require('ejs-electron')
const settings = require('electron-settings')
const XLSX = require('xlsx')

// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require('electron-squirrel-startup')) {
  // eslint-disable-line global-require
  app.quit()
}

const createLoginWindow = () => {
  const loginWindow = new BrowserWindow({
    width: 666,
    height: 600,
    resizable: false,
    title: "Inveni",
    show: false,
    autoHideMenuBar: true,
    icon: __dirname + './assets/dist/img/favicon/favicon.ico',
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      enableRemoteModule: true,
    }
  })

  loginWindow.loadFile(path.join(__dirname, 'login/login.ejs'))
  // loginWindow.webContents.openDevTools()

  const splash = new BrowserWindow({
    width: 500,
    height: 256,
    transparent: true,
    frame: false,
    alwaysOnTop: true,
    icon: __dirname + './assets/dist/img/favicon/favicon.ico'
  })

  splash.loadFile(path.join(__dirname, 'spash/spash.ejs'))
  splash.center()

  setTimeout(function () {
    splash.close()
    loginWindow.center()
    loginWindow.show();
  }, 8000);

};

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createLoginWindow);

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) {
    createLoginWindow();
  }
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and import them here.


const createDashboardWindow = () => {
  const dashboardWindow = new BrowserWindow({
    width: 800,
    height: 600,
    title: "Inveni",
    autoHideMenuBar: true,
    icon: __dirname + './assets/dist/img/favicon/favicon.ico',
    webPreferences: {
      worldSafeExecuteJavaScript: true,
      nodeIntegration: true,
      contextIsolation: false,
      enableRemoteModule: true,
    }
  });

  dashboardWindow.loadFile(path.join(__dirname, 'dashboard/dashboard.ejs'));
  // dashboardWindow.webContents.openDevTools();
  dashboardWindow.maximize();
}

ipcMain.on('show-dashboard', async (event, arg) => {
  createDashboardWindow()
  event.reply('show-dashboard')
})

ipcMain.on('show-login', async (event, arg) => {
  createLoginWindow()
  event.reply('show-login')
})

ipcMain.on('save-setting', async (event, arg) => {
  try {
    ejse.data(arg.property, arg.value)
  } catch (err) {
    console.log(err)
  }
})

ipcMain.on('retrieve-settings', async (event, arg) => {
  let response = await settings.get()
  event.reply('retrieve-settings', response)
})

ipcMain.on('saveExcelFile', async (event, arg) => {
  let wb = arg
  console.log(wb)
  const options = {
    title: 'inveniExcelFile.xlsx',
    defaultPath: app.getPath('documents') + '/inveniExcelFile.xlsx',
  }
  var o = dialog.showSaveDialogSync(null, options);
  await XLSX.writeFile(wb, o);
  // event.reply('retrieve-settings', response)
})

const obtainAndSetMacAddress = async () => {
  let mac_address = await macaddress.one()
  let network_interfases = await macaddress.networkInterfaces()

  ejse.data('macAddress', mac_address)
  ejse.data('networkInterfases', network_interfases)
}

obtainAndSetMacAddress()



ejse.data('username', 'Some Guy')
