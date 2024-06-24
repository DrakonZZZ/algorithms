const State = {
  PENDING: 'pending',
  FULFILLED: 'fulfilled',
  REJECTED: 'rejected',
}

class CustomPromise {
  #state = State.PENDING
  #value = null
  #fulfilledCBs = []
  #rejectedCBs = []

  constructor(executeFunction) {
    try {
      executeFunction(
        (value) => this.#resolve(value),
        (error) => this.#reject(error)
      )
    } catch (error) {
      this.#reject(error)
    }
  }

  then(onFulfilled, onRejected) {
    return new Promise((res, rej) => {
      const fulfillCB = () => {
        if (!onFulfilled) return res(this.#value)
        queueMicrotask(() => {
          try {
            const value = onFulfilled(this.#value)
            res(value)
          } catch (error) {
            rej(error)
          }
        })
      }

      const rejectedCB = () => {
        if (!onRejected) return rej(this.#value)
        queueMicrotask(() => {
          try {
            const value = onRejected(this.#value)
            res(value)
          } catch (error) {
            rej(error)
          }
        })
      }

      switch (this.#state) {
        case State.PENDING:
          this.#fulfilledCBs.push(fulfillCB)
          this.#rejectedCBs.push(rejectedCB)
          break
        case State.FULFILLED:
          fulfillCB()
          break
        case State.REJECTED:
          rejectedCB()
          break
        default:
          throw new Error('Unexpected promise state')
      }
    })
  }

  #resolve(value) {
    if (this.#state !== State.PENDING) return
    this.#state = State.FULFILLED
    this.#value = value
    this.#fulfilledCBs.forEach((cb) => cb())
    this.#fulfilledCBs = []
  }

  #reject(error) {
    if (this.#state !== State.PENDING) return
    this.#state = State.REJECTED
    this.#value = error
    this.#rejectedCBs.forEach((cb) => cb())
    this.#rejectedCBs = []
  }

  catch(onRejected) {
    return this.then(null, onRejected)
  }

  get currentState() {
    return this.#state
  }

  get currentValue() {
    return this.#value
  }
}

new CustomPromise((res, rej) => {
  res(10)
}).then((value) => console.log(value * 2))
