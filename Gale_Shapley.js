function stableMatching(menPreferences, womenPreferences) {
  const matches = {} // To store the final matches
  const men = Object.keys(menPreferences) // All the men
  const women = Object.keys(womenPreferences) // All the women
  const womenPartners = {} // To keep track of women's current partners
  const menNextProposal = {} // To track the next proposal index for each man

  // Initialize every man as unengaged and set their next proposal index to 0
  men.forEach((man) => {
    matches[man] = null
    menNextProposal[man] = 0
  })

  // While there are unengaged men
  let allEngaged = false
  while (!allEngaged) {
    allEngaged = true

    // Process each unengaged man
    men.forEach((man) => {
      if (matches[man] === null) {
        allEngaged = false
        // Get the woman's name from the man's preference list
        const woman = menPreferences[man][menNextProposal[man]]
        menNextProposal[man] += 1 // Move to the next preference

        if (!womenPartners[woman]) {
          // The woman is free, so she accepts the proposal
          matches[man] = woman
          womenPartners[woman] = man
        } else {
          const currentPartner = womenPartners[woman]
          const currentPartnerIndex =
            womenPreferences[woman].indexOf(currentPartner)
          const newPartnerIndex = womenPreferences[woman].indexOf(man)

          // If she prefers the new partner over her current partner
          if (newPartnerIndex < currentPartnerIndex) {
            // Break the current engagement and engage the new man
            matches[currentPartner] = null
            matches[man] = woman
            womenPartners[woman] = man
          }
        }
      }
    })
  }

  return matches // Return the stable matches
}

// Example
const menPreferences = {
  A: ['X', 'Y', 'Z'],
  B: ['Y', 'X', 'Z'],
  C: ['Y', 'X', 'Z'],
}

const womenPreferences = {
  X: ['B', 'A', 'C'],
  Y: ['C', 'B', 'A'],
  Z: ['A', 'C', 'B'],
}

const stableMatches = stableMatching(menPreferences, womenPreferences)

console.log('Stable matches:', stableMatches)

// A common application of this algorithm in real life is the National Residency Matching Program (NRMP) in the U.S., where medical students are matched to residency programs, which is often referred to as the "Stable Internship Algorithm."
