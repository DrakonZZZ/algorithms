class TreeNode {
    constructor(value, left = null, right = null) {
      this.value = value;
      this.left = left;
      this.right = right;
    }
  }


function isValidBST(root) {
  return validBST(root, -Infinity, +Infinity)
}

function validBST(node, min, max) {
  if (node == null) {
    return true
  }

  if (node.value <= min || node.value >= max) {
    return false
  }

  return (
    validBST(node.left, min, node.value) &&
    validBST(node.right, node.value, max)
  )
}

const root = new TreeNode(10)
root.left = new TreeNode(5, new TreeNode(2), new TreeNode(7))
root.right = new TreeNode(15, new TreeNode(13), new TreeNode(22))

console.log('Is valid BST:', isValidBST(root))

root.left.right.left = new TreeNode(11)

console.log('Is valid BST:', isValidBST(root))
