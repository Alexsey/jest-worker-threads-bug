const {parentPort} = require('worker_threads')

const foo = require('./foo')

parentPort.postMessage(foo())
