// Define the TreeNode class with height property
class TreeNode {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
    this.height = 1 // Default height for a new node
  }
}

// Define the Tree class with insertion, deletion, and height-based operations
class Tree {
  constructor() {
    this.root = null
  }

  // Method to get the height of a given node
  getHeight(node) {
    return node ? node.height : 0
  }

  // Method to update the height of a given node
  updateHeight(node) {
    if (node) {
      node.height =
        Math.max(this.getHeight(node.left), this.getHeight(node.right)) + 1
    }
  }

  // Method to insert a new value into the BST
  insert(value) {
    this.root = this._insertRecursively(this.root, value)
  }

  _insertRecursively(node, value) {
    if (!node) {
      return new TreeNode(value) // Create a new node if the position is empty
    }

    if (value < node.value) {
      node.left = this._insertRecursively(node.left, value) // Insert into the left subtree
    } else if (value > node.value) {
      node.right = this._insertRecursively(node.right, value) // Insert into the right subtree
    }

    // Update height after insertion
    this.updateHeight(node)

    return node // Return the updated node
  }

  // Method to delete a value from the BST
  delete(value) {
    this.root = this._deleteRecursively(this.root, value)
  }

  _deleteRecursively(node, value) {
    if (!node) {
      return null // Node does not exist
    }

    if (value < node.value) {
      node.left = this._deleteRecursively(node.left, value)
    } else if (value > node.value) {
      node.right = this._deleteRecursively(node.right, value)
    } else {
      // Node to be deleted found
      if (node.left === null && node.right === null) {
        return null // No children
      }

      if (node.left === null) {
        return node.right // Only right child
      }

      if (node.right === null) {
        return node.left // Only left child
      }

      // Node with two children, determine if in-order predecessor or successor
      const leftHeight = this.getHeight(node.left)
      const rightHeight = this.getHeight(node.right)

      if (leftHeight >= rightHeight) {
        // Use in-order predecessor (largest node in the left subtree)
        const maxValueNode = this._maxValue(node.left)
        node.value = maxValueNode.value // Replace with predecessor's value
        node.left = this._deleteRecursively(node.left, maxValueNode.value) // Delete predecessor
      } else {
        // Use in-order successor (smallest node in the right subtree)
        const minValueNode = this._minValue(node.right)
        node.value = minValueNode.value // Replace with successor's value
        node.right = this._deleteRecursively(node.right, minValueNode.value) // Delete successor
      }
    }

    // Update height after deletion
    this.updateHeight(node)

    return node // Return the updated node
  }

  _maxValue(node) {
    let current = node
    while (current && current.right) {
      current = current.right // Largest node in the left subtree
    }
    return current
  }

  _minValue(node) {
    let current = node
    while (current && current.left) {
      current = current.left // Smallest node in the right subtree
    }
    return current
  }
}

const tree = new Tree()

// Insertion of values
tree.insert(10)
tree.insert(5)
tree.insert(15)
tree.insert(12)
tree.insert(18)

// Deletion of a node
tree.delete(10)
