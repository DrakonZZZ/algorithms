//  time Complexity :𝑂(rootOf n)

function jumpSearch(arr, target) {
  let n = arr.length
  let step = Math.floor(Math.sqrt(n))
  let prev = 0

  while (arr[Math.min(step, n) - 1] < target) {
    prev = step
    step += Math.floor(Math.sqrt(n))
    if (prev >= n) return -1
  }

  for (let i = prev; i < Math.min(step, n); i++) {
    if (arr[i] === target) {
      return i
    }
  }

  return -1
}

const arr = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19]
const target = 11
console.log(jumpSearch(arr, target))
