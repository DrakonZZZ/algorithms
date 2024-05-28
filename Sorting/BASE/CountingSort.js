function countingSort(arr) {
  if (arr.length === 0) {
    return arr
  }

  const max = Math.max(...arr)

  const count = new Array(max + 1).fill(0)

  for (let num of arr) {
    count[num]++
  }

  const sortedArr = []
  for (let i = 0; i < count.length; i++) {
    while (count[i] > 0) {
      sortedArr.push(i)
      count[i]--
    }
  }

  return sortedArr
}

const unsortedArray = [4, 2, 2, 8, 3, 3, 1]
const sortedArray = countingSort(unsortedArray)
console.log('Sorted array', sortedArray)
