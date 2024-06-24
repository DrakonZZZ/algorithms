function curry(cb) {
  const curriedCb = (...args) => {
    if (args.length === 0) {
      return cb()
    }

    return (...otherArgs) => {
      if (otherArgs.length === 0) {
        return cb(...args)
      }

      return curriedCb(...args, ...otherArgs)
    }
  }

  return curriedCb
}
