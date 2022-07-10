/*================================================================================
Hello world
================================================================================*/
function sayHello(name) {
    console.log('Hello ' + name)
}

sayHello('Eddie')

/*================================================================================
Global objects
================================================================================*/
// console
// setTimeout()
// clearTimeout()
// setInterval()
// clearInterval()

/*
In browser, these global objects are within `window` object.
    All declared variables are also added to `window` object.
In node, these global objects are within `global` object.
    However, declared variables are not added to `global` object.
*/
var message = 'Hi'
console.log(global.message)
