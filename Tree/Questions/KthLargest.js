class TreeNode {
  constructor(value, left = null, right = null) {
    this.value = value
    this.left = left
    this.right = right
  }
}

class BST {
  constructor() {
    this.root = null
  }

  insert(value) {
    const newNode = new TreeNode(value)
    if (!this.root) {
      this.root = newNode
      return
    }

    let current = this.root
    while (true) {
      if (value === current.value) {
        return
      }

      if (value < current.value) {
        if (!current.left) {
          current.left = newNode
          break
        }
        current = current.left
      } else {
        if (!current.right) {
          current.right = newNode
          break
        }
        current = current.right
      }
    }
  }
}

function findKthLargestValue(roor, k) {
  let count = 0
  let result = null

  function reverseInOrder(node) {
    if (node === null || count >= k) {
      return
    }

    reverseInOrder(node.right)

    count++
    if (count === k) {
      result = node.value
      return
    }

    reverseInOrder(node.left)
  }

  reverseInOrder(root)
  return result
}

const bst = new BST()
const values = [15, 10, 20, 8, 12, 17, 25]
values.forEach((v) => bst.insert(v))

const k = 3
const kthLargest = findKthLargestValue(bst.root, k)
console.log(`${k}rd largest value is:`, kthLargest)
