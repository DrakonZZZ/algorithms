class Node {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
  }
}

class Tree {
  constructor() {
    this.root = null
  }
}

function areTreesIdentical(t1, t2) {
  if (t1 === null && t2 === null) {
    return true
  }

  if (node1 === null || node2 === null) {
    return false // One node is null, but the other isn't
  }

  if (t1.value !== t2.value) {
    return false
  }

  return (
    areTreesIdentical(t1.left, t2.left) && areTreesIdentical(t1.right, t2.right)
  )
}

function areTreesIdenticalIterative(root1, root2) {
  const stack = [[root1, root2]] // Stack containing pairs of corresponding nodes

  while (stack.length > 0) {
    const [node1, node2] = stack.pop() // Pop the top pair of nodes

    if (node1 === null && node2 === null) {
      continue // Both are null, they match, continue to the next pair
    }

    if (node1 === null || node2 === null) {
      return false // One is null, but the other isn't, trees don't match
    }

    if (node1.value !== node2.value) {
      return false // Values don't match, trees don't match
    }

    // Add left and right child pairs to the stack
    stack.push([node1.left, node2.left])
    stack.push([node1.right, node2.right])
  }

  return true // All node pairs matched
}

const tree1 = new TreeNode(1)
tree1.left = new TreeNode(2)
tree1.right = new TreeNode(3)

const tree2 = new TreeNode(1)
tree2.left = new TreeNode(2)
tree2.right = new TreeNode(3)

const tree3 = new TreeNode(1)
tree3.left = new TreeNode(2)

console.log(areTreesIdentical(tree1, tree2))
console.log(areTreesIdentical(tree1, tree3))
