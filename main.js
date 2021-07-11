const { app, BrowserWindow } = require('electron')
const path = require('path')
// 判断是否是开发环境
const isDev = require('electron-is-dev')
app.on('ready',function(){
    let mainwindow = new BrowserWindow({
        width: 1024,
        height: 500,
        // 开启无半框的窗口
        frame: false,
        webPreferences: {
            // 开启渲染进程的node
            nodeIntegration: true,
            nodeIntegrationInWorker: true,
            // 开启渲染进程的mote ，就是通过remote拿到主进程的方法类
            enableRemoteModule: true,
            // 引入暴露文件
            preload: path.join(__dirname, "preload.js")
        }
    })
    mainwindow.webContents.openDevTools()
    let urlLocation = isDev ? 'http://localhost:3000' : ''
    mainwindow.loadURL(urlLocation)
})