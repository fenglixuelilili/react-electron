const { contextBridge, ipcRenderer } = require('electron')
const electron = require('electron')
console.log(process,'服务端的')
const fs = require('fs')
// const _process = process
contextBridge.exposeInMainWorld(
  'electron',
  {
    doThing: () => ipcRenderer.send('do-a-thing'),
    electron,
    fs,
    // 注入进去的目录是以当前目录为准的
    __dirname: __dirname,
    // process: _process
  }
)