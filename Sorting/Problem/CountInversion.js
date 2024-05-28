function mergeAndCount(arr, temp, left, mid, right) {
  let i = left // Starting index for left subarray
  let j = mid + 1 // Starting index for right subarray
  let k = left // Starting index to be sorted
  let inversionCount = 0

  // Conditions are checked to ensure that i doesn't exceed mid and j doesn't exceed right
  while (i <= mid && j <= right) {
    if (arr[i] <= arr[j]) {
      temp[k] = arr[i]
      i++
    } else {
      // There are `mid - i + 1` inversions because all elements from `i` to `mid` are greater than `arr[j]`
      temp[k] = arr[j]
      inversionCount += mid - i + 1
      j++
    }
    k++
  }

  // Copy the remaining elements from the left subarray
  while (i <= mid) {
    temp[k] = arr[i]
    i++
    k++
  }

  // Copy the remaining elements from the right subarray
  while (j <= right) {
    temp[k] = arr[j]
    j++
    k++
  }

  // Copy the sorted subarray into the original array
  for (i = left; i <= right; i++) {
    arr[i] = temp[i]
  }

  return inversionCount
}

function mergeSortAndCount(arr, temp, left, right) {
  let inversionCount = 0

  if (left < right) {
    const mid = Math.floor((left + right) / 2)

    // Count inversions in the left subarray
    inversionCount += mergeSortAndCount(arr, temp, left, mid)

    // Count inversions in the right subarray
    inversionCount += mergeSortAndCount(arr, temp, mid + 1, right)

    // Count cross inversions during merge
    inversionCount += mergeAndCount(arr, temp, left, mid, right)
  }

  return inversionCount
}

function countInversions(arr) {
  const n = arr.length
  const temp = new Array(n)
  return mergeSortAndCount(arr, temp, 0, n - 1)
}

// Test case
console.log(countInversions([2, 3, 8, 6, 1]))
