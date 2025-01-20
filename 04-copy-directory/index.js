const fs = require('fs');
const path = require('path');

function makeDirectory(){
    const projectFolder = path.join(__dirname, 'files-copy');
    const dirCreation = fs.promises.mkdir(projectFolder, { recursive: true });
    return dirCreation;
}
makeDirectory()

const filesCopy = fs.promises.readdir(path.join(__dirname, 'files-copy'), {
    withFileTypes: true
})
filesCopy.then((values) => {
    for (let item = 0; item < values.length; item += 1){
        const filePath = path.join(__dirname, "files-copy", values[item].name);
        fs.promises.unlink(filePath);
    }
}) 

const files = fs.promises.readdir(path.join(__dirname, 'files'), {
    withFileTypes: true
})
files.then((values) => {
    for (let item = 0; item < values.length; item += 1){
        const filePath = path.join(__dirname, "files", values[item].name);
        const filePathCopy = path.join(__dirname, "files-copy", values[item].name);
        fs.promises.copyFile(filePath, filePathCopy)
    }
})         




