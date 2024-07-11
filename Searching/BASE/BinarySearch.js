// time complexity O(logn)

function binarySearchIterative(arr, target) {
  let left = 0
  let right = arr.length - 1

  while (left <= right) {
    let mid = Math.floor((left + right) / 2)

    if (arr[mid] === target) {
      return mid
    }

    if (arr[mid] < target) {
      left = mid + 1
    } else {
      right = mid - 1
    }
  }

  return -1
}

function binarySearchRecursive(arr, target, left = 0, right = arr.length - 1) {
  if (left > right) {
    return -1
  }
  const mid = Math.floor((left + right) / 2)

  if (arr[mid] === target) {
    return mid // target found at index mid
  }

  if (arr[mid] < target) {
    return binarySearchRecursive(arr, target, mid + 1, right) // search in the right half
  } else {
    return binarySearchRecursive(arr, target, left, mid - 1) // search in the left half
  }
}

const arr = [2, 3, 4, 10, 40]
const target = 10

const resultIterative = binarySearchIterative(arr, target)
const resultRecursive = binarySearchRecursive(arr, target)

if (resultIterative !== -1) {
  console.log(
    `Target found at index ${resultIterative} using iterative binary search.`
  )
} else {
  console.log('Target not found using iterative binary search.')
}

if (resultRecursive !== -1) {
  console.log(
    `Target found at index ${resultRecursive} using recursive binary search.`
  )
} else {
  console.log('Target not found using recursive binary search.')
}
