class TreeNode {
  constructor(value, left = null, right = null) {
    this.value = value
    this.left = left
    this.right = right
  }
}

function inorderTraversal(root, result = []) {
  if (root == null) {
    return
  }

  inorderTraversal(root.left, result)
  result.push(root)
  inorderTraversal(root.right, result)
  return result
}

function findSwappedNodes(inorderNodes) {
  let first = null
  let second = null

  for (let i = 1; i < inorderNodes.length; i++) {
    if (inorderNodes[i].value < inorderNodes[i - 1].value) {
      if (first === null) {
        first = inorderNodes[i - 1]
      }
      second = inorderNodes[i]
    }
  }

  return { first, second }
}

function repairBST(root) {
  const inorderNodes = inorderTraversal(root)
  const { first, second } = findSwappedNodes(inorderNodes)

  if (!first && !second) {
    let temp = first.value
    first.value = second.value
    second.value = temp
  }
}

function inOrderTraversalPrint(root) {
  if (root === null) {
    return
  }

  inOrderTraversalPrint(root.left)
  console.log(root.value)
  inOrderTraversalPrint(root.right)
}

// Example BST with swapped nodes
const root = new TreeNode(6, new TreeNode(3), new TreeNode(8))
root.left.left = new TreeNode(2)
root.left.right = new TreeNode(4)
root.right.right = new TreeNode(7) // This node is swapped with '4'

console.log('BST before repair:')
inOrderTraversalPrint(root)

repairBST(root) // Repair the BST

console.log('BST after repair:')
inOrderTraversalPrint(root)
