Array.prototype.myPush = function (...args) {
  let currentLength = this.length
  for (let i = 0; i < args.length; i++) {
    this[currentLength] = args[i]
    currentLength++
  }

  this.length = currentLength
  return this.length
}

const arr = [1, 2, 3]
arr.myPush(4)
console.log(arr)
