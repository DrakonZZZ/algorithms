function indexEqualValueSearch(arr, k) {
  let left = 0
  let right = arr.length - 1
  let count = 0
  let result = -1

  while (left <= right) {
    let mid = Math.floor((left + right) / 2)

    if (arr[mid] === mid) {
      count++
      if (count === k) {
        result = mid
        return
      } else if (count < k) {
        left = mid + 1
      }
    } else if (arr[mid] > mid) {
      right = mid - 1
    } else {
      left = mid + 1
    }
  }

  return result
}

const arr = [-10, -5, 0, 3, 4, 5, 5, 9]
const k = 2
const result = indexEqualValueSearch(arr, k)
console.log(result)
