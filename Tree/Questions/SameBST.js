// o(n^2) time | o(n^2) space

function isSameBST(arr1, arr2) {
  if (arr1.length === 0 && arr2.length === 0) {
    return true
  }

  if (arr1[0] !== arr2[0]) {
    return false
  }

  if (arr1.length !== arr2.length) {
    return false
  }

  const rootValue = arr1[0]

  const left1 = arr1.filter((x) => x < rootValue)
  const left2 = arr2.filter((x) => x < rootValue)

  const right1 = arr1.filter((x) => x > rootValue)
  const right2 = arr2.filter((x) => x > rootValue)

  return isSameBST(left1, left2) && isSameBST(right1, right2)
}

const preOrder1 = [10, 15, 8, 12, 94, 81, 5, 2, 11]
const preOrder2 = [10, 8, 5, 15, 2, 12, 11, 94, 81]

console.log('Are they the same BST?', isSameBST(preOrder1, preOrder2))

function isSameBST2(
  preOrder1,
  preOrder2,
  idx1 = { current: 0 },
  idx2 = { current: 0 },
  min = -Infinity,
  max = Infinity
) {
  if (idx1.current >= preOrder1.length || idx2.current >= preOrder2.length) {
    return (
      idx1.current === preOrder1.length && idx2.current === preOrder2.length
    )
  }

  const value1 = preOrder1[idx1.current]
  const value2 = preOrder2[idx2.current]

  if (value1 < min || value1 > max || value2 < min || value2 > max) {
    return false
  }

  if (value1 !== value2) {
    return false
  }

  idx1.current++
  idx2.current++

  return (
    isSameBST(preOrder1, preOrder2, idx1, idx2, min, value1) && // Left subtree
    isSameBST(preOrder1, preOrder2, idx1, idx2, value1, max) // Right subtree
  )
}

console.log('Are they the same BST?', isSameBST2(preOrder1, preOrder2))
