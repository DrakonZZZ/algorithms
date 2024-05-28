//  TIME O(n) and SPACE O(n)

class TreeNode {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
  }
}

// Recursive function to invert the binary tree
function invertTree(node) {
  if (!node) return // Base case: if the node is null, do nothing

  // Swap the left and right children
  const temp = node.left
  node.left = node.right
  node.right = temp

  // Recursively invert the left and right subtrees
  invertTree(node.left)
  invertTree(node.right)
}

// Function to perform a level-order traversal (to test tree structure)
function levelOrderTraversal(root) {
  if (!root) return []

  const queue = [root]
  const result = []

  while (queue.length > 0) {
    const node = queue.shift()
    result.push(node.value) // Add node value to result

    if (node.left) queue.push(node.left)
    if (node.right) queue.push(node.right)
  }

  return result
}

// Example binary tree
const root = new TreeNode(1)
root.left = new TreeNode(2)
root.right = new TreeNode(3)
root.left.left = new TreeNode(4)
root.left.right = new TreeNode(5)
root.right.left = new TreeNode(6)
root.right.right = new TreeNode(7)

// Invert the binary tree
invertTree(root)

// Output the level-order traversal of the inverted tree
console.log('Level-Order Traversal:', levelOrderTraversal(root))
function invertTreeIterative(root) {
  if (!root) return

  const queue = [root]

  while (queue.length) {
    const node = queue.shift()

    const temp = node.left
    node.left = node.right
    node.right = temp

    if (node.left) queue.push(node.left)
    if (node.right) queue.push(node.right)
  }

  return root
}

invertTreeIterative(root)

console.log('Level-Order Traversal (Iterative):', levelOrderTraversal(root))
