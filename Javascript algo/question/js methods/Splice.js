function splice1(arr, start, deleteCount, ...itemToAdd) {
  if (start < 0) {
    start = arr.length + start
  }

  if (start < 0) {
    start = 0
  }

  if (start > arr.length) {
    start = arr.length
  }

  if (deleteCount === undefined) {
    deleteCount = arr.length - start
  }

  const removedElements = []

  for (let i = start; i < start + deleteCount && i < arr.length; i++) {
    removedElements.push(arr[i])
  }

  const newArr = []

  for (let i = 0; i < start; i++) {
    newArr.push(arr[i])
  }

  for (const item of itemToAdd) {
    newArr.push(item)
  }

  for (let i = start + deleteCount; i < arr.length; i++) {
    newArr.push(arr[i])
  }

  arr.length = 0

  for (const item of newArr) {
    arr.push(item)
  }

  return removedElements
}
