import { MinHeap } from './Minheap.js'

const minHeap = new MinHeap()

const taskNameInput = document.getElementById('task-name')
const taskPriorityInput = document.getElementById('task-priority')
const taskList = document.getElementById('task-list')
const addTaskButton = document.getElementById('add-task')
const executeTaskButton = document.getElementById('execute-task')

function updateTaskList() {
  taskList.innerHTML = ''
  minHeap.heap.forEach((task) => {
    const listItem = document.createElement('li')
    listItem.textContent = `${task.name} : Priority :${task.priority}`
    taskList.appendChild(listItem)
  })
}

addTaskButton.addEventListener('click', () => {
  console.log(taskNameInput.value)
  const taskName = taskNameInput.value.trim()
  const taskPriority = parseInt(taskPriorityInput.value.trim(), 10)

  if (taskName && !isNaN(taskPriority)) {
    const task = { name: taskName, priority: taskPriority }
    minHeap.insert(task)
    updateTaskList()
  }
})

executeTaskButton.addEventListener('click', () => {
  const executedTask = minHeap.remove()
  updateTaskList()
  if (executedTask) {
    alert(
      `Executed Task: ${executedTask.name} with priority ${executedTask.priority}`
    )
  } else {
    alert('No tasks to execute')
  }
})
