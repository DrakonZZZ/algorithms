class HuffmanNode {
  constructor(character = null, frequency = 0) {
    this.character = character // Character or null for internal nodes
    this.frequency = frequency // Frequency or sum of child frequencies
    this.left = null // Left child
    this.right = null // Right child
  }
}

// Priority queue (min-heap) for Huffman tree construction
class MinHeap {
  constructor() {
    this.heap = []
  }

  insert(node) {
    this.heap.push(node)
    this._heapifyUp(this.heap.length - 1)
  }

  extractMin() {
    if (this.heap.length === 0) return null
    if (this.heap.length === 1) return this.heap.pop()

    const minNode = this.heap[0]
    this.heap[0] = this.heap.pop()
    this._heapifyDown(0)

    return minNode
  }

  _heapifyUp(index) {
    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2)
      if (this.heap[parentIndex].frequency <= this.heap[index].frequency) {
        break
      }
      ;[this.heap[parentIndex], this.heap[index]] = [
        this.heap[index],
        this.heap[parentIndex],
      ]
      index = parentIndex
    }
  }

  _heapifyDown(index) {
    const length = this.heap.length
    while (true) {
      const leftChildIndex = 2 * index + 1
      const rightChildIndex = 2 * index + 2
      let smallest = index

      if (
        leftChildIndex < length &&
        this.heap[leftChildIndex].frequency < this.heap[smallest].frequency
      ) {
        smallest = leftChildIndex
      }

      if (
        rightChildIndex < length &&
        this.heap[rightChildIndex].frequency < this.heap[smallest].frequency
      ) {
        smallest = rightChildIndex
      }

      if (smallest === index) {
        break
      }

      ;[this.heap[index], this.heap[smallest]] = [
        this.heap[smallest],
        this.heap[index],
      ]
      index = smallest
    }
  }
}

// Build Huffman Tree based on character frequencies
function buildHuffmanTree(charFrequencies) {
  const heap = new MinHeap()

  // Insert each character and its frequency into the heap
  for (const [char, freq] of Object.entries(charFrequencies)) {
    const node = new HuffmanNode(char, freq)
    heap.insert(node)
  }

  // Build the Huffman tree
  while (heap.heap.length > 1) {
    const leftNode = heap.extractMin()
    const rightNode = heap.extractMin()
    const internalNode = new HuffmanNode(
      null,
      leftNode.frequency + rightNode.frequency
    )
    internalNode.left = leftNode
    internalNode.right = rightNode
    heap.insert(internalNode)
  }

  // The last remaining node is the root of the Huffman tree
  return heap.heap[0]
}

// Generate Huffman codes by traversing the Huffman tree
function generateHuffmanCodes(root, path = '', codeDict = {}) {
  if (!root) return

  if (root.character !== null) {
    // It's a leaf node, store the code in the dictionary
    codeDict[root.character] = path
    return
  }

  // Traverse left (add '0' to the path)
  generateHuffmanCodes(root.left, path + '0', codeDict)

  // Traverse right (add '1' to the path)
  generateHuffmanCodes(root.right, path + '1', codeDict)
}

// Encode text using Huffman codes
function huffmanEncode(text, codeDict) {
  let encodedText = ''
  for (const char of text) {
    encodedText += codeDict[char]
  }
  return encodedText
}

// Decode encoded text using the Huffman tree
function huffmanDecode(root, encodedText) {
  let decodedText = ''
  let currentNode = root

  for (const bit of encodedText) {
    if (bit === '0') {
      currentNode = currentNode.left
    } else {
      currentNode = currentNode.right
    }

    if (currentNode.left === null && currentNode.right === null) {
      // It's a leaf node, add the character to the decoded text
      decodedText += currentNode.character
      currentNode = root // Return to the root to decode the next character
    }
  }

  return decodedText
}

// Example: Encoding and Decoding with Huffman
const text = 'hello huffman'
const charFrequencies = {}

// Calculate character frequencies
for (const char of text) {
  if (!charFrequencies[char]) {
    charFrequencies[char] = 1
  } else {
    charFrequencies[char] += 1
  }
}

// Build Huffman tree and generate codes
const huffmanTree = buildHuffmanTree(charFrequencies)
const huffmanCodes = {}
generateHuffmanCodes(huffmanTree, '', huffmanCodes)

console.log('Huffman Codes:', huffmanCodes)

// Encode and decode the text
const encodedText = huffmanEncode(text, huffmanCodes)
console.log('Encoded Text:', encodedText)

const decodedText = huffmanDecode(huffmanTree, encodedText)
console.log('Decoded Text:', decodedText)
