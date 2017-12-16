const electron = require('electron');
const { app, BrowserWindow } = electron;
const path = require('path');
const url = require('url');

let win;

function createWindow() {

    // Creating the browser window
    win = new BrowserWindow({
        width: 600,
        height: 600,
        backgroundColor: '#fff'
    });

    win.loadURL(url.format({
        pathname: path.join(__dirname, 'dist/index.html'),
        protocol: 'file:',
        slashes: true
    }));

    // opening the developer tools
    // win.webContents.openDevTools();

    // event when the window is closed
    win.on('closed', () => {
        win = null;
    });

}

// create window on electron initialization
app.on('ready', createWindow);

// Quit when all windows are closed
app.on('window-all-closed', () => {
    if(process.platform !== 'darwin') {
        app.quit()
    }
});

app.on('activate', () => {
    // mac os specific close process
    if(win === null) {
        createWindow();
    }
});
