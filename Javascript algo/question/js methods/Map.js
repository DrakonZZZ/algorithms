Array.prototype.myMap = function (cb) {
  const newArr = []

  for (let i = 0; i < this.length; i++) {
    newArr.push(cb(this[i], i, this))
  }
  return newArr
}

Array.prototype.myFilter = function (cb) {
  const newArr = []
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i], i, this) === true) {
      newArr.push(this[i])
    }
  }
  return newArr
}

Array.prototype.myReduce = function (cb, init) {
  let accumulator = init

  for (let i = 0; i < this.length; i++) {
    if (i === 0 && init === undefined) {
      accumulator = this[i]
    } else {
      accumulator = cb(accumulator, this[i], i, this)
    }
  }

  return accumulator
}
