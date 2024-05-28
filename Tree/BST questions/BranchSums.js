class BST {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
  }
}

function calculateSum(node, runningSum, sums) {
  if (!node) return
  runningSum += node.value

  if (!node.left && !node.right) {
    sums.push(runningSum)
    return
  }

  calculateSum(node.left, runningSum, sums)
  calculateSum(node.right, runningSum, sums)
}

function branchSums(root) {
  const sums = []
  calculateSum(root, 0, sums)
  return sums
}

const root = new BST(10)
root.left = new BST(5)
root.right = new BST(15)
root.left.left = new BST(2)
root.left.right = new BST(6)
root.left.left.left = new BST(1)
root.right.right = new BST(22)

const sums = branchSums(root)
console.log('Branch sums:', sums)

function iterativeBranchSums(root) {
  if (!root) return []

  const stack = [{ node: root, runningSum: 0 }]
  const sums = []

  while (stack.length) {
    const { node, runningSum } = stack.pop()
    const newSum = runningSum + node.value

    if (!node.left && !node.right) {
      sums.push(newSum)
    } else {
      if (node.right) stack.push({ node: node.right, runningSum: newSum })
      if (node.left) stack.push({ node: node.left, runningSum: newSum })
    }
  }

  return sums
}

const iterativeSums = iterativeBranchSums(root)
console.log('Iterative branch sums:', iterativeSums)
