Promise.race_v1 = function (args) {
  return new Promise((res, rej) => {
    args.forEach((promise) => {
      promise.then(res).catch(rej)
    })
  })
}

Promise.any_v1 = function (args) {
  return new Promise((res, rej) => {
    let failed = 0
    args.forEach((promise) => {
      promise.then(res).catch((_) => {
        failed++
        if (args.length === failed) {
          rej('all promises reject')
        }
      }) 
    })
  })
}

Promise.all_v1 = function (args) {
  return new Promise((res, rej) => {
    const results = []
    let resolvedCount = 0

    args.forEach((promise, idx) => {
      promise
        .then((value) => {
          results[idx] = value
          resolvedCount++
          if (args.length === resolvedCount) {
            res(results)
          }
        })
        .catch(rej)
    })
  })
}

Promise.allSettle_v1 = function (args) {
  return new Promise((res, rej) => {
    const stack = []
    let resolved = 0

    args.forEach((promise, idx) => {
      promise
        .then((value) => {
          stack[idx] = { status: 'fufilled', value }
        })
        .catch((err) => {
          stack[idx] = { status: 'rejected', err }
        })
        .finally(() => {
          resolved++

          if (args.length === resolved) {
            res(stack)
          }
        })
    })
  })
}
