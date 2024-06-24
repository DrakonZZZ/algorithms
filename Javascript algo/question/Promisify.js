function promisify(callback) {
  return function (...args) {
    return new Promise((res, rej) => {
      function handleErrorAndValue(error, value) {
        if (error == null) {
          res(value)
        } else {
          rej(error)
        }
      }
      callback.call(this, ...args, handleErrorAndValue)
    })
  }
}
