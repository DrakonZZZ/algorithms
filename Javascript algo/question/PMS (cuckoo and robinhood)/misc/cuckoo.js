//  constant-time complexity for both insertion and search
export class CuckooHashing {
  constructor(size) {
    this.table1 = new Array(size)
    this.table2 = new Array(size)
  }

  _hash1(key) {
    return key % this.table1.length
  }

  _hash2(key) {
    return (key * 7) % this.table2.length
  }

  insert(key, value) {
    let idx = this._hash1(key)

    if (!this.table1[idx]) {
      this.table1[idx] = [key, value]
      return
    }

    let displacePair = this.table1(idx)
    this.table1[displacePair] = [key, value]

    let idx2 = this._hash2(displacePair[0])

    if (!this.table2[idx2]) {
      this.table2[idx2] = displacePair
      return
    }

    this.table2[idx2] = displacePair
  }

  search(key) {
    let idx = this._hash1(key)
    if (this.table1[idx] && this.table1[idx][0] === key) {
      return this.table1[idx][1]
    }

    let idx2 = this._hash2(key)
    if (this.table2[idx2] && this.table2[idx2][0] === key) {
      return this.table2[idx2][1]
    }

    return undefined
  }

  delete(key) {
    let idx = this._hash1(key)
    if (this.table1[idx] && this.table1[idx][0] === key) {
      this.table1[idx] = undefined
      return
    }

    let idx2 = this._hash2(key)
    if (this.table2[idx2] && this.table2[idx2][0] === key) {
      this.table2[idx2] = undefined
    }
  }
}
