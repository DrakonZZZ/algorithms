class Node {
  constructor(value, left = null, right = null) {
    this.value = value
    this.left = left
    this.right = right
  }
}

class ExpressionTree {
  evaluate(node) {
    if (!node) return 0

    if (!node.left && !node.right) return parseFloat(node.value)

    const left = this.evaluate(node.left)
    const right = this.evaluate(node.right)

    if (node.value === '+') {
      return left + right
    } else if (node.value === '-') {
      return left - right
    } else if (node.value === '*') {
      return left * right
    }

    console.log('not a valid expression')
  }
}

const tree = new ExpressionTree()

const root = new Node(
  '*',
  new Node('+', new Node('3'), new Node('5')),
  new Node('-', new Node('2'), new Node('8'))
)

console.log(tree.evaluate(root))
