// Select the elements in the final area
const taskInput = document.getElementById("taskInput");
const addTaskButton = document.getElementById("addTask");
const taskList = document.getElementById("taskList");

// Create a list item per instructions
function createListItem(taskText) {
  const listItem = document.createElement("li");
  listItem.textContent = taskText;

  // The bonus feature: Toggle "completed" display when its clicked
  listItem.addEventListener("click", () => {
    listItem.classList.toggle("completed");
  });

  return listItem;
}

// Add task function, declare -> name -> parameters -> conditions
function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText !== "") {
    const listItem = createListItem(taskText);
    taskList.appendChild(listItem);
    taskInput.value = "";
  }
}

// Connect to the event listener to actually display change when clicked
addTaskButton.addEventListener("click", addTask);
