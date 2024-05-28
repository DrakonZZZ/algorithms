class Node {
  constructor(value) {
    this.value = value
    this.right = null
    this.left = null
  }
}

class BST {
  constructor() {
    this.root = null
  }

  insert(value) {
    const newNode = new Node(value)
    if (!this.root) {
      this.root = newNode
    } else {
      let current = this.root
      while (true) {
        if (current.value === value) {
          return // Avoid duplicates
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
}

function createTree(arr, start, end) {
  if (arr.length === 0) {
    return null
  }

  function buildTree(arr, start, end) {
    if (start > end) {
      return null
    }

    const midIdx = Math.floor((start + end) / 2)
    const bst = new BST()
    bst.insert(arr[midIdx]) // Insert middle element

    bst.root.left = buildTree(arr, start, midIdx - 1)
    bst.root.right = buildTree(arr, midIdx + 1, end)

    return bst.root // Return the root node for consistency
  }

  return buildTree(arr, 0, arr.length - 1)
}

const arr = [1, 2, 5, 7, 10, 13, 14, 15, 22]
console.log(createTree(arr))
