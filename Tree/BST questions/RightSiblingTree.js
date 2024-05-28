class TreeNode {
  constructor(val = 0, left = null, right = null) {
    this.val = val
    this.left = left
    this.right = right
  }
}

// Function to convert a binary tree to a right sibling tree
function toRightSiblingTree(root) {
  if (!root) {
    return null
  }

  // Recursive helper function to connect siblings
  function connectSiblings(node) {
    if (!node) {
      return
    }

    // Connect siblings within the same level
    if (node.left && node.right) {
      node.left.right = node.right
    }

    // Connect siblings from different subtrees
    let current = node.left
    while (current && current.right) {
      current = current.right
    }

    if (current) {
      current.right = node.right
    }

    // Recursive call on left and right children
    connectSiblings(node.left)
    connectSiblings(node.right)
  }

  connectSiblings(root)

  return root
}

// Example binary tree
const root = new TreeNode(1)
root.left = new TreeNode(2)
root.right = new TreeNode(3)
root.left.left = new TreeNode(4)
root.left.right = new TreeNode(5)
root.right.right = new TreeNode(6)

// Convert to a right sibling tree
toRightSiblingTree(root)

// Test the conversion by following the right pointers at each level
console.log('Level 1:', root.val) // 1
console.log('Level 2:', root.left.val, '->', root.left.right.val) // 2 -> 3
console.log(
  'Level 3:',
  root.left.left.val,
  '->',
  root.left.right.val,
  '->',
  root.right.right.val
)
