// Time O(N) AND Space O(N)
function isBalanced(bracketString) {
  const stack = []

  const bracketPairs = {
    '(': ')',
    '{': '}',
    '[': ']',
  }

  for (const char of bracketString) {
    if (bracketPairs[char]) {
      stack.push(char)
    } else {
      if (stack.length === 0) {
        return false
      }

      const lastOpenBracket = stack.pop()
      if (bracketPairs[lastOpenBracket] !== char) {
        return false
      }
    }
  }

  return stack.length === 0
}

console.log(isBalanced('{[()]}')) // true, balanced
console.log(isBalanced('{[(])}')) // false, not balanced
console.log(isBalanced('{[}')) // false, not balanced
