// O(n) time | O(1) space

// function hasSingleCycle(arr) {
//   let numElementVisited = 0
//   let currentIdx = 0

//   while (numElementVisited < arr.length) {
//     if (numElementVisited > 0 && currentIdx === 0) {
//       return false
//     }
//     numElementVisited++
//     currentIdx = getNextIdx(arr, currentIdx)
//   }
//   return currentIdx === 0
// }

// function getNextIdx(arr, idx) {
//   const jump = arr[idx]
//   const nextIdx = (idx + jump) % arr.length
//   return nextIdx >= 0 ? nextIdx : nextIdx + arr.length
// }

function hasSingleCycle(arr) {
  let visitedCount = 0
  let currentIdx = 0

  while (visitedCount < arr.length) {
    // If we return to the start before visiting all elements, it's not a single cycle
    if (visitedCount > 0 && currentIdx === 0) {
      return false
    }
    visitedCount++
    currentIdx = getNextIdx(arr, currentIdx)
  }
  return currentIdx === 0
}

function getNextIdx(arr, idx) {
  const jump = arr[idx]
  let nextIdx = (idx + jump) % arr.length
  return nextIdx < 0 ? (nextIdx += arr.length) : nextIdx
}

const arr = [2, 3, 1, -4, -4, 2]

console.log(hasSingleCycle(arr))
