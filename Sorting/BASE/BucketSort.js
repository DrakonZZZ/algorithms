// Time Complexity: O(n + k)

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let current = arr[i]
    let j = i - 1
    while (j >= 0 && arr[j] > current) {
      arr[j + 1] = arr[j]
      j = j - 1
    }
    arr[j + 1] = current
  }
  return arr
}

function bucketSort(arr, bucketSize = 5) {
  if (arr.length == 0) {
    return arr
  }

  let minValue = Math.min(...arr)
  let maxValue = Math.max(...arr)

  let bucketCount = Math.floor((maxValue - minValue) / bucketSize) + 1
  let buckets = new Array(bucketCount).fill(null).map(() => [])

  for (let i = 0; i < arr.length; i++) {
    let bucketIdx = Math.floor((arr[i] - minValue) / bucketSize)
    buckets[bucketIdx].push(arr[i])
  }

  arr.length = 0
  for (let i = 0; i < buckets.length; i++) {
    insertionSort(buckets[i])
    arr.push(...buckets[i])
  }

  return arr
}

const arr = [29, 25, 3, 49, 9, 37, 21, 43]
console.log('Original array:', arr)
console.log('Sorted array:', bucketSort(arr))
