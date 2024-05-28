function nextGreaterElement(nums) {
  const result = Array(nums.length).fill(-1) // Initialize the result array with -1 (no greater element)
  const stack = [] // This will hold indices of elements

  // Traverse the array from right to left
  for (let i = nums.length - 1; i >= 0; i--) {
    const current = nums[i]

    // Pop from the stack while the top of the stack is less than or equal to the current element
    while (stack.length > 0 && nums[stack[stack.length - 1]] <= current) {
      stack.pop() // Remove smaller elements from the stack
    }

    // If stack is not empty, the top is the next greater element
    if (stack.length > 0) {
      result[i] = nums[stack[stack.length - 1]]
    }

    // Push the current index onto the stack
    stack.push(i)
  }

  return result
}

// Example usage
const nums = [4, 5, 2, 25, 7, 8, 6]
const result = nextGreaterElement(nums)

console.log(result)
