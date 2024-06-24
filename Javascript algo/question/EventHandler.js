class EventTarget {
  constructor() {
    this.listner = {}
  }

  addEventListener(name, cb) {
    if (!this.listner[name]) {
      this.listner[name] = new Set()
    }
    this.listner[name].add(cb) // Always add the callback
  }

  removeEventListener(name, cb) {
    return this.listner[name]?.delete(cb)
  }

  dispatchEvent(name, ...args) {
    this.listner[name]?.forEach((cb) => {
      cb(...args)
    })
  }
}
const myEventTarget = new EventTarget()

const onFoo = () => console.log('Foo event triggered!')
const onBar = (message) =>
  console.log(`Bar event triggered with message: ${message}`)

// Add event listeners
myEventTarget.addEventListener('foo', onFoo)
myEventTarget.addEventListener('bar', onBar)

// Dispatch events
myEventTarget.dispatchEvent('foo') // Should log: "Foo event triggered!"
myEventTarget.dispatchEvent('bar', 'Hello!') // Should log: "Bar event triggered with message: Hello!"

// Remove event listener and try again
myEventTarget.removeEventListener('foo', onFoo)
myEventTarget.dispatchEvent('foo')
