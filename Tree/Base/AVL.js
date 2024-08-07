// to have a balanced tree and not form a linked list like structor and search heavy

class Node {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
    this.height = 1
  }
}

class AVLTree {
  constructor() {
    this.root = null
  }

  height(node) {
    return node ? node.height : 0
  }

  balanceFactor(node) {
    return node ? this.height(node.left) - this.height(node.right) : 0
  }

  insert(node, value) {
    if (!node) return new Node(value)

    if (value < node.value) {
      node.left = this.insert(node.left, value)
    }

    if (value > node.value) {
      node.right = this.insert(node.right, value)
    }

    // logN + 1;
    node.height = 1 + Math.max(this.height(node.left), this.height(node.right))

    const balance = this.balanceFactor(node)

    if (balance > 1 && value < node.left.value) {
      return this.rightRotation(node)
    }

    if (balance < -1 && value > node.right.value) {
      return this.leftRotate(node)
    }

    if (balance > 1 && value > node.left.value) {
      node.left = this.leftRotation(node.left)
      return this.rightRotation(node)
    }

    if (balance < -1 && value < node.right.value) {
      node.right = this.rightRotation(node.right)
      return this.leftRotation(node)
    }
  }

  rightRotation(x) {
    const x = y.left
    const T2 = x.right

    x.right = y
    y.left = T2

    y.height = Math.max(this.height(y.left), this.height(y.right)) + 1
    x.height = Math.max(this.height(x.left), this.getHeight(x.right)) + 1

    return x
  }

  leftRotation(x) {
    const y = x.right
    const T2 = y.left

    y.left = x
    x.right = T2

    x.height = Math.max(this.height(x.left), this.height(x.right)) + 1
    y.height = Math.max(this.height(y.left), this.height(y.right)) + 1

    return y
  }
}

const avl = new AVLTree()
avl.insert(10)
avl.insert(20)
avl.insert(30)
avl.insert(40)
avl.insert(50)
avl.insert(25)
