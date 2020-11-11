const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-input");
const filterInput = document.querySelector("#filter-input");
const todoList = document.querySelector("#todo-list");
const clearButton = document.querySelector("#clear-todos");

// console.log(todoForm);
immediateLoadEventListener();
//ini adalah kumpulan listener
function immediateLoadEventListener() {
  //mendapatkan todos dari localstorage dan render dibrowser
  document.addEventListener("DOMContentLoaded", getTodos);
  //menambahkan todos
  todoForm.addEventListener("submit", addTodo);
  //menghapus satu todos
  todoList.addEventListener("click", deleteTodo);
  //menghapus semua todos
  clearButton.addEventListener("click", clearTodos);
  //filter todos
  filterInput.addEventListener("keyup", filterTodos);
}

//Reusable codes 75-80 di html
function createTodoElement(value) {
  //di index.html line 75-80
  //Membuat li element
  const li = document.createElement("li");

  // Menambahkan class pada element li
  li.className =
    "todo-item list-group-item d-flex justify-content-between align-items-center mb-1";

  // Menambahkan children ke dalam element li
  li.appendChild(document.createTextNode(value)); //appendchild ibarat sebuah box kita taruh sebelahnya

  // Menambahkan delete button
  const a = document.createElement("a");

  // Memberi properti untuk a element
  a.href = "#";
  a.className = "badge badge-danger delete-todo";

  a.innerHTML = "Delete"; //mengganti seluruh children

  //Menyelippkan element a ke dalam children li
  li.appendChild(a);

  //Memasukkan alamat li yg tlh dibuat dgn javascript
  //ke dalam element todo list
  todoList.appendChild(li);
  // console.log(li);
}

//Reusable codes getItemLocalStorage
function getItemFromLocalStorage() {
  let todos;

  if (localStorage.getItem("todos") == null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }

  return todos;
}

//ini adalah DOM Function
//fungsi ini berguna data saat di refresh di UI masih ada
function getTodos() {
  const todos = getItemFromLocalStorage();

  todos.forEach((todo) => {
    createTodoElement(todo);
  });
}

function addTodo(e) {
  //e = event
  e.preventDefault(); //kegunaan preventDefault ketika sudah submit maka otomatis refresh page

  //   console.log("Submit");

  if (todoInput.value) {
    createTodoElement(todoInput.value);
    //digunakan apibila user sudah input data
    addTodoLocalStorage(todoInput.value);
    //digunakan apabila sudah selesai input maka todos input di html kosong
    todoInput.value = "";
  } else {
    alert("Tidak boleh kosong Bro !!");
  }
}

function addTodoLocalStorage(todoInputValue) {
  const todos = getItemFromLocalStorage();

  todos.push(todoInputValue);
  localStorage.setItem("todos", JSON.stringify(todos));
}

function deleteTodo(e) {
  e.preventDefault();

  if (e.target.classList.contains("delete-todo")) {
    if (confirm("Apakah anda yakin menghapus ?")) {
      const parent = e.target.parentElement;
      parent.remove();

      deleteTodoLocalStorage(parent);
    }

    // console.log(parent);
  }
}

function deleteTodoLocalStorage(deletedElement) {
  const todos = getItemFromLocalStorage(); //Menghapus item yg dituju

  todos.forEach((todo, index) => {
    if (deletedElement.firstChild.textContent === todo) {
      todos.splice(index, 1);
    }
  });

  localStorage.setItem("todos", JSON.stringify(todos));
}

function clearTodos() {
  todoList.innerHTML = "";
}

function filterTodos(e) {
  const filterText = e.target.value.toLowerCase();
  const todoItems = document.querySelectorAll(".todo-item");

  todoItems.forEach((item) => {
    const itemText = item.firstChild.textContent.toLowerCase();

    if (itemText.indexOf(filterText) != -1) {
      item.setAttribute("style", "display: block;");
    } else {
      item.setAttribute("style", "display: none !important;");
    }
  });
  console.log(filterTodos);
}
