// Day 1:--

// Node.js is free open source tools that lets you run JavaScript outside the web browser
// With Node.js you can build fast and scalable applications like web servers, APIs , tools, and more.

console.log('Hello From Node js!')

// Why Node.js :--
 //           Node.js excels at handling many simultaneous connetions with minimal overhead, making it perfect for:
 //  1. Real-time applications  (Chats, gaming, collaboration tools)
 // 2. ApIs and microservices,
 // 3. Data streaming applications
 // 4. Command-line tools
 // 5. Server-side web applications



 // Read a File Asynchronously 
 const fs = require('fs');

 fs.readFile('myfile.txt', 'utf8', (err, data) => {
    if(err) {
        console.log('Error reading fille' + err)
        return;
    }
    console.log('File content is: ' + data);
 });
    
 console.log('Reading file......(this runs first!)');


// Simple web server

const http = require('http');
const myServer = http.createServer((req, res) =>{
    res.write('Welcome to node.js !!');
    res.end();
})
myServer.listen(6500)


// Variables and Functions 

let name = 'Node.js';
const version = 20;

function greet(user){
    return `Hello ${user}`;
}

const add = (a,b) => a + b;

console.log(greet('Developer'));
console.log(add(4,6))


// Objects and arrays;

const user = {
    name:'Alice',
    age: 99,
    greet(){
        console.log(`Hi, i am ${this.name}!`)
    }
}

const arr = ['Red','Green','Blue']

arr.forEach(color => console.log(color))
const lengths = arr.map((color) =>{
    color.length;
})
console.log(lengths)