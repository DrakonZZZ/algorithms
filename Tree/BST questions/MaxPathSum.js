class TreeNode {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
  }
}

// Recursive function to calculate the maximum path sum
function maxPathSumHelper(node, globalMax) {
  if (!node) {
    return 0 // Base case: no contribution from null nodes
  }

  // Get the maximum path sum from the left and right subtrees
  const leftMax = Math.max(0, maxPathSumHelper(node.left, globalMax)) // Consider only positive contributions
  const rightMax = Math.max(0, maxPathSumHelper(node.right, globalMax))

  // Calculate the path sum through the current node
  const currentPathSum = node.value + leftMax + rightMax

  // Update the global maximum if the current path sum is greater
  globalMax.value = Math.max(globalMax.value, currentPathSum)

  // Return the maximum path sum that can be extended to the parent node
  return node.value + Math.max(leftMax, rightMax)
}

// Function to find the maximum path sum in a binary tree
function maxPathSum(root) {
  if (!root) {
    return 0 // If the tree is empty, the max path sum is zero
  }

  // Use an object to maintain a global maximum
  const globalMax = { value: -Infinity }

  // Start the recursion to calculate the max path sum
  maxPathSumHelper(root, globalMax)

  return globalMax.value // Return the maximum path sum
}

// Example binary tree
const root = new TreeNode(10)
root.left = new TreeNode(2)
root.right = new TreeNode(10)
root.left.left = new TreeNode(20)
root.left.right = new TreeNode(1)
root.right.right = new TreeNode(-25)
root.right.right.left = new TreeNode(3)
root.right.right.right = new TreeNode(4)

// Calculate the maximum path sum
const result = maxPathSum(root)

console.log('Maximum Path Sum:', result)
