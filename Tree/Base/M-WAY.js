class Node {
  constructor(value) {
    this.value = value
    this.children = []
  }
}

class MwayTree {
  constructor(n) {
    this.root = null
    // maximum number of children
    this.n = n
  }

  insert(value, parentValue = null) {
    const newNode = new Node(value)
    if (!this.root) {
      this.root = newNode
      return this
    }

    let queue = [this.root]
    while (queue.length) {
      let current = queue.shift()
      if (current.value === parentValue) {
        if (current.children.length < this.n) {
          current.children.push(newNode)
          return this
        }
        console.log(`parent already have ${this.n} children`)
      }
      queue.push(...current.children)
    }

    return false
  }

  find(value) {
    if (!this.root) return null

    let queue = [this.root]
    while (queue.length) {
      let current = queue.shift()

      if (current.value === value) {
        return current
      }

      queue.push(...current.children)
    }

    return false
  }
}

const tree = new Mway(4)

tree.insert(1)
tree.insert(2, 1)
tree.insert(3, 1)
tree.insert(4, 1)
tree.insert(5, 2)

console.log(tree.find(3))
console.log(tree.find(5))
console.log(tree.find(10))
