class TrieNode {
  constructor() {
    this.children = {}
    this.isEndOfWord = false
  }
}

export class Trie {
  constructor() {
    this.root = new TrieNode()
  }

  insert(word) {
    let node = this.root
    for (const char of word) {
      if (!node.children[char]) {
        node.children[char] = new TrieNode()
      }
      node = node.children[char]
    }
    node.isEndOfWord = true
  }

  autoComplete(prefix) {
    let node = this.root
    for (const char of prefix) {
      if (!node.children[char]) {
        return []
      }
      node = node.children[char]
    }
    return this._findWords(node, prefix)
  }

  _findWords(node, prefix) {
    const results = []
    if (node.isEndOfWord) {
      results.push(prefix)
    }
    for (const char in node.children) {
      results.push(...this._findWords(node.children[char], prefix + char))
    }
    return results
  }
}
