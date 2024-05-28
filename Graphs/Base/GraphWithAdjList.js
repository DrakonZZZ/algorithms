class Graph {
  #adjacenylist = {}

  addVertex(v) {
    if (!this.#adjacenylist[v]) {
      this.#adjacenylist[v] = []
      return true
    }
    return false
  }

  addEdge(v1, v2) {
    if (this.#adjacenylist[v1] && this.#adjacenylist[v2]) {
      this.#adjacenylist[v1].push(v2)
      this.#adjacenylist[v2].push(v1)
      return true
    }

    return false
  }

  removeEdge(v1, v2) {
    if (this.#adjacenylist[v1] && this.#adjacenylist[v2]) {
      this.#adjacenylist[v1] = this.#adjacenylist[v1].filter((v) => v !== v2)
      this.#adjacenylist[v2] = this.#adjacenylist[v2].filter((v) => v !== v1)
      return true
    }
    return false
  }

  removeVertex(v) {
    if (this.#adjacenylist[v]) {
      const queue = this.#adjacenylist[v]
      while (queue.length) {
        let current = queue.pop()
        this.removeEdges(current, v)
      }
      delete this.#adjacenylist[v]
      return this
    }
  }

  printGraph() {
    console.log(this.#adjacenylist)
  }

  getGraph() {
    return { ...this.#adjacenylist }
  }
}

module.exports = Graph
