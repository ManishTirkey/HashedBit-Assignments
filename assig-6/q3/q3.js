// Function to handle form submission
function submitfn(event) {
  event.preventDefault(); // Prevent the form from submitting normally

  const todoInput = document.querySelector(".todo-input");
  const todoList = document.querySelector(".todo-list");

  if (todoInput.value.trim() !== "") {
    // Create the todo div
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");

    // Create the list element
    const newTodo = document.createElement("li");
    newTodo.classList.add("todo-item");
    newTodo.textContent = todoInput.value;
    todoDiv.appendChild(newTodo);

    // Create the complete button
    const completeButton = document.createElement("button");
    completeButton.classList.add("complete-btn");
    completeButton.innerHTML = '<i class="fas fa-check"></i>'; // Using Font Awesome for icons
    todoDiv.appendChild(completeButton);
    completeButton.addEventListener("click", function () {
      newTodo.classList.toggle("completed");
    });

    // Create the delete button
    const trashButton = document.createElement("button");
    trashButton.classList.add("trash-btn");
    trashButton.innerHTML = '<i class="fas fa-trash"></i>'; // Using Font Awesome for icons
    todoDiv.appendChild(trashButton);
    trashButton.addEventListener("click", function () {
      todoDiv.remove();
    });

    // Append the todo div to the list
    todoList.appendChild(todoDiv);

    // Clear the input field
    todoInput.value = "";
  }
}

// Attach event listeners
document.querySelector("form").addEventListener("submit", submitfn);
