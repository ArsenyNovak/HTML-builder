const fs = require('fs');
const path = require('path');
const readline = require("readline");
const process = require("process");

let writableStream = fs.createWriteStream(
    path.join(__dirname, 'text.txt')
);
console.log("Write here now:")
const rl = readline.createInterface({
    input: process.stdin,
})

rl.input.on('data', data => {
    if (data.toString().trim() === 'exit') {
        out()
    }
    writableStream.write(data)
})

process.on('SIGINT', out);

 function out() {
    console.log('out');
    writableStream.end();
    process.exit();
 }     



