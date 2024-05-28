class TreeNode {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
  }
}

const root = new TreeNode(1)
root.left = new TreeNode(2)
root.right = new TreeNode(3)
root.left.left = new TreeNode(4)
root.left.right = new TreeNode(5)
root.right.left = new TreeNode(6)
root.right.right = new TreeNode(7)

function calculateDiameterAndHeight(node) {
  if (!node) {
    return { height: 0, diameter: 0 }
  }

  let left = calculateDiameterAndHeight(node.left)
  let right = calculateDiameterAndHeight(node.right)

  const currentHeight = 1 + Math.max(left.height, right.height)
  const diameterThroughNode = left.height + right.height

  const currentDiameter = Math.max(
    diameterThroughNode,
    left.diameter,
    right.diameter
  )

  return {
    height: currentHeight,
    diameter: currentDiameter,
  }
}

function treeDiameter(root) {
  if (!root) return 0
  return calculateDiameterAndHeight(root)
}

const tDiameter = treeDiameter(root)

console.log('Binary Tree Diameter:', tDiameter)
