// Init an array to store tasks
let tasks = [];

// Add an event listener to add tasks to the add task btn
document.getElementById('addTaskBtn').addEventListener('click', function() {
  // Store text value from input box as a variable 'taskInput'
  let taskInput = document.getElementById('taskInput').value
  // Checks if taskInput is a truthy value (not empty) and not equal to any current task
  if (taskInput && tasks.indexOf(taskInput) === -1) {
    // Adds the text from input as a task in the array, 'tasks'
    tasks.push(taskInput)
    // Clears the task input
    document.getElementById('taskInput').value = ''
    // Runs the function displayTasks
    displayTasks()
  }
})

// Function to display tasks from tasks[] in the UL
function displayTasks() {
  // Select the ul (taskList) in the HTML
  let taskList = document.getElementById('taskList')
  // Clear the existing task list before updating
  taskList.innerHTML = ''
  // Loop through each task in the array and create a list item
  tasks.forEach((task,index) => {
    // Create a new <li> element for each task
    let li = document.createElement('li')
    // Add Bootstrap classes for styling
    li.classList.add(
      'list-group-item',
      'd-flex',
      'justify-content-between',
      'align-items-center',
      'bg-transparent',
      'text-white',
      'rounded'
    )
    // Set the inner HTML of the <li> element with task text and a remove button
    li.innerHTML = `${task} <button class='btn btn-transparent btn-sm text-success border border-success border-green scale' onclick='removeTask(${index})'> √ </button>`
    // Append the new task to the task list
    taskList.appendChild(li)
  })
}

// Function to remove a task from the list when the "√" button is clicked
function removeTask(index) {
  // Remove the task at the given index from the array
  tasks.splice(index, 1)

  // Call the function to update the task list display
  displayTasks()
}

// Event listener for the "Clear All Tasks" button
document.getElementById('clearTaskBtn').addEventListener('click', function() {
  tasks = []
  displayTasks()
})