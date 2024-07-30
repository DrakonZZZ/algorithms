// Block queue used for keeping process order in queue

class BlockQueue {
  constructor(maxSize = 10) {
    this.queue = []
    this.waiting = []
    this.maxSize = maxSize
  }

  enqueue(item) {
    if (this.queue.length < this.maxSize) {
      this.queue.push(item)
      this.triggerDequeue()
    } else {
      return new Promise((res) => {
        this.waiting.push(res)
      }).then(() => this.queue.push(item))
    }
  }

  dequeue() {
    if (this.queue.length > 0) {
      const item = this.queue.shift()
      this.triggerEnqueue()
      return item
    } else {
      return new Promise((res) => {
        this.waiting.push(res)
      }).then(() => {
        this.queue.shift()
      })
    }
  }

  triggerEnqueue() {
    if (this.waiting.length > 0) {
      const resolve = this.waiting.shift()
      resolve()
    }
  }

  triggerDequeue() {
    if (this.waiting.length > 0) {
      const resolve = this.waiting.shift()
      resolve()
    }
  }
}


const testBlockQueuing = async(){
    const blockQueue = new BlockQueue(5)

    await blockQueue.enqueue(1);
    await blockQueue.enqueue(2);
    await blockQueue.enqueue(3);

    console.log(await blockQueue.dequeue());
    console.log(await blockQueue.dequeue());

    await blockQueue.enqueue(4);
    await blockQueue.enqueue(5);
    await blockQueue.enqueue(6);
}

testBlockQueuing()