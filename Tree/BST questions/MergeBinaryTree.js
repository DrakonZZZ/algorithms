class TreeNode {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
  }
}

// Create example trees
const tree1 = new TreeNode(1)
tree1.left = new TreeNode(3)
tree1.right = new TreeNode(2)
tree1.left.left = new TreeNode(5)

const tree2 = new TreeNode(2)
tree2.left = new TreeNode(1)
tree2.right = new TreeNode(3)
tree2.left.right = new TreeNode(4)
tree2.right.right = new TreeNode(7)

// Function to merge two binary trees
function mergeTrees(t1, t2) {
  if (!t1) return t2 // If t1 is null, return t2
  if (!t2) return t1 // If t2 is null, return t1

  const mergedNode = new TreeNode(t1.value + t2.value) // Sum of values

  // Recursively merge left and right children
  mergedNode.left = mergeTrees(t1.left, t2.left)
  mergedNode.right = mergeTrees(t1.right, t2.right)

  return mergedNode // Return the merged tree
}

// Function to perform a level-order traversal to visualize the tree structure
function levelOrderTraversal(root) {
  if (!root) return []

  const queue = [root]
  const result = []

  while (queue.length > 0) {
    const node = queue.shift() // Dequeue the first node
    result.push(node.value) // Store the node's value in the result array

    // Enqueue the left and right children if they exist
    if (node.left) queue.push(node.left)
    if (node.right) queue.push(node.right)
  }

  return result // Return the result array
}

// Merge the binary trees
const mergedTree = mergeTrees(tree1, tree2)

// Output the merged tree using level-order traversal
const mergedTreeValues = levelOrderTraversal(mergedTree)

console.log('Merged Tree Level-Order:', mergedTreeValues)
