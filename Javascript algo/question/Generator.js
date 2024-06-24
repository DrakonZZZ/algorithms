function* memeGen() {
  yield 'yeet'
  yield 'Whatt!'
  yield 'wow'
  return
}

const meme = {
  [Symbol.iterator]: memeGen,
}

const memeIterator = meme[Symbol.iterator]()

console.log(memeIterator.next())
console.log(memeIterator.next())
console.log(memeIterator.next())
console.log(memeIterator.next())
