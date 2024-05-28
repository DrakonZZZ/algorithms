class TreeNode {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
  }
}

// Helper function to check the height and balance of the tree
function checkHeightAndBalance(node) {
  if (!node) {
    return { height: 0, isBalanced: true } // Base case for null nodes
  }

  // Recursively check the height and balance of the left subtree
  const leftResult = checkHeightAndBalance(node.left)

  if (!leftResult.isBalanced) {
    // If the left subtree is not balanced, the whole tree is not balanced
    return { height: 0, isBalanced: false }
  }

  // Recursively check the height and balance of the right subtree
  const rightResult = checkHeightAndBalance(node.right)

  if (!rightResult.isBalanced) {
    // If the right subtree is not balanced, the whole tree is not balanced
    return { height: 0, isBalanced: false }
  }

  // Calculate the height difference between left and right subtrees
  const heightDifference = Math.abs(leftResult.height - rightResult.height)

  // Determine if the current node is balanced
  const isBalanced = heightDifference <= 1

  // Calculate the current node's height
  const currentHeight = 1 + Math.max(leftResult.height, rightResult.height)

  return {
    height: currentHeight,
    isBalanced: isBalanced,
  }
}

// Function to check if a binary tree is height-balanced
function isBalanced(root) {
  return checkHeightAndBalance(root).isBalanced // Return whether the tree is balanced
}

// Example binary tree
const root = new TreeNode(10)
root.left = new TreeNode(5)
root.right = new TreeNode(15)
root.left.left = new TreeNode(3)
root.left.right = new TreeNode(7)
root.right.left = new TreeNode(12)
root.right.right = new TreeNode(18)

// Check if the binary tree is height-balanced
const balanced = isBalanced(root)

console.log('Is the tree height-balanced?', balanced)
