const fs = require('fs');

/*console.log("started");
const data = fs.readFileSync('./sample.txt');

console.log(data.toString());*/


console.log("started");
fs.readFile('./sample.txt', (err,data)=>{
    if(err){
        console.log("An error has occured.",err);
        return;
    }
    console.log(data.toString());
});
console.log("completed");
