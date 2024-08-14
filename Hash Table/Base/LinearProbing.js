// when there's a conflict it searches for next free space
class LinearProbingHashTable {
  constructor(size) {
    this.table = new Array(size)
  }

  _hash(key) {
    return key % this.table.length
  }

  insert(key, value) {
    let idx = this._hash(key)
    while (this.table[idx] !== undefined) {
      // look for next space
      idx = (idx + 1) % this.table.length
    }
    this.table[idx] = [key, value]
  }

  search(key) {
    let idx = this._hash(key)
    while (this.table[idx] !== undefined) {
      if (this.table[idx][0] === key) return this.table[idx][1]
      idx = (idx + 1) % this.table.length
    }
    return undefined
  }

  delete(key) {
    let idx = this._hash(key)
    while (this.table[idx] !== undefined) {
      if (this.table[idx][0] === key) {
        this.table[idx] = undefined
        return
      }
      idx = (idx + 1) % this.table.length
    }
  }
}

const linearHT = new LinearProbingHashTable(10)
linearHT.insert(1, 'value1')
linearHT.insert(11, 'value2') // Collides with key 1
console.log(linearHT.search(11)) // value2
linearHT.delete(11)
console.log(linearHT.search(11)) // undefined

// More cache-friendly as data is stored in a contiguous block of memory