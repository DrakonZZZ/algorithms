function findFirst(nums, target) {
  let left = 0,
    right = nums.length - 1,
    result = -Infinity
  while (left <= right) {
    let mid = Math.floor((left + right) / 2)
    if (nums[mid] === target) {
      result = mid
      right = mid - 1
    } else if (nums[mid] < target) {
      left = mid + 1
    } else {
      right = mid - 1
    }
  }

  return result
}

function findLast(nums, target) {
  let left = 0,
    right = nums.length,
    result = -Infinity

  while (left <= right) {
    let mid = Math.floor((left + right) / 2)

    if (nums[mid] === target) {
      result = mid
      left = mid + 1
    } else if (nums[mid] < target) {
      left = mid + 1
    } else {
      right = mid - 1
    }
  }

  return result
}

function searchRange(nums, target) {
  const first = findFirst(nums, target)
  if (first === -Infinity) return [-1, -1]

  const last = findLast(nums, target)
  return [first, last]
}

const nums = [0, 1, 21, 33, 45, 45, 45, 45, 45, 45, 61, 71, 73]
const target = 45
const result = searchRange(nums, target)
console.log(result)

function findBound(nums, target, findFirst) {
  let left = 0
  let right = nums.length - 1
  let result = -1

  while (left <= right) {
    let mid = Math.floor((left + right) / 2)

    if (nums[mid] === target) {
      result = mid
      if (findFirst) {
        right = mid - 1 // Continue to search on the left side
      } else {
        left = mid + 1 // Continue to search on the right side
      }
    } else if (nums[mid] < target) {
      left = mid + 1
    } else {
      right = mid - 1
    }
  }

  return result
}

function searchRangeCurry(nums, target) {
  const first = findBound(nums, target, true)
  if (first === -1) return [-1, -1]

  const last = findBound(nums, target, false)
  return [first, last]
}

const result2 = searchRangeCurry(nums, target)
console.log(result2)
