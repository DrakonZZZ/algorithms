class FibonacciHeapNode {
  constructor(value) {
    this.value = value // the value stored in the node
    this.degree = 0 // the number of children
    this.child = null // the head of the circular doubly linked list of children
    this.left = this // the left neighbor in the root list
    this.right = this // the right neighbor in the root list
    this.parent = null // the parent node
    this.mark = false // whether this node has lost a child since it became a child of its current parent
  }
}

class FibonacciHeap {
  constructor() {
    this.min = null // the node with the minimum value in the heap
    this.rootList = null // the head of the circular doubly linked list of root nodes
    this.nodeCount = 0 // the total number of nodes in the heap
  }

  insert(value) {
    const newNode = new FibonacciHeapNode(value)
    this.rootList = this._mergeLists(this.rootList, newNode) // insert into the root list
    if (!this.min || newNode.value < this.min.value) {
      this.min = newNode // update the minimum node
    }
    this.nodeCount++ // increment the node count
    return newNode // return the inserted node for reference
  }

  extractMin() {
    const minNode = this.min // get the minimum node
    if (!minNode) {
      return null // if there is no minimum node, return null
    }

    // add all children of the minimum node to the root list
    if (minNode.child) {
      let child = minNode.child
      do {
        child.parent = null // reset the parent reference
        child = child.right
      } while (child !== minNode.child)

      this.rootList = this._mergeLists(this.rootList, minNode.child) // merge the child list into the root list
    }

    // remove the minimum node from the root list
    this.rootList = this._removeNodeFromList(this.rootList, minNode)
    this.nodeCount-- // decrement the node count

    if (this.nodeCount === 0) {
      this.min = null // if the heap is empty, reset the minimum node
    } else {
      this.min = this.rootList // reset the minimum node to the new root list head
      this._consolidate() // consolidate the trees to maintain the heap property
    }

    return minNode.value // return the minimum node's value
  }

  decreaseKey(node, newValue) {
    if (newValue > node.value) {
      throw new Error('New value is greater than the current value')
    }

    node.value = newValue // update the node's value

    const parent = node.parent
    if (parent && node.value < parent.value) {
      this._cut(node, parent) // cut the node from its parent and add it to the root list
      this._cascadingCut(parent) // perform cascading cuts if necessary
    }

    if (node.value < this.min.value) {
      this.min = node // update the minimum node if the decreased value is smaller
    }
  }

  delete(node) {
    this.decreaseKey(node, -Infinity) // decrease the node's value to negative infinity
    this.extractMin() // extract the minimum node, which is now the node to be deleted
  }

  _mergeLists(list1, list2) {
    if (!list1) {
      return list2 // if the first list is empty, return the second list
    }
    if (!list2) {
      return list1 // if the second list is empty, return the first list
    }

    // merge the two circular doubly linked lists
    const list1Right = list1.right
    const list2Left = list2.left

    list1.right = list2 // connect list1's right to list2
    list2.left = list1 // connect list2's left to list1

    list1Right.left = list2Left // connect list1's original right to list2's left
    list2Left.right = list1Right // connect list2's original left to list1's original right

    return list1 // return the head of the merged list
  }

  _removeNodeFromList(list, node) {
    if (node === node.right) {
      return null // if the node is the only node in the list, return null
    }

    node.left.right = node.right // update the left neighbor's right reference
    node.right.left = node.left // update the right neighbor's left reference

    return node.right // return the new head of the list
  }

  _cut(node, parent) {
    // remove the node from its parent's child list
    parent.child = this._removeNodeFromList(parent.child, node)

    parent.degree-- // decrement the parent's degree

    // add the cut node to the root list
    this.rootList = this._mergeLists(this.rootList, node)

    node.parent = null // reset the node's parent reference
    node.mark = false // reset the node's mark
  }

  _cascadingCut(node) {
    const parent = node.parent
    if (!parent) {
      return // if there's no parent, we're done
    }

    if (!node.mark) {
      node.mark = true // mark the node if it's not marked
    } else {
      this._cut(node, parent) // if the node is marked, cut it from the parent
      this._cascadingCut(parent) // perform cascading cuts on the parent
    }
  }

  _consolidate() {
    const maxDegree = Math.floor(Math.log2(this.nodeCount)) + 1 // estimate the maximum degree
    const degreeTable = new Array(maxDegree).fill(null) // create an array to store nodes by degree

    let current = this.rootList // start from the head of the root list
    const rootListNodes = []

    // collect all nodes in the root list
    do {
      rootListNodes.push(current)
      current = current.right
    } while (current !== this.rootList)

    // consolidate the trees in the root list
    for (const node of rootListNodes) {
      let degree = node.degree

      // combine trees with the same degree until there's no conflict
      while (degreeTable[degree]) {
        let otherNode = degreeTable[degree]

        if (node.value > otherNode.value) {
          ;[node, otherNode] = [otherNode, node] // ensure node is the smaller one
        }

        // make otherNode a child of node
        this._link(otherNode, node)
        degreeTable[degree] = null // reset the degree table entry
        degree++ // increment the degree
      }

      degreeTable[degree] = node // store the node in the degree table
    }

    // find the new minimum node
    this.min = null
    for (const entry of degreeTable) {
      if (entry) {
        if (!this.min || entry.value < this.min.value) {
          this.min = entry // update the minimum node
        }
      }
    }
  }

  _link(child, parent) {
    // remove the child from the root list
    this.rootList = this._removeNodeFromList(this.rootList, child)

    // add the child to the parent's child list
    parent.child = this._mergeLists(parent.child, child)

    child.parent = parent // set the child's parent
    parent.degree++ // increment the parent's degree
    child.mark = false // reset the child's mark
  }
}

// Example usage of the Fibonacci heap
const heap = new FibonacciHeap()
heap.insert(5)
heap.insert(2)
heap.insert(8)
heap.insert(3)

console.log(heap.extractMin()) // Output: 2
console.log(heap.extractMin()) // Output: 3
heap.decreaseKey(heap.insert(7), 1)
console.log(heap.extractMin()) // Output: 1


//  Best for algorithms that require frequent decrease-key operations, like Dijkstra’s or Prim’s algorithms