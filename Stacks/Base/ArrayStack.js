// insertion O(1), deletion O(1), prepending O(N) aka shift

class Stack {
  constructor() {
    this.items = []
  }

  push(ele) {
    this.items.push(ele)
  }

  pop() {
    if (this.isEmpty()) {
      return 'underflow'
    }
    return this.items.pop()
  }

  peek() {
    return !this.isEmpty() ? this.items[this.items.length - 1] : undefined
  }

  size() {
    return this.items.length
  }

  isEmpty() {
    return this.items.length === 0
  }

  print() {
    console.log(this.items.toString())
  }
}
