//write a function that read your file simple way

const fs = require('fs');
function readYourFile(filename){
    fs.readFile(filename, 'utf8', function (err, data){
        if(err){
            console.log(err);
        }
        console.log(data);
    });
}
readYourFile('a.json');

//get today Date
var tdate = new Date();
console.log(tdate);
