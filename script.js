let addButton = document.querySelector(".addButton");
let title = document.querySelector("#title");
let TodoPriority = document.querySelector("#priority");
let Todos = document.querySelector(".todos");
function createTodo(title, priority) {
  if (title.length) {
    let todo = document.createElement("div");
    todo.classList.add("todo");
    todo.innerHTML += ` 
                <div class="texts">
                  <p class="titleTodo">${title}</p>
                  <span class="priorityTodo">${priority}</span>
                </div>
                <div>
                  <button class="deleteButton">Delete</button>
                  <button class="editButton">Edit</button>
                </div>`;
    let deleteButton = todo.querySelector(".deleteButton");
    deleteButton.addEventListener("click", () => {
      todo.remove();
    });
    let editButton = todo.querySelector(".editButton");
    let titleTodo = todo.querySelector(".titleTodo");
    editButton.addEventListener("click", () => {
      if (editButton.textContent == "Edit") {
        titleTodo.contentEditable = true;
        editButton.textContent = "Save";
      } else {
        titleTodo.contentEditable = false;
        editButton.textContent = "Edit";
      }
    });
    return todo;
  } else {
    alert("Title is empty");
  }
}

function addTodo() {
  let newTodo = createTodo(title.value, TodoPriority.value);
  Todos.appendChild(newTodo);
  title.value = "";
}
addButton.addEventListener("click", addTodo);
