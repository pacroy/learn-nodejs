var url = 'http://mylogger.io/log'
function log(message) {
    // Now, for simplicity, this function only write logs to the console.
    console.log(message)
}

// Anything added to `exports` will be available to the module users.
module.exports.log = log
// module.exports.endPoint = url

// We can also assign to exports directly if we have only 1 object to export
module.exports = log
