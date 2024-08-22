class Graph {
  constructor(size) {
    this.size = size
    this.matrix = Array.from({ length: size }, () => Array(size).fill(0))
  }

  addVertex() {
    this.size++

    this.matrix.push(Array(this.size - 1).fill(0))

    for (let i = 0; i < this.size; ++i) {
      this.matrix[i].push(0)
    }
  }

  addEdge(v1, v2) {
    if (v1 >= 0 && v1 < this.size && v2 >= 0 && v2 < this.size) {
      this.matrix[v1][v2] = 1
      this.matrix[v2][v1] = 1
    }
  }

  removeVertex(v) {
    if (v >= 0 && v < this.size) {
      this.matrix.splice(v, 1)

      this.matrix.forEach((r) => r.splice(v, 1))
      this.size--
    }
  }

  removeEdges(v1, v2) {
    if (v1 >= 0 && v1 < this.size && v2 >= 0 && v2 < this.size) {
      this.matrix[v1][v2] = 0
      this.matrix[v2][v1] = 0
    }
  }

  printGraph() {
    console.log('Adjacency Matrix:')
    this.matrix.forEach((row) => console.log(row.join(' ')))
  }
}

const graph = new Graph(3)
graph.addEdge(0, 1)
graph.addEdge(1, 2)
graph.printGraph()

console.log('Adding a new vertex:')
graph.addVertex()
graph.printGraph()

console.log('Removing vertex 1:')
graph.removeVertex(1)
graph.printGraph()
