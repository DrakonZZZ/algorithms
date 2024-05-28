class Node {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
  }
}

class Tree {
  constructor() {
    this.root = null
  }

  insert(value) {
    const newNode = new Node(value)
    if (!this.root) {
      this.root = newNode
      return
    }

    let temp = this.root
    while (true) {
      if ((temp.value = newNode.value)) {
        return undefined
      }

      if (temp.value > value) {
        if (temp.left === null) {
          temp.left = newNode
          return
        }
        temp = temp.left
      } else {
        if (current.right === null) {
          current.right = newNode
          return
        }
        current = current.right
      }
    }
  }

  delete(value) {
    this.root = this._deleteRecursively(this.root, value)
  }

  _deleteRecursively(node, value) {
    if (!node) {
      return null
    }

    let current = node

    if (current.value > value) {
      current.left = this._deleteRecursively(current.left, value)
    } else if (current.value < value) {
      current.right = this._deleteRecursively(current.right, value)
    } else {
      if (current.left === null && current.right === null) {
        return null
      }

      if (current.left === null) {
        return current.right
      }

      if (current.right === null) {
        return current.left
      }

      let maxValue = this._max(current.right)
      current.value = maxValue.value
      current.right = this._deleteRecursively(current.right, maxValue)
    }
    return node
  }

  _maxValue(node) {
    let current = node
    while (current) {
      current = current.left
    }
    return current
  }
}

const tree = new Tree()
tree.insert(10)
tree.insert(5)
tree.insert(15)
tree.insert(3)
tree.insert(7)
