// time complexity O(logn)

function exponentialSearch(arr, target) {
  if (arr.length === 0) return null
  if (arr[0] === target) return 0

  let i = 1
  let n = arr.length

  while (i < n && arr[i] <= target) {
    i *= 2
  }

  return binarySearh(arr.slice(i / 2, Math.min(i, n)), target)
}

function binarySearh(arr, target) {
  if (arr.length === 0) return null

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
