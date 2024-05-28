class Graph {
  constructor(vertices) {
    this.numVertices = vertices
    this.matrix = Array.from({ length: this.numVertices }, () =>
      Array(this.numVertices).fill(0)
    )
  }

  addVertex(v) {
    // Increase the vertex count
    this.numVertices++

    // Add a new row to the adjacency matrix initialized with zeros
    this.matrix.push(Array(this.numVertices - 1).fill(0))

    // Add a new column to each existing row
    for (let i = 0; i < this.numVertices - 1; i++) {
      this.matrix[i].push(0)
    }
  }

  addEdge(v1, v2) {
    if (v1 >= 0 && v1 < this.numVertices && v2 >= 0 && v2 < this.numVertices) {
      this.matrix[v1][v2] = weight
      this.matrix[v2][v1] = weight // For undirected graph
      return true
    }
    return false // Invalid vertices
  }

  removeVertex(v) {
    if (vertex >= 0 && vertex < this.numVertices) {
      // Remove the row corresponding to the vertex
      this.matrix.splice(vertex, 1)

      // Remove the column corresponding to the vertex
      this.matrix.forEach((row) => row.splice(vertex, 1))

      this.numVertices-- // Decrease the vertex count
    }
  }

  removeEdge(v1, v2) {
    if (v1 >= 0 && v1 < this.numVertices && v2 >= 0 && v2 < this.numVertices) {
      this.matrix[v1][v2] = 0
      this.matrix[v2][v1] = 0 // Undirected graph
    }
  }

  printMatrix() {
    for (let m of this.matrix) {
      console.log(m)
    }
  }
}

const graph = new Graph(5)
graph.addEdge(0, 1)
graph.addEdge(0, 2)
graph.addEdge(1, 3)
graph.addEdge(2, 4)
graph.addEdge(3, 4)
graph.printMatrix()

console.log('Removing vertex 1:')
graph.removeVertex(1)
graph.printMatrix()

console.log('Removing edge between vertices 0 and 2:')
graph.removeEdge(0, 2)
graph.printMatrix()
