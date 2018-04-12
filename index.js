const fs = require('fs')

fs.readFile('file.path', (err, data) => {
    if (err) {
        console.log(err)
        return
    }

    console.log(data.byteLength)
})

let a = 'some string variable'

function arrSum (arr) {
    let sum = 0

    arr.forEach(element => {
        sum += element;
    });

    return sum;
}