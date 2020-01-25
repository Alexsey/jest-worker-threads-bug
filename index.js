const {Worker} = require('worker_threads')

const foo = require('./foo')

module.exports = async () => {
  return new Promise(resolve => {
    const worker = new Worker('./worker.js')
    const outOfWorkerFoo = foo()
    worker.on('message', workerFoo =>
      resolve({outOfWorkerFoo, workerFoo})
    )
  })
}
