class HashMapName {
  constructor(size = 26, start = 'a') {
    this.buckets = Array(size)
      .fill(null)
      .map(() => []) // Initialize buckets
    this.size = size // Bucket size
    this.start = start.charCodeAt(0) // ASCII code for 'a'
  }

  add(name) {
    const hash = name.charCodeAt(0) - this.start // Calculate hash
    if (hash < 0 || hash >= this.size) return // Out-of-bounds check
    this.buckets[hash].push(name) // Add name to the appropriate bucket
  }

  find(prefix) {
    const hash = prefix.charCodeAt(0) - this.start // Calculate hash for prefix
    if (hash < 0 || hash >= this.size) return 0 // Out-of-bounds check

    let count = 0 // Count of names matching the prefix
    // Loop through all names in the relevant bucket
    this.buckets[hash].forEach((name) => {
      if (name.startsWith(prefix)) {
        count += 1 // Increment count if the name starts with the prefix
      }
    })

    return count // Return the count of matching names
  }
}

function contacts(queries) {
  const contactsNames = new HashMapName() // Initialize the HashMapName instance
  const results = [] // List to store the counts for each "find" query

  queries.forEach((query) => {
    const [type, name] = query // Destructure the query type and name

    if (type === 'add') {
      contactsNames.add(name) // Add the name to the hash map
    } else if (type === 'find') {
      const count = contactsNames.find(name) // Find names matching the prefix
      results.push(count) // Store the count of matching names
    }
  })

  return results // Return the results array
}

// Test cases
const queries = [
  ['add', 'john'],
  ['add', 'jack'],
  ['add', 'jill'],
  ['find', 'ja'], // Should return 1
  ['find', 'j'], // Should return 3
]

const results = contacts(queries) // Execute the queries
console.log(results)
