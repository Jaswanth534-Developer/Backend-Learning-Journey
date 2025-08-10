// Variables: let (mutable), const (immutable), var (legacy)
// Functions: Regular, arrow functions, and methods
// Objects & Arrays: Data structures for organizing data
// Modules: require() (CommonJS) and import/export (ES6)
// Error Handling: try/catch blocks




// Asynchronous JavaScript

// 1. Callbacks 

function fetchData(callback){
    setTimeout(()=>{
        callback('Data received!')
    }, 3000)
}

// 2. Promises (ES6+)

const fetchDataPromise = () =>{
    return new Promise((resolve) =>{
        setTimeout(() => {
            resolve('Promise resolved!')
        }, 1000);
    })
}

// 3. Async / Await (ES8+)

async function getData() {
    const result = await fetchDataPromise();
    console.log(result);
}

getData();


// Destructuring & Template Listerals(ES6+)

const user = ['Alice', 'Developer']
const [name, Job] = user;
console.log(`Hello ${user}`)




