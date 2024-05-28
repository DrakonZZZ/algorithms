function shiftedBinarySearch(arr, target) {
  let left = 0
  let right = arr.length - 1

  while (left <= right) {
    let mid = Math.floor((left + right) / 2)

    if (arr[mid] === target) {
      return mid
    }

    if (arr[left] <= arr[mid]) {
      if (target >= arr[left] && target < arr[mid]) {
        right = mid - 1
      } else {
        left = mid + 1
      }
    } else {
      if (target > arr[mid] && target <= arr[right]) {
        left = mid + 1
      } else {
        right = mid - 1
      }
    }
  }

  return -1
}

const arr = [13, 18, 25, 2, 8, 10]
const target = 8
const result = shiftedBinarySearch(arr, target)
console.log(result)
