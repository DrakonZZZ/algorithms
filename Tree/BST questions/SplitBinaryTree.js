// Define a simple Binary Tree Node
class TreeNode {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
  }
}

// Function to split a tree at a given node
function splitTree(root, splitNodeValue) {
  if (!root) return { leftTree: null, rightTree: null } // Handle empty tree

  if (root.value === splitNodeValue) {
    // If the split node is the root, return its left and right subtrees
    return { leftTree: root.left, rightTree: root.right }
  }

  // Recursively split the left subtree
  if (splitNodeValue < root.value) {
    const leftSplit = splitTree(root.left, splitNodeValue)
    root.left = null // Remove the left subtree after splitting
    return leftSplit
  }

  // Recursively split the right subtree
  if (splitNodeValue > root.value) {
    const rightSplit = splitTree(root.right, splitNodeValue)
    root.right = null // Remove the right subtree after splitting
    return rightSplit
  }

  return { leftTree: null, rightTree: null } // Default if node not found
}

// Function to print a tree in-order (for verification)
function inOrderTraversal(node) {
  if (!node) return []
  return [
    ...inOrderTraversal(node.left),
    node.value,
    ...inOrderTraversal(node.right),
  ]
}

// Example tree
const root = new TreeNode(10)
root.left = new TreeNode(5)
root.right = new TreeNode(15)
root.left.left = new TreeNode(3)
root.left.right = new TreeNode(7)
root.right.left = new TreeNode(12)
root.right.right = new TreeNode(18)

// Split the tree at a specific node (value 5)
const splitNodeValue = 5
const { leftTree, rightTree } = splitTree(root, splitNodeValue)

// Output the in-order traversal of the split trees
console.log('In-Order Traversal of Left Tree:', inOrderTraversal(leftTree)) // Expected: [3]
console.log('In-Order Traversal of Right Tree:', inOrderTraversal(rightTree))
