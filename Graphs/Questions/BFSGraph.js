const Graph = require('../Base/GraphWithAdjList')
const graph = new Graph()

function BFS(adjList, start) {
  const queue = [start];     // Initialize the queue with the start node
  const result = [];         // Store the order of traversal
  const visited = new Set(); // To keep track of visited nodes

  visited.add(start);        // Mark the start node as visited

  while (queue.length) {
    const current = queue.shift(); // Dequeue from the front of the queue
    result.push(current);          // Process the current node

    for (let neighbor of adjList[current]) {  // Loop through neighbors
      if (!visited.has(neighbor)) {           // If neighbor is not visited
        visited.add(neighbor);                // Mark as visited
        queue.push(neighbor);                 // Enqueue the neighbor
      }
    }
  }

  return result;  // Return the BFS traversal order
}
graph.addVertex('A')
graph.addVertex('B')
graph.addVertex('C')
graph.addVertex('D')

graph.addEdge('A', 'B')
graph.addEdge('A', 'C')
graph.addEdge('B', 'D')
graph.addEdge('C', 'D')

const adjacenyList = graph.getGraph()
const start = 'B'
const bfsResult = BFS(adjacenyList, start)
console.log(`BFS traversal from ${start}: ${bfsResult}`)
