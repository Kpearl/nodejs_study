const fs = require('fs');

fs.writeFile('./writeme.txt', 'Write Me!', (err) => {
    if(err) {
        throw err;
    }
    fs.readFile('./writeme.txt', (err, data) => {
        if(err) {
            throw err;
        }
        console.log(data.toString());
    });
});