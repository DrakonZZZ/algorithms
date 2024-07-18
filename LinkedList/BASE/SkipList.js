class Node {
  constructor(data, maxLevels) {
    this.data = data
    this.forward = new Array(maxLevels).fill(null)
  }
}

class skipList {
  constructor(maxLevels) {
    this.head = new Node(-Infinity, maxLevels)
    this.maxLevels = maxLevels
    this.level = 0
  }

  insert(value) {
    const update = new Array(this.maxLevels).fill(null)

    let current = this.head
    for (let i = this.level; i >= 0; i--) {
      w
    }
  }
}
