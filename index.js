const fs = require('fs')

fs.readFile('file.path', (err, data) => {
    if (err) {
        console.log(err)
        return
    }

    console.log(data.byteLength)
})