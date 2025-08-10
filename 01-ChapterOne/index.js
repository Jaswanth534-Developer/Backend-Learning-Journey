
// Global Objects 

// Node.js
global.mylet = 99;
console.log(mylet)

//Browser
// window.mylar = 97;
// console.log(window.myVar)



// Node.js :--

const fs = require('fs');
fs.readFile('myfile.txt', 'utf8', (err, data) =>{
    if(err){
        console.log('Something went wrong'+ err)
    }
    console.log('File has opened '+ data);
})


// Browser :-- Not allowed for security reasons

