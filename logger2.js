const EventEmitter = require('events')

class Logger extends EventEmitter { // class and extends are from ES6
    log(message) {  // function keyword is not required within a class
        console.log(message)

        this.emit('messageLogged', {
            id: 2,
            url: 'http://logger2'
        })
    }
}

module.exports = Logger
