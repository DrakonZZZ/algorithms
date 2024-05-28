class Employee {
  constructor(name) {
    this.name = name
    this.directReports = [] // Array of direct reports
  }

  addDirectReport(employee) {
    this.directReports.push(employee)
  }
}

function findLowestCommonManager(root, employeeOne, employeeTwo) {
  if (!root || root === employeeOne || root === employeeTwo) {
    return root
  }

  let countMatches = 0
  let lca = null

  for (const report of root.directReports) {
    const result = findLowestCommonManager(report, employeeOne, employeeTwo)

    if (result) {
      countMatches++
      lca = result
    }

    if (countMatches === 2) {
      return root
    }
  }

  return lca
}

// Example organization
const ceo = new Employee('CEO')
const headSales = new Employee('Head of Sales')
const headEngineering = new Employee('Head of Engineering')
ceo.addDirectReport(headSales)
ceo.addDirectReport(headEngineering)

const salesManager1 = new Employee('Sales Manager 1')
const salesManager2 = new Employee('Sales Manager 2')
headSales.addDirectReport(salesManager1)
headSales.addDirectReport(salesManager2)

const engineeringManager = new Employee('Engineering Manager')
headEngineering.addDirectReport(engineeringManager)

const lca = findLowestCommonManager(ceo, salesManager1, salesManager2)

console.log('Lowest Common Manager:', lca.name)
