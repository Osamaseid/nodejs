const os  = require('os');

const fs = require('fs');
const { text } = require('stream/consumers');

var file = fs.readFileSync( './file.txt', 'utf8', (error, data) => {
    if (error){
        console.error(error);
    }
    else{
        console.log(data)
    }
});

console.log(file);


const platfrom = os.platform();
console.log(platfrom);

const freespace = os.freemem();  text
console.log(freespace); 