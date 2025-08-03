// main.js - AvAility Training Portal
document.addEventListener('DOMContentLoaded', function() {
  // Future enhancements: navigation, card interactivity, etc.
});
const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow () {
  const win = new BrowserWindow({
    width: 1000,
    height: 800,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      nodeIntegration: true
    }
  });

  win.loadFile('index.html');
}

app.whenReady().then(createWindow);
