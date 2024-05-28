class TreeNode {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
  }
}

function buildTree(arr, bounds, index) {
  if (index.current >= arr.length) {
    return null // No more elements to process
  }

  const value = arr[index.current]
  if (value < bounds[0] || value > bounds[1]) {
    return null // If the value is out of the given bounds, return null
  }

  index.current++ // Move to the next value
  const node = new TreeNode(value)

  // Recursively build the left subtree with updated bounds
  node.left = buildTree(arr, [bounds[0], value], index)

  // Recursively build the right subtree with updated bounds
  node.right = buildTree(arr, [value, bounds[1]], index)

  return node
}

function reconstructBST(arr) {
  const index = { current: 0 } // Using an object to maintain index reference
  return buildTree(arr, [-Infinity, Infinity], index)
}

const preOrder = [10, 5, 2, 7, 15, 13, 22]
const bstRoot = reconstructBST(preOrder)

function inOrderTraversal(node) {
  if (node === null) {
    return // Base case for recursion
  }
  inOrderTraversal(node.left) // Traverse left subtree
  console.log(node.value) // Visit the current node
  inOrderTraversal(node.right) // Traverse right subtree
}

console.log('In-order traversal of reconstructed BST:')
inOrderTraversal(bstRoot)
