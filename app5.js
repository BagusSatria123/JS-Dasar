const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-input");
const filterInput = document.querySelector("#filter-input");
const todoList = document.querySelector("#todo-list");
const clearButton = document.querySelector("#clear-todos");

// console.log(todoForm);

todoForm.addEventListener("submit", addTodo);
todoList.addEventListener("click", deleteTodo);
clearButton.addEventListener("click", clearTodos);
filterInput.addEventListener("keyup", filterTodos);

function addTodo(e) {
  //e = event
  e.preventDefault(); //kegunaan preventDefault ketika sudah submit maka otomatis refresh page

  //   console.log("Submit");

  if (todoInput.value) {
    //di index.html line 75-80
    //Membuat li element
    const li = document.createElement("li");

    // Menambahkan class pada element li
    li.className =
      "todo-item list-group-item d-flex justify-content-between align-items-center mb-1";

    // Menambahkan children ke dalam element li
    li.appendChild(document.createTextNode(todoInput.value)); //appendchild ibarat sebuah box kita taruh sebelahnya

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

    //digunakan apibila user sudah input data
    todoInput.value = "";
  } else {
    alert("Tidak boleh kosong Bro !!");
  }
}

function deleteTodo(e) {
  e.preventDefault();

  if (e.target.classList.contains("delete-todo")) {
    if (confirm("Apakah anda yakin menghapus ?")) {
      const parent = e.target.parentElement;
      parent.remove();
    }

    // console.log(parent);
  }
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
