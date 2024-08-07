// Time Complexity O(log N);
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

  //Time complexity O(log N) avg and O(n) Worst case
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

  //Time complexity O(log N) avg and O(n) Worst case
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
  //Time complexity O(log N) avg and O(n) Worst case
  findMin() {
    if (!this.root) return undefined
    let temp = this.root
    while (temp.left) {
      temp = temp.left
    }
    return temp.value
  }
  //Time complexity O(log N) avg and O(n) Worst case
  findMax() {
    if (!this.root) return undefined
    let temp = this.root
    while (temp.right) {
      temp = temp.right
    }
    return temp.value
  }

  //Time complexity O(log N) avg and O(n) Worst case
  delete(value) {
    // replaces the root node with modified node
    this.root = this._deleteRec(this.root, value)
  }

  //recursive delete
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

const bst = new BST()
bst.insert(10)
bst.insert(5)
bst.insert(15)
bst.insert(3)
bst.insert(7)
bst.insert(13)
bst.insert(17)

console.log('Find 7:', bst.find(7))
console.log('Find Min:', bst.findMin())
console.log('Find Max:', bst.findMax())

bst.delete(10)
console.log('After deleting 10, Find Min:', bst.findMin())
