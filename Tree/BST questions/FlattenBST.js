class TreeNode {
  constructor(val = 0, left = null, right = null) {
    this.val = val
    this.left = left
    this.right = right
  }
}

function flattenTree(root) {
  let previous = null

  function flattenHelper(node) {
    if (node === null) {
      return
    }

    flattenHelper(node.right)
    flattenHelper(node.left)
    node.right = previous
    node.left = null
    previous = node
  }

  flattenHelper(root)
}

// Example usage
const root = new TreeNode(1)
root.left = new TreeNode(2)
root.right = new TreeNode(5)
root.left.left = new TreeNode(3)
root.left.right = new TreeNode(4)
root.right.right = new TreeNode(6)

flattenTree(root)

// Verify the flattened tree
let current = root
while (current !== null) {
  console.log(current.val) // Output: 1 2 3 4 5 6
  current = current.right // Move to the next node
}

class TreeNode {
  constructor(val = 0, left = null, right = null) {
    this.val = val
    this.left = left
    this.right = right
  }
}

function flattenTree(root) {
  if (!root) {
    return
  }

  const stack = [root]
  let previous = null

  while (stack.length > 0) {
    const current = stack.pop()

    if (previous) {
      // Re-wire the previous node's right pointer to the current node
      previous.right = current
      previous.left = null // Ensure left is set to null
    }

    // Push right child first, so left is processed before right
    if (current.right) {
      stack.push(current.right)
    }

    // Push left child onto the stack
    if (current.left) {
      stack.push(current.left)
    }

    // Update previous to current
    previous = current
  }
}

// Example usage
const root = new TreeNode(1)
root.left = new TreeNode(2)
root.right = new TreeNode(5)
root.left.left = new TreeNode(3)
root.left.right = new TreeNode(4)
root.right.right = new TreeNode(6)

flattenTree(root)

// Verify the flattened tree
let current = root
while (current !== null) {
  console.log(current.val) // Expected output: 1, 2, 3, 4, 5, 6
  current = current.right // Move to the next node
}
