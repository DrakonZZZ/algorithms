function threeNumberSort(arr, order) {
  const firstValue = order[0]
  const secondValue = order[1]
  const thirdValue = order[2]

  let firstIdx = 0
  let secondIdx = 0
  let thirdIdx = arr.length - 1

  while (secondIdx <= thirdIdx) {
    if (arr[secondIdx] === firstValue) {
      ;[arr[firstIdx], arr[secondIdx]] = [arr[secondIdx], arr[firstIdx]]
      firstIdx++
      secondIdx++
    } else if (arr[secondIdx] === secondIdx) {
      secondIdx++
    } else {
      ;[arr[secondIdx], arr[thirdIdx]] = [arr[thirdIdx], arr[secondIdx]]
      thirdIdx--
    }
  }

  return arr
}

const arr = [5, 3, 5, 4, 3, 3, 4, 4, 5]
const order = [3, 4, 5]
console.log('Unsorted array:', arr)
const sortedArr = threeNumberSort(arr, order)
console.log('sorted array', sortedArr)
