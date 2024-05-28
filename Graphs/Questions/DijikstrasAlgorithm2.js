class MinHeap {
    constructor() {
      this.heap = [];
      this.nodeIndexMap = new Map(); // Maps nodes to their positions in the heap
    }

    swap(i, j) {
      const temp = this.heap[i];
      this.heap[i] = this.heap[j];
      this.heap[j] = temp;

      this.nodeIndexMap.set(this.heap[i].node, i);
      this.nodeIndexMap.set(this.heap[j].node, j);
    }

    parentIndex(i) {
      return Math.floor((i - 1) / 2);
    }

    leftChildIndex(i) {
      return 2 * i + 1;
    }

    rightChildIndex(i) {
      return 2 * i + 2;
    }

    insert(node, priority) {
      this.heap.push({ node, priority });
      this.nodeIndexMap.set(node, this.heap.length - 1);
      this.heapifyUp(this.heap.length - 1);
    }

    heapifyUp(index) {
      while (index > 0 && this.heap[index].priority < this.heap[this.parentIndex(index)].priority) {
        this.swap(index, this.parentIndex(index));
        index = this.parentIndex(index);
      }
    }

    extractMin() {
      if (this.heap.length === 0) {
        return null;
      }

      const min = this.heap[0];
      if (this.heap.length === 1) {
        this.heap.pop();
        this.nodeIndexMap.delete(min.node);
        return min;
      }

      this.heap[0] = this.heap.pop();
      this.nodeIndexMap.set(this.heap[0].node, 0);
      this.nodeIndexMap.delete(min.node);
      this.heapifyDown(0);

      return min;
    }

    heapifyDown(index) {
      while (true) {
        const leftIndex = this.leftChildIndex(index);
        const rightIndex = this.rightChildIndex(index);
        let smallest = index;

        if (
          leftIndex < this.heap.length &&
          this.heap[leftIndex].priority < this.heap[smallest].priority
        ) {
          smallest = leftIndex;
        }

        if (
          rightIndex < this.heap.length &&
          this.heap[rightIndex].priority < this.heap[smallest].priority
        ) {
          smallest = rightIndex;
        }

        if (smallest !== index) {
          this.swap(index, smallest);
          index = smallest;
        } else {
          break;
        }
      }
    }

    isEmpty() {
      return this.heap.length === 0;
    }

    // Decrease the priority of a given node
    decreasePriority(node, newPriority) {
      const index = this.nodeIndexMap.get(node);

      if (index !== undefined && newPriority < this.heap[index].priority) {
        this.heap[index].priority = newPriority;
        this.heapifyUp(index);
      }
    }
  }

  function dijkstra(n, edges, start) {
    // Build the graph as an adjacency list
    const graph = Array.from({ length: n + 1 }, () => []);
    for (const [u, v, w] of edges) {
      // Since the graph is undirected, add edges in both directions
      graph[u].push({ node: v, weight: w });
      graph[v].push({ node: u, weight: w });
    }

    const distances = Array(n + 1).fill(Infinity);
    distances[start] = 0;

    const pq = new MinHeap();
    pq.insert(start, 0);

    while (!pq.isEmpty()) {
      const { node: current } = pq.extractMin();

      for (const { node: neighbor, weight } of graph[current]) {
        const altDistance = distances[current] + weight;

        if (altDistance < distances[neighbor]) {
          distances[neighbor] = altDistance;
          pq.decreasePriority(neighbor, altDistance);
        }
      }
    }

    // Convert Infinity to -1 for unreachable nodes
    for (let i = 1; i <= n; i++) {
      if (distances[i] === Infinity) {
        distances[i] = -1;
      }
    }

    return distances;
  }

  // Main function to solve the problem
  function shortestReach(n, edges, s) {
    const distances = dijkstra(n, edges, s);

    // Return distances excluding the start node, in ascending order
    const result = [];
    for (let i = 1; i <= n; i++) {
      if (i !== s) {
        result.push(distances[i]);
      }
    }

    return result;
  }

  // Test cases
  const t = 1;
  const cases = [
    {
      n: 4,
      m: 4,
      edges: [
        [1, 2, 24],
        [1, 4, 20],
        [3, 1, 3],
        [4, 3, 12],
      ],
      s: 1,
    },
  ];

  cases.forEach(({ n, m, edges, s }) => {
    const result = shortestReach(n, edges, s);
    console.log(result.join(" "));
  });

  // Expected output for the given test case: 24 3 15