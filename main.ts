import {app, BrowserWindow} from "electron";

let window;

app.on("ready", () => {
   window = new BrowserWindow({
       width: 800,
       height: 600,
       webPreferences: {
           nodeIntegration: true,
       },
   });
   window.loadFile("index.html");
});