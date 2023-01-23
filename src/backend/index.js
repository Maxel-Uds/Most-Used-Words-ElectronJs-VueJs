const { ipcMain } = require('electron')

const pathsToRows = require('./pathsToRows')

ipcMain.on('process-subtitles', (event, paths) => {
    pathsToRows(paths)
    .then(rows => console.log(rows))
    .then(() => {
        event.reply('process-subtitles', [
            { name: 'you', amount: 900 },
            { name: 'he', amount: 600 },
            { name: 'i', amount: 700 }     
        ])
    })   
})