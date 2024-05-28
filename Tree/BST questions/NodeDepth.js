class TreeNode {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
  }
}
function calculateNodeDepths(node, depth) {
  if (!node) return 0

  return (
    depth +
    calculateNodeDepths(node.left, depth + 1) +
    calculateNodeDepths(node.right, depth + 1)
  )
}

function nodeDepths(root) {
  return calculateNodeDepths(root, 0) // Start with a depth of 0
}

// Example tree structure
const root = new TreeNode(10)
root.left = new TreeNode(5)
root.right = new TreeNode(15)
root.left.left = new TreeNode(2)
root.left.right = new TreeNode(6)
root.left.left.left = new TreeNode(1)
root.right.right = new TreeNode(22)

const totalDepths = nodeDepths(root)

console.log('Total Node Depths:', totalDepths)

function nodeDepthsIterative(root) {
  if (!root) return 0

  const stack = [{ node: root, depth: 0 }]
  let totalDepth = 0

  while (stack.length) {
    const { node, depth } = stack.pop()
    if (!node) continue

    totalDepth += depth

    if (node.left) stack.push({ node: node.left, depth: depth + 1 })
    if (node.right) stack.push({ node: node.right, depth: depth + 1 })
  }

  return totalDepth
}
const totalDepthsIterative = nodeDepthsIterative(root)

console.log('Total Node Depths (Iterative):', totalDepthsIterative)
