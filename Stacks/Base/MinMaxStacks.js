class MinMaxStack {
  constructor() {
    this.mainStack = [] // Main stack for regular operations
    this.minStack = [] // Stack to track the minimum values
    this.maxStack = [] // Stack to track the maximum values
  }

  // Push an element onto the stack
  push(value) {
    this.mainStack.push(value)

    // Update the minStack with the minimum of the current value and the current minimum
    if (this.minStack.length === 0) {
      this.minStack.push(value)
    } else {
      this.minStack.push(
        Math.min(value, this.minStack[this.minStack.length - 1])
      )
    }

    // Update the maxStack with the maximum of the current value and the current maximum
    if (this.maxStack.length === 0) {
      this.maxStack.push(value)
    } else {
      this.maxStack.push(
        Math.max(value, this.maxStack[this.maxStack.length - 1])
      )
    }
  }

  // Pop an element off the stack
  pop() {
    if (this.mainStack.length === 0) {
      throw new Error('Stack is empty')
    }

    // Pop from all stacks to maintain consistency
    this.minStack.pop()
    this.maxStack.pop()
    return this.mainStack.pop()
  }

  // Peek the top element on the stack
  peek() {
    if (this.mainStack.length === 0) {
      throw new Error('Stack is empty')
    }
    return this.mainStack[this.mainStack.length - 1]
  }

  // Get the minimum value in the stack
  getMin() {
    if (this.minStack.length === 0) {
      throw new Error('Stack is empty')
    }
    return this.minStack[this.minStack.length - 1]
  }

  // Get the maximum value in the stack
  getMax() {
    if (this.maxStack.length === 0) {
      throw new Error('Stack is empty')
    }
    return this.maxStack[this.maxStack.length - 1]
  }
}

// Example usage:
const stack = new MinMaxStack()
stack.push(5)
stack.push(2)
stack.push(8)
stack.push(1)

console.log('Min:', stack.getMin()) // Output: 1
console.log('Max:', stack.getMax()) // Output: 8

stack.pop() // Pops 1
console.log('Min after pop:', stack.getMin()) // Output: 2

stack.pop() // Pops 8
console.log('Max after pop:', stack.getMax())
