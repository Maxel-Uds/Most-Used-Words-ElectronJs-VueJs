const { ipcMain } = require('electron')

ipcMain.on('process-subtitles', (event, paths) => {
    console.log(paths)

    event.reply('process-subtitles', [
        { name: 'you', amount: 900 },
        { name: 'he', amount: 600 },
        { name: 'i', amount: 700 }     
    ])
})