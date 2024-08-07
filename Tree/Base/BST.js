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

  // Time complexity O(log N) avg and O(n) Worst case
  insert(value) {
    const newNode = new Node(value)
    if (!this.root) {
      this.root = newNode
      return this
    } else {
      let temp = this.root
      while (true) {
        if (temp.value === newNode.value) return undefined
        if (value < temp.value) {
          if (!temp.left) {
            temp.left = newNode
            return this
          }
          temp = temp.left
        } else {
          if (!temp.right) {
            temp.right = newNode
            return this
          }
          temp = temp.right
        }
      }
    }
  }

  // Time complexity O(log N) avg and O(n) Worst case
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

  // Time complexity O(log N) avg and O(n) Worst case
  findMin() {
    if (!this.root) return undefined
    let temp = this.root
    while (temp.left) {
      temp = temp.left
    }
    return temp.value
  }

  // Time complexity O(log N) avg and O(n) Worst case
  findMax() {
    if (!this.root) return undefined
    let temp = this.root
    while (temp.right) {
      temp = temp.right
    }
    return temp.value
  }

  // Time complexity O(log N) avg and O(n) Worst case
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

  // Breadth-First Search
  breadthFirstSearch() {
    let temp = this.root,
      queue = [],
      result = []
    queue.push(temp)
    while (queue.length) {
      temp = queue.shift()
      result.push(temp.value)
      if (temp.left) queue.push(temp.left)
      if (temp.right) queue.push(temp.right)
    }
    return result
  }

  // Depth-First Search - PreOrder
  dfsPre(node = this.root, result = []) {
    if (node) {
      result.push(node.value)
      if (node.left) this.dfsPre(node.left, result)
      if (node.right) this.dfsPre(node.right, result)
    }
    return result
  }

  // Depth-First Search - PostOrder
  dfsPost(node = this.root, result = []) {
    if (node) {
      if (node.left) this.dfsPost(node.left, result)
      if (node.right) this.dfsPost(node.right, result)
      result.push(node.value)
    }
    return result
  }

  // Depth-First Search - InOrder
  dfsIn(node = this.root, result = []) {
    if (node) {
      if (node.left) this.dfsIn(node.left, result)
      result.push(node.value)
      if (node.right) this.dfsIn(node.right, result)
    }
    return result
  }
}

// Example Usage
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

console.log('BFS:', bst.breadthFirstSearch())
console.log('DFS PreOrder:', bst.dfsPre())
console.log('DFS PostOrder:', bst.dfsPost())
console.log('DFS InOrder:', bst.dfsIn())
