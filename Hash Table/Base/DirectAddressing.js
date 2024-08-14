class DirectAddressTable {
  constructor(size) {
    this.table = new Array(size)
  }

  insert(key, value) {
    this.table[key] = value
  }

  search(key) {
    return this.table[key]
  }

  delete(key) {
    this.table[key] = undefined
  }
}

const hashTable = new DirectAddressTable(10)
hashTable.insert(2, 'value')
hashTable.insert(2, 'value2')
console.log(hashTable.search(2)) // value2
hashTable.delete(2)
console.log(hashTable.search(2)) // undefined
