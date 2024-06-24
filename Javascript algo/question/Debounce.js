function debounce(cb, delay, immediate = false) {
  let timerId
  return function (...args) {
    clearTimeout(timerId)

    const shouldCallImmediate = timerId == null && immediate
    if (shouldCallImmediate) {
      cb.apply(this, args)
    }

    timerId = setTimeout(() => {
      if (!immediate) {
        cb.apply(this, args)
      }
      timerId = null
    }, delay)
  }
}
