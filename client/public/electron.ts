import { app, BrowserWindow } from 'electron';
import * as remoteMain from "@electron/remote/main";
import * as isDev from 'electron-is-dev';
import * as path from 'path';

let mainWindow: BrowserWindow;
remoteMain.initialize();

const createWindow = () => {
    mainWindow = new BrowserWindow({
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
        },
    });

    mainWindow.loadURL(isDev ? 'http://localhost:3000' : `file://${path.join(__dirname, '../build/index.html')}`);

    if (isDev) {
        mainWindow.webContents.openDevTools({ mode: 'detach' });
    }

    mainWindow.setResizable(true);

    // Emitted when the window is closed.
    mainWindow.on('closed', () => (mainWindow = undefined!));
    mainWindow.focus();
};

app.on('ready', createWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    if (mainWindow === null) {
        createWindow();
    }
});