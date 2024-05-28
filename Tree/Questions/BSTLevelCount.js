class Tree {
  constructor() {
    this.root = null
  }

  insert(value) {
    const newNode = new Node(value)
    if (!this.root) {
      this.root = newNode
      return
    }

    let current = this.root
    while (true) {
      if (current.value === value) {
        return undefined // No duplicates allowed
      }

      if (value < current.value) {
        if (current.left === null) {
          current.left = newNode
          return
        }
        current = current.left
      } else {
        if (current.right === null) {
          current.right = newNode
          return
        }
        current = current.right
      }
    }
  }

  // Recursive method to calculate the height of the tree
  getHeight(node) {
    if (node === null) {
      return 0 // An empty tree has a height of zero
    }
    const leftHeight = this.getHeight(node.left)
    const rightHeight = this.getHeight(node.right)

    return Math.max(leftHeight, rightHeight) + 1 // +1 for the root node
  }
}

// Example
const tree = new Tree()
tree.insert(10)
tree.insert(5)
tree.insert(15)
tree.insert(3)
tree.insert(7)

const height = tree.getHeight(tree.root) // Result should be 3
console.log('Number of levels:', height)

// BFS approach

function countLevels(node) {
  if (!node) return 0

  const queue = [node]
  let levels = 0

  while (queue.length) {
    const levelSize = queue.length // Number of nodes in the current level
    levels++ // Increment the level counter

    // Process all nodes in the current level
    for (let i = 0; i < levelSize; i++) {
      const current = queue.shift() // Dequeue from the front
      if (current.left) queue.push(current.left) // Enqueue left child
      if (current.right) queue.push(current.right) // Enqueue right child
    }
  }

  return levels // Return the number of levels
}

// Example
const levels = countLevels(tree.root) // Should return 3
console.log('Number of levels:', levels)
