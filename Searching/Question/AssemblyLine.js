function optimalAssemblyLine(a1, a2, t1, t2, e1, e2, x1, x2) {
  const n = a1.length
  const dp1 = new Array(n).fill(0)
  const dp2 = new Array(n).fill(0)

  // Base cases
  dp1[0] = e1 + a1[0]
  dp2[0] = e2 + a2[0]

  // Fill dp arrays
  for (let i = 1; i < n; i++) {
    dp1[i] = Math.min(dp1[i - 1] + a1[i], dp2[i - 1] + t2[i - 1] + a1[i])
    dp2[i] = Math.min(dp2[i - 1] + a2[i], dp1[i - 1] + t1[i - 1] + a2[i])
  }

  // Final result
  const finalResult = Math.min(dp1[n - 1] + x1, dp2[n - 1] + x2)
  return finalResult
}

// Example usage:
const a1 = [4, 5, 3, 2]
const a2 = [2, 10, 1, 4]
const t1 = [0, 7, 4, 5]
const t2 = [0, 9, 2, 8]
const e1 = 10
const e2 = 12
const x1 = 18
const x2 = 7

const result = optimalAssemblyLine(a1, a2, t1, t2, e1, e2, x1, x2)
console.log(result)
