const fs = require('fs');
const path = require('path');


const files = fs.promises.readdir(path.join(__dirname, 'secret-folder'), {
    withFileTypes: true
})
files.then((values) => {
    for (let item of values)
        if (item.isFile()) {
            let file = path.join(__dirname, 'secret-folder', item.name)
            fs.promises.stat(file).then((value) => {
                console.log(item.name.replace(".", "-") + `-${value.size}b`)                        
            })            
        }
})


    
