function insertInSortedOrder(stack, element) {
  if (stack.length === 0 || stack[stack.length - 1] <= element) {
    stack.push(element)
    return
  }

  const top = stack.pop()
  insertInSortedOrder(stack, element)
  stack.push(top)
}

function sortStack(stack) {
  if (stack.length === 0) return

  const top = stack.pop()

  sortStack(stack)

  insertInSortedOrder(stack, top)
}

const stack = [3, 1, 4, 2]
sortStack(stack)
console.log(stack)
