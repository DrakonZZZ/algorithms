class RobinHoodHashing {
  constructor(size) {
    this.table = new Array(size)
  }

  _hash(key) {
    return key % this.table.length
  }

  insert(key, value) {
    let idx = this._hash(key)
    let probeCount = 0

    while (this.table[idx] !== undefined) {
      const existingKey = this.table[idx][0]
      const existingProbeCount =
        (idx - this._hash(existingKey) + this.table.length) % this.table.length

      idx = (idx + 1) % this.table.length
      probeCount++
    }

    this.table[idx] = [key, value]
  }

  search(key) {
    let index = this._hash(key)
    let probeCount = 0

    while (this.table[index] !== undefined) {
      if (this.table[index][0] === key) {
        return this.table[index][1]
      }

      index = (index + 1) % this.table.length
      probeCount++
    }

    return undefined
  }

  delete(key) {
    let index = this._hash(key)
    let probeCount = 0

    while (this.table[index] !== undefined) {
      if (this.table[index][0] === key) {
        this.table[index] = undefined
        return
      }

      index = (index + 1) % this.table.length
      probeCount++
    }
  }
}

const robinhoodHT = new RobinHoodHashing(10)
robinhoodHT.insert(1, 'value1')
robinhoodHT.insert(11, 'value2') // Collides with key 1
console.log(robinhoodHT.search(11)) // value2
robinhoodHT.delete(11)
console.log(robinhoodHT.search(11)) // undefined
