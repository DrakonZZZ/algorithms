class FamilyTree {
  constructor(name) {
    this.name = name
    this.relationship = null
  }
}

function getDepth(node) {
  let depth = 0
  while (node.relationship !== null) {
    node = node.relationship
    depth++
  }
  return depth
}

function alignLevel(deeper, depthDiff) {
  while (depthDiff > 0) {
    deeper = deeper.relationship
    depthDiff--
  }
  return deeper
}

function findYoungestCommonRelationship(descendantOne, descendantTwo) {
  const depthOne = getDepth(descendantOne)
  const depthTwo = getDepth(descendantTwo)

  const depthDiff = Math.abs(depthOne - depthTwo)

  let deeper = depthOne > depthTwo ? descendantOne : descendantTwo
  let shallower = depthOne > depthTwo ? descendantTwo : descendantOne

  deeper = alignLevel(deeper, depthDiff)

  while (deeper !== shallower) {
    deeper = deeper.relationship
    shallower = shallower.relationship
  }

  return deeper
}
// <-------------------- Will smith family tree ---------------------- >
const willSmith = new FamilyTree('Will Smith')
const jadaPinkettSmith = new FamilyTree('Jada Pinkett Smith')
const treySmith = new FamilyTree('Trey Smith')
const jadenSmith = new FamilyTree('Jaden Smith')
const willowSmith = new FamilyTree('Willow Smith')
const alsina = new FamilyTree('August Alsina')
// <-------------------- Set up the relationships ---------------------- >
treySmith.relationship = willSmith // Trey is Will's oldest son
jadaPinkettSmith.relationship = willSmith // Jada is Will's spouse
jadenSmith.relationship = jadaPinkettSmith // Jaden is their son
willowSmith.relationship = jadaPinkettSmith // Willow is their daughter
alsina.relationship = jadaPinkettSmith // The Entanglement

// Find the common ancestor between Trey and Jaden
const commonAncestor = findYoungestCommonRelationship(alsina, willowSmith)

console.log('Youngest common ancestor:', commonAncestor.name)
