class TreeNode {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
  }
}

// Recursive function to find all nodes at distance K downward
function findNodesAtDistanceKDownward(root, K, nodes) {
  if (!root) return
  if (K === 0) {
    nodes.push(root.value) // If distance is zero, add this node to result
    return
  }
  // Recurse downward, decrementing K
  findNodesAtDistanceKDownward(root.left, K - 1, nodes)
  findNodesAtDistanceKDownward(root.right, K - 1, nodes)
}

// Recursive function to find distance of the target node from the root
function findDistanceToNode(root, target, nodes, K) {
  if (!root) return -1

  if (root === target) {
    findNodesAtDistanceKDownward(root, K, nodes) // Explore downward nodes
    return 0 // Return 0 when the target node is found
  }

  // Check in the left subtree
  let leftDistance = findDistanceToNode(root.left, target, nodes, K)
  if (leftDistance >= 0) {
    if (leftDistance + 1 === K) {
      nodes.push(root.value) // If reaching K distance from target, add this node
    } else {
      // Explore the right subtree for distance K - (leftDistance + 2)
      findNodesAtDistanceKDownward(root.right, K - (leftDistance + 2), nodes)
    }
    return leftDistance + 1 // Increment distance as we go upward
  }

  // Check in the right subtree
  let rightDistance = findDistanceToNode(root.right, target, nodes, K)
  if (rightDistance >= 0) {
    if (rightDistance + 1 === K) {
      nodes.push(root.value) // Add node if it's at distance K from target
    } else {
      // Explore left subtree for nodes at required distance
      findNodesAtDistanceKDownward(root.left, K - (rightDistance + 2), nodes)
    }
    return rightDistance + 1
  }

  return -1 // If the target is not found
}

// Function to find all nodes at distance K from a given target node
function findNodesDistanceK(root, target, K) {
  const nodes = []
  findDistanceToNode(root, target, nodes, K) // Recursive call to explore distance K nodes
  return nodes // Return the list of nodes at distance K
}

// Example binary tree
const root = new TreeNode(3)
root.left = new TreeNode(5)
root.right = new TreeNode(1)
root.left.left = new TreeNode(6)
root.left.right = new TreeNode(2)
root.right.left = new TreeNode(0)
root.right.right = new TreeNode(8)
root.left.right.left = new TreeNode(7)
root.left.right.right = new TreeNode(4)

// Test with target node and distance K
const targetNode = root.left // Node with value 5
const nodesDistanceK = findNodesDistanceK(root, targetNode, 2) // Distance K = 2
console.log('Nodes at distance K:', nodesDistanceK)
