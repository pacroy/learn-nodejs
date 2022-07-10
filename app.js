console.log(`
================================================================================
1. Hello world
================================================================================`)
function sayHello(name) {
    console.log('Hello ' + name)
}

sayHello('Eddie')

console.log(`
================================================================================
2. Global Objects
================================================================================`)
// console
// setTimeout()
// clearTimeout()
// setInterval()
// clearInterval()

/*
In browser, these global objects are within `window` object.
    All declared variables are also added to `window` object.
In Node, these global objects are within `global` object.
    However, declared variables are not added to `global` object.
*/
var message = 'Hi'
console.log(global.message)

console.log(`
================================================================================
3. Modules
================================================================================`)
/*
Declaring the same object at the global scope again will override it.
So we should avoid using global scope for functions and variables.
Instead, we should encapsulate things in modules and use `app.js` as the main module only.
*/

// In Node, every .js file is a module.
console.log(module)

// Load and call other local module
const logger = require('./logger') // Node auto recognize `.js` files
console.log(logger)
logger('Hello module!')
// logger = 1   // This will end up in TypeError

console.log(`
================================================================================
5. Path Module
================================================================================`)
/*
Head to nodejs.org -> Docs -> vxx.xx API  and you'll see all built-in modules or global objects
e.g. https://nodejs.org/dist/latest-v16.x/docs/api/
*/

const path = require('path')
let pathObject = path.parse(__filename);
console.log(pathObject)

console.log(`
================================================================================
6. OS Module
================================================================================`)
const os = require('os')
let totalMemory= os.totalmem();
let freeMemory = os.freemem();

// Template string is available from ES6 / ES2015 / ECMAScript 6
console.log(`Total Memory: ${totalMemory}`)
console.log(`Free Memory : ${freeMemory}`)

console.log(`
================================================================================
6. File System Module
================================================================================`)
const fs = require('fs')
// fs usually provides both async and sync version of functions

// Sync version
const files = fs.readdirSync('./')
console.log(files)

// Async version, usually accept function as the last parameter
fs.readdir('./', function(err, files) {
    if (err) console.log('Error:', err)
    else console.log(files)
})

console.log(`
================================================================================
7. Events Module
================================================================================`)
// We get EventEmitter class from the `require('events')`
const EventEmitter = require('events')
const emitter = new EventEmitter()

// In ES6, you can use arrow operator:
// emitter.on('messageLogged', (arg) => {
emitter.on('messageLogged', function(arg) {
    console.log('Listener called', arg)
})

// It is a good practice to encapsulate event arguments into an object
emitter.emit('messageLogged', {
    id: 1,
    url: 'http://'
})
