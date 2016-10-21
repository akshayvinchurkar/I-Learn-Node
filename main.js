const fs = require('fs');

//write a function that read your file simple way
function readYourFile(filename){
    fs.readFile(filename, 'utf8', function (err, data){
        if(err){
            console.log(err);
        }
        console.log(data);
    });
}

readYourFile('a.json');
