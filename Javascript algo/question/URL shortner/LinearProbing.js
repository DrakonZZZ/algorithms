export function hashCode(str) {
  let hash = 0
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i)
    hash = (hash << 5) - hash + char
    hash |= 0 // Convert to 32bit integer
  }
  return Math.abs(hash)
}

export class LinearProbingHash {
  constructor(size) {
    this.table = new Array(size)
  }

  _hash(key) {
    return key % this.table.length
  }

  insert(key, value) {
    console.log(this.table)
    const numericKey = hashCode(key) // Convert key (string) to a number
    let idx = this._hash(numericKey)

    while (this.table[idx] !== undefined) {
      if (this.table[idx][0] === numericKey) {
        this.table[idx][1] = value // Update existing value
        return
      }
      idx = (idx + 1) % this.table.length
    }

    this.table[idx] = [numericKey, value]
  }

  search(key) {
    const numericKey = hashCode(key) // Convert key (string) to a number
    let index = this._hash(numericKey)
    while (this.table[index] !== undefined) {
      if (this.table[index][0] === numericKey) return this.table[index][1]
      index = (index + 1) % this.table.length
    }
    return undefined
  }

  delete(key) {
    const numericKey = hashCode(key) // Convert key (string) to a number
    let index = this._hash(numericKey)
    while (this.table[index] !== undefined) {
      if (this.table[index][0] === numericKey) {
        this.table[index] = undefined
        return
      }
      index = (index + 1) % this.table.length
    }
  }
}
