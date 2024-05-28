class TrieNode {
  constructor() {
    this.children = {} // Map of characters to child nodes
    this.endsWith = false // Indicates if this node is the end of a word
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode() // Root of the Trie
  }

  insert(word) {
    let current = this.root

    // Traverse or create nodes for each character in the word
    for (const char of word) {
      if (!current.children[char]) {
        current.children[char] = new TrieNode() // Corrected to create a TrieNode
      }
      current = current.children[char]
    }

    current.endsWith = true // Mark the end of a word
  }

  search(word) {
    let current = this.root

    // Traverse through nodes for each character in the word
    for (const char of word) {
      if (!current.children[char]) {
        return false // Word not found
      }
      current = current.children[char]
    }

    return current.endsWith // Return if it's a complete word
  }

  startsWith(prefix) {
    let current = this.root

    // Traverse through nodes for each character in the prefix
    for (const char of prefix) {
      if (!current.children[char]) {
        return false // Prefix not found
      }
      current = current.children[char]
    }

    return true // Prefix exists in the Trie
  }

  findWordWithPrefix(prefix) {
    if (!this.startsWith(prefix)) {
      return [] // If the prefix doesn't exist, return an empty array
    }

    let current = this.root

    // Traverse to the node representing the last character of the prefix
    for (const char of prefix) {
      current = current.children[char]
    }

    const words = []
    this.collectWords(current, prefix, words) // Collect words from the given node
    return words // Return all words starting with the prefix
  }

  collectWords(node, prefix, words) {
    if (node.endsWith) {
      words.push(prefix) // If node is end of a word, add to list
    }

    // Traverse through children to collect complete words
    for (const char in node.children) {
      this.collectWords(node.children[char], prefix + char, words)
    }
  }

  delete(word) {
    // Helper function to recursively delete nodes
    const deleteRecursively = (node, word, depth) => {
      if (!node) {
        return false // Node doesn't exist, nothing to delete
      }

      // If we've reached the end of the word
      if (depth === word.length) {
        if (node.isEndOfWord) {
          node.isEndOfWord = false // Unmark the end of the word

          // If the node has no other children, it can be removed
          return Object.keys(node.children).length === 0
        }
      } else {
        const char = word[depth] // Current character to traverse
        const shouldDelete = deleteRecursively(
          node.children[char],
          word,
          depth + 1
        )

        if (shouldDelete) {
          // If child node should be deleted
          delete node.children[char] // Delete the child node

          // If the current node has no children and isn't the end of another word, it can be removed
          return Object.keys(node.children).length === 0 && !node.isEndOfWord
        }
      }

      return false // Don't delete the node if it has other children or is the end of another word
    }

    deleteRecursively(this.root, word, 0) // Start the recursive delete from the root
  }
}

// Test Trie
const trie = new Trie()
trie.insert('hello')
trie.insert('helium')
trie.insert('help')
trie.insert('hero')
trie.insert('helicopter')

console.log(trie.search('hello')) // true
console.log(trie.search('hero')) // true
console.log(trie.startsWith('hel')) // true
console.log(trie.findWordWithPrefix('hel'))

// interview question like autocomplete or folder cache
