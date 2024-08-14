class ChainingHashTable {
  constructor(size) {
    this.table = new Array(size)
  }

  _hash(key) {
    return key % this.table.length
  }

  insert(key, value) {
    const idx = this._hash(key)

    if (!this.table[idx]) {
      this.table[idx] = []
    }

    this.table[idx].push([key, value])
  }

  search(key) {
    const idx = this._hash(key)
    const data = this.table[idx]
    if (data) {
      for (const [k, v] of data) {
        if (k === key) return v
      }
    }
    return undefined
  }

  delete(key) {
    const idx = this._hash(key)
    const data = this.table[idx]
    if (data) {
      this.table[idx] = data.filter(([k]) => k != key)
    }
  }
}

const chainingHT = new ChainingHashTable(10)
chainingHT.insert(1, 'value1')
chainingHT.insert(11, 'value2') // Collides with key 1
console.log(chainingHT.search(11)) // value2
chainingHT.delete(11)
console.log(chainingHT.search(11)) //undefined
