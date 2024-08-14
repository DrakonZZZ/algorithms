class DoubleHashingTable {
  constructor(size) {
    this.table = new Array(size)
  }

  // This hash function determines the initial position
  _hash1(key) {
    return key % this.table.length
  }

  // This hash function determines the step size for probing
  _hash2(key) {
    return 1 + (key % (this.table.length - 1))
  }

  insert(key, value) {
    let idx = this._hash1(key)
    const step = this._hash2(ley)
    while (this.table[idx] !== undefined) {
      idx = (idx + step) % this.table.length
    }
    this.table[idx] = [key, value]
  }

  search(key) {
    let idx = this._hash1(key)
    const step = this._hash2(key)
    while (this.table[idx] !== undefined) {
      if (this.table[idx][0] === key) return this.table[idx][1]
      idx = (idx + step) % this.table.length
    }
    return undefined
  }

  delete(key) {
    let index = this._hash1(key)
    const step = this._hash2(key)
    while (this.table[idx] !== undefined) {
      if (this.table[idx][0] === key) {
        this.table[idx][0] === undefined
        return
      }
      idx = (idx + step) % this.table.length
    }
  }
}

const doubleHT = new DoubleHashingHashTable(10)
doubleHT.insert(1, 'value1')
doubleHT.insert(11, 'value2') // Collides with key 1
console.log(doubleHT.search(11)) // value2
doubleHT.delete(11)
console.log(doubleHT.search(11)) // undefined
