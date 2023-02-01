"use strict";
exports.__esModule = true;
var electron_1 = require("electron");
var remoteMain = require("@electron/remote/main");
var isDev = require("electron-is-dev");
var path = require("path");
var mainWindow;
remoteMain.initialize();
var createWindow = function () {
    mainWindow = new electron_1.BrowserWindow({
        width: 1680,
        height: 840,
        center: true,
        kiosk: !isDev,
        resizable: true,
        fullscreen: false,
        fullscreenable: true,
        webPreferences: {
            plugins: true,
            nodeIntegration: true,
            contextIsolation: false,
            backgroundThrottling: false,
            webSecurity: false
        }
    });
    mainWindow.loadURL(isDev ? 'http://localhost:3000' : "file://".concat(path.join(__dirname, '../build/index.html')));
    if (isDev) {
        mainWindow.webContents.openDevTools({ mode: 'detach' });
    }
    mainWindow.setResizable(true);
    // Emitted when the window is closed.
    mainWindow.on('closed', function () { return (mainWindow = undefined); });
    mainWindow.focus();
};
electron_1.app.on('ready', createWindow);
electron_1.app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') {
        electron_1.app.quit();
    }
});
electron_1.app.on('activate', function () {
    if (mainWindow === null) {
        createWindow();
    }
});
