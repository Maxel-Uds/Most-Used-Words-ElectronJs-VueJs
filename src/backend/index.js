const { ipcMain } = require('electron')

const pathsToRows = require('./pathsToRows')
const prepareData = require('./prepareData')

ipcMain.on('process-subtitles', (event, paths) => {
    pathsToRows(paths)
    .then(rows => prepareData(rows))
    .then(words => console.log(words))
    .then(() => {
        event.reply('process-subtitles', [
            { name: 'you', amount: 900 },
            { name: 'he', amount: 600 },
            { name: 'i', amount: 700 }     
        ])
    })   
})