const electron = require('electron');
const {app, BrowserWindow} = electron;

const path = require('path');

let mainWindow;

app.on('ready', () => {
	mainWindow = new BrowserWindow({
		resizable: false,
		width: 800,
		height: 600,
	});

	mainWindow.loadURL(path.join('file://', __dirname, '/app/index.html'));
	//mainWindow.webContents.openDevTools();
});