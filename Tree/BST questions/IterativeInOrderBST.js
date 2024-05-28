class TreeNode {
  constructor(val = 0, left = null, right = null) {
    this.val = val
    this.left = left
    this.right = right
  }
}

const root = new TreeNode(1)
root.right = new TreeNode(2)
root.right.left = new TreeNode(3)

function iterativeInOrderTraversal(root) {
  const result = []
  const stack = []
  let current = root

  while (current !== null || stack.length) {
    while (current !== null) {
      stack.push(current)
      current = current.left
    }

    current = stack.pop()
    result.push(current.val)

    current = current.right
  }
  return result
}

const result = iterativeInOrderTraversal(root)
console.log(result)
