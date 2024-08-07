class Node {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
  }
}
class BST {
  constructor() {
    this.root = null
  }

  insert(value) {
    const newNode = new Node(value)
    if (!this.root) {
      this.root = newNode
    } else {
      let temp = this.root
      while (true) {
        if (temp.value === newNode.value) return undefined
        if (value < temp.value) {
          if (!temp.left) {
            temp.left = newNode
            return
          }
          temp = temp.left
        } else {
          if (!temp.right) {
            temp.right = newNode
            return
          }
          temp = temp.right
        }
      }
    }
  }

  find(value) {
    if (!this.root) return null
    let temp = this.root
    while (temp) {
      if (temp.value === value) return temp
      if (value < temp.value) {
        temp = temp.left
      } else {
        temp = temp.right
      }
    }
    return false
  }

  findMin() {
    if (!this.root) return undefined
    let temp = this.root
    while (temp.left) {
      temp = temp.left
    }
    return temp.value
  }

  findMax() {
    if (!this.root) return undefined
    let temp = this.root
    while (temp.right) {
      temp = temp.right
    }
    return temp.value
  }

  delete(value) {
    this.root = this._deleteRec(this.root, value)
  }

  _deleteRec(root, value) {
    if (!root) return root

    if (value < root.value) {
      root.left = this._deleteRec(root.left, value)
    } else if (value > root.value) {
      root.right = this._deleteRec(root.right, value)
    } else {
      if (!root.left) return root.right
      if (!root.right) return root.left

      root.value = this._minValue(root.right)
      root.right = this._deleteRec(root.right, root.value)
    }
    return root
  }

  _minValue(node) {
    let temp = node
    while (temp.left) {
      temp = temp.left
    }
    return temp.value
  }
}
