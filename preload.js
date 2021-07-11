const { contextBridge, ipcRenderer } = require('electron')
const electron = require('electron')

contextBridge.exposeInMainWorld(
  'electron',
  {
    doThing: () => ipcRenderer.send('do-a-thing'),
    electron
  }
)