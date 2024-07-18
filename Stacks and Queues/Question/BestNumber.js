function removeKDigits(num, k) {
  const stack = []
  let digitsToRemove = k

  for (const digit of num) {
    while (
      stack.length > 0 &&
      digitsToRemove > 0 &&
      stack[stack.length - 1] < digit
    ) {
      stack.pop()
      digitsToRemove--
    }

    stack.push(digit)
  }

  while (digitsToRemove > 0 && stack.length > 0) {
    stack.pop()
    digitsToRemove--
  }

  return stack.join('')
}

const num = '1432219'
const k = 3

console.log(removeKDigits(num, k))
