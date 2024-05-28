class TreeNode {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
  }
}

const symmetricalTree = new TreeNode(1)
symmetricalTree.left = new TreeNode(2)
symmetricalTree.right = new TreeNode(2)
symmetricalTree.left.left = new TreeNode(3)
symmetricalTree.left.right = new TreeNode(4)
symmetricalTree.right.left = new TreeNode(4)
symmetricalTree.right.right = new TreeNode(3)

// Example of a non-symmetrical binary tree
const nonSymmetricalTree = new TreeNode(1)
nonSymmetricalTree.left = new TreeNode(2)
nonSymmetricalTree.right = new TreeNode(2)
nonSymmetricalTree.left.left = new TreeNode(3)
nonSymmetricalTree.right.right = new TreeNode(3)

function isMirror(left, right) {
  if (!left && !right) return true
  if (!left || !right) return false

  return (
    left.value === right.value &&
    isMirror(left.left, right.right) &&
    isMirror(left.right, right.left)
  )
}

function isSymmetrical(root) {
  if (!root) return true
  return isMirror(root.left, root.right)
}

console.log('Is the first tree symmetrical?', isSymmetrical(symmetricalTree))
