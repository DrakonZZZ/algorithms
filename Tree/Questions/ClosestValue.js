class TreeNode {
  constructor(value, left = null, right = null) {
    this.value = value
    this.left = left
    this.right = right
  }
}

function findClosestValueInBST(root, target) {
  return findClosestHelper(root, target, root.value)
}

function findClosestHelper(node, target, closest) {
  if (node === null) {
    return closest
  }

  if (Math.abs(target - closest) > Math.abs(target - node.value)) {
    closest = node.value
  }

  if (target < node.value) {
    return findClosestHelper(node.left, target, closest)
  } else if (target > node.value) {
    return findClosestHelper(node.right, target, closest)
  } else {
    return closest
  }
}

const root = new TreeNode(10)
root.left = new TreeNode(5, new TreeNode(2), new TreeNode(7))
root.right = new TreeNode(15, new TreeNode(13), new TreeNode(22))

const target = 12
const closestValue = findClosestValueInBST(root, target)
console.log('Closest value:', closestValue)
