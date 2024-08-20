import { MaxHeap } from './maxHeap.js'

const maxHeap = new MaxHeap()

const incidentNameInput = document.getElementById('incident-name')
const incidentPriorityInput = document.getElementById('incident-priority')
const incidentDescriptionInput = document.getElementById('incident-description')
const incidentList = document.getElementById('incident-list')
const notificationList = document.getElementById('notification-list')
const addIncidentButton = document.getElementById('add-incident')
const sendNotificationButton = document.getElementById('send-notification')

function UpdateIncidentList() {
  incidentList.innerHTML = ''
  maxHeap.getHeap().forEach((incident) => {
    const listItem = document.createElement('li')
    listItem.textContent = `${incident.name} : Priority :${incident.priority} : ${incident.description}`
    incidentList.appendChild(listItem)
  })
}

function updateNotificationList(notification) {
  console.log(notification)
  const listItem = document.createElement('li')
  listItem.textContent = notification
  notificationList.appendChild(listItem)
}

addIncidentButton.addEventListener('click', () => {
  const incidentName = incidentNameInput.value.trim()
  const incidentPriority = parseInt(incidentPriorityInput.value.trim(), 10)
  const incidentDescription = incidentDescriptionInput.value.trim()

  if (incidentName && !isNaN(incidentPriority) && incidentDescription) {
    const incident = {
      name: incidentName,
      priority: incidentPriority,
      description: incidentDescription,
    }

    maxHeap.insert(incident)

    UpdateIncidentList()

    incidentNameInput.value = ''
    incidentPriorityInput.value = ''
    incidentDescriptionInput.value = ''
  }
})

const priorityDescriptions = {
  1: 'Minimal',
  2: 'Low',
  3: 'Medium',
  4: 'High',
  5: 'Critical',
}

sendNotificationButton.addEventListener('click', () => {
  const topIncident = maxHeap.remove()
  console.log(topIncident)
  if (topIncident) {
    const priorityDescription =
      priorityDescriptions[topIncident.priority] || 'Unknown'
    const notification = `${priorityDescriptions[topIncident.priority]}: ${
      topIncident.name
    } - ${topIncident.description} (Priority: ${priorityDescription})`
    updateNotificationList(notification)
    UpdateIncidentList()
    alert(`Notification Sent: ${notification}`)
  } else {
    alert('No incidents to notify.')
  }
})
