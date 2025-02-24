// init an array to store tasks
let tasks = [];

// Add an event listener to add tasks to the add task btn
document.getElementById('addTaskBtn').addEventListener('click', function() {
  // Store text value from input box as a variable 'taskInput'
  let taskInput = document.getElementById('taskInput').value

  // Checks if taskInput is a truthy value (not empty)
  if (taskInput) {
    // Adds the text from input as a task in the array, 'tasks'
    tasks.push(taskInput)
    // Clears the task input
    document.getElementById('taskInput').value = ''
    // Runs the function displayTasks
    displayTasks()
  }
})