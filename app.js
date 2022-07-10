/*================================================================================
1. Hello world
================================================================================*/
function sayHello(name) {
    console.log('Hello ' + name)
}

sayHello('Eddie')

/*================================================================================
2. Global Objects
================================================================================*/
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

/*================================================================================
3. Modules
================================================================================*/
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
