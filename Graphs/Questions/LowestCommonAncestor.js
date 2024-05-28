class TreeNode {
  constructor(name) {
    this.name = name
    this.left = null // Left child
    this.right = null // Right child
  }
}

function findLCA(root, node1, node2) {
  // Base case: if the current node is null or matches one of the target nodes
  if (!root || root === node1 || root === node2) {
    return root
  }

  // Recursively find the LCA in the left subtree
  const leftLCA = findLCA(root.left, node1, node2)
  // Recursively find the LCA in the right subtree
  const rightLCA = findLCA(root.right, node1, node2)

  // If one node is found in the left subtree and the other in the right subtree,
  // the current node is the LCA
  if (leftLCA && rightLCA) {
    return root
  }

  // If both nodes are in the left subtree, return the result from the left
  if (leftLCA) {
    return leftLCA
  }

  // If both nodes are in the right subtree, return the result from the right
  return rightLCA
}

// Example tree structure
const root = new TreeNode('A')
const left = new TreeNode('B')
const right = new TreeNode('C')
root.left = left
root.right = right
const leftLeft = new TreeNode('D')
const leftRight = new TreeNode('E')
left.left = leftLeft
left.right = leftRight

// Find the LCA
const lca = findLCA(root, leftLeft, leftRight)

console.log('Lowest Common Ancestor:', lca.name)
