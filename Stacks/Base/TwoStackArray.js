class TwoStacks {
  constructor(size) {
    this.array = new Array(size)
    this.top1 = -1
    this.top2 = size
    this.size = size
  }

  push1(value) {
    if (this.top1 < this.top2 - 1) {
      this.top1++
      this.array[this.top1] = value
    } else {
      return 'stack 1 overflow'
    }
  }

  push2(value) {
    if (this.top1 < this.top2 - 1) {
      this.top2--
      this.array[this.top2] = value
    } else {
      return 'stack 2 overflow'
    }
  }

  pop1() {
    if (this.top1 > 0) {
      const removeValue = this.array[this.top1]
      this.array[this.top1] = undefined
      this.top1--
      return removeValue
    } else {
      console.log('Stack 1 Underflow')
    }
  }

  pop2() {
    if (this.top2 < this.size) {
      const poppedValue = this.array[this.top2]
      this.array[this.top2] = undefined
      this.top2++
      return poppedValue
    } else {
      console.log('Stack 2 Underflow')
    }
  }

  peek(stackType) {
    if (stackType === 'stack1') {
      return this.top1 >= 0 ? this.array[this.top1] : undefined
    } else if (stackType === 'stack2') {
      return this.top2 < this.size ? this.array[this.top2] : undefined
    } else {
      console.log('Invalid stack type')
      return undefined
    }
  }

  print() {
    console.log('Stack 1:', this.array.slice(0, this.top1 + 1))
    console.log('Stack 2:', this.array.slice(this.top2, this.capacity))
  }
}

const twoStacks = new TwoStacks(5)
twoStacks.push1(1)
twoStacks.push2(2)
twoStacks.push1(3)
twoStacks.push2(4)
twoStacks.push1(5)

console.log('Stack 1 peek:', twoStacks.peek('stack1'))
console.log('Stack 2 peek:', twoStacks.peek('stack2'))

console.log('Popped from Stack 1:', twoStacks.pop1())
console.log('Popped from Stack 2:', twoStacks.pop2())
