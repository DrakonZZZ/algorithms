function kadane(arr) {
  if (arr.length === 0) {
    return null
  }

  let currentMax = arr[0]
  let globalMax = arr[0]

  for (let i = 1; i < arr.length; i++) {
    const value = arr[i]

    currentMax = Math.max(value, currentMax + value)

    if (currentMax > globalMax) {
      globalMax = currentMax
    }
  }

}

const arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
const maxSubarraySum = kadane(arr)
console.log('Maximum subarray sum:', maxSubarraySum)
