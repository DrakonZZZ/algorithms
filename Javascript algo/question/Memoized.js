function memoize(cb, resolver = null) {
  const cache = new Map()

  function getCacheKey(args) {
    return resolver ? resolver(...args) : JSON.stringify(args)
  }

  const memoized = function (...args) {
    const cacheKey = getCacheKey(args)

    if (cache.has(cacheKey)) {
      return cache.get(cacheKey)
    }

    const output = cb(...args)
    cache.set(cacheKey, output)
    return output
  }

  memoized.clear = function () {
    cache.clear()
  }

  memoized.delete = function (...args) {
    const cacheKey = getCacheKey(args)
    cache.delete(cacheKey)
  }

  memoized.has = function (...args) {
    const cacheKey = getCacheKey(args)
    return cache.has(cacheKey) // Corrected
  }

  return memoized // Corrected
}

// Example usage
function slowFunction(x) {
  console.log('Computing...')
  return x * x
}

const memoizedSlowFunction = memoize(slowFunction)

console.log(memoizedSlowFunction(3)) // "Computing..." and then 9
console.log(memoizedSlowFunction(3)) // No "Computing...", returns cached result: 9
console.log(memoizedSlowFunction(4))
