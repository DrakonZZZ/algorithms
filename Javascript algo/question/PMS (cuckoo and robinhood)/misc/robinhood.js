export class RobinHoodHashing {
  constructor(size) {
    this.table = new Array(size)
    this.size = size
  }

  _hash(key) {
    return key % this.size
  }

  insert(key, value) {
    let idx = this._hash(key)
    let probeCount = 0

    while (this.table[idx] !== undefined) {
      const existingKey = this.table[idx][0]
      const existingProbeCount =
        (idx - this._hash(existingKey) + this.size) % this.size

      if (probeCount > existingProbeCount) {
        ;[key, value, probeCount] = [
          this.table[idx][0],
          this.table[idx][1],
          existingProbeCount,
        ]
        this.table[idx] = [key, value]
      }

      idx = (idx + 1) % this.size
      probeCount++
    }

    this.table[idx] = [key, value]
  }

  search(key) {
    let idx = this._hash(key)
    let probeCount = 0

    while (this.table[idx] !== undefined) {
      if (this.table[idx][0] === key) {
        return this.table[idx][1]
      }

      idx = (idx + 1) % this.size
      probeCount++
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

      idx = (idx + 1) % this.size
    }
  }
}
