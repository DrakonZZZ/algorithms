class BST {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
  }
}

function findMin(node) {
  while (node.left) {
    node = node.left
  }
  return node
}

function findSuccessor(root, target) {
  let current = root
  let successor = null
  while (current) {
    if (current.value > target) {
      successor = current
      current = current.left
    } else if (current.value < target) {
      current = current.right
    } else {
      if (current.right) {
        successor = findMin(current.right)
      }
      break
    }
  }
  return successor
}

// Example BST
const root = new BST(20)
root.left = new BST(10)
root.right = new BST(30)
root.left.left = new BST(5)
root.left.right = new BST(15)
root.right.left = new BST(25)
root.right.right = new BST(35)

// Find the successor of the node with value 15
const targetNodeValue = 15
const successor = findSuccessor(root, targetNodeValue)

console.log('Successor:', successor ? successor.value : 'None')
