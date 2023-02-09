const formCreate = document.getElementById("form-create");
const formEdit = document.getElementById("form-edit");
const listGroupTodo = document.getElementById("list-group-todo");
// const messageCreate = document.getElementById('message-create')
const time = document.getElementById("time");
const modal = document.getElementById("modal");
const overlay = document.getElementById("overlay");
/* time elements */
let fullDay = document.getElementById("full-day");
const hourEl = document.getElementById("hour");
const minuteEl = document.getElementById("minute");
const secondEl = document.getElementById("second");
const closeEl = document.getElementById("close");
const info = document.querySelector(".info");
// console.log(info);

let editItemId;
let tokenn = JSON.parse(localStorage.getItem("token"));
// chek
let todos = [];
showTodos();

// set todos local storage
function setTodos() {
  // localStorage.setItem("list", JSON.stringify(todos));
}

function showMessage(where, message, color) {
  document.querySelector(where).textContent = message;
  document.querySelector(where).style.color = color;
  setTimeout(() => {
    document.querySelector(where).textContent = "Type what you should do";
    document.querySelector(where).style.color = "green";
  }, 2500);
}

// time
function getTime() {
  const now = new Date();
  const date = now.getDate() < 10 ? "0" + now.getDate() : now.getDate();
  const month =
    now.getMonth() < 10 ? "0" + (now.getMonth() + 1) : now.getMonth();
  const year = now.getFullYear();
  const hour = now.getHours() < 10 ? "0" + now.getHours() : now.getHours();
  const minute =
    now.getMinutes() < 10 ? "0" + now.getMinutes() : now.getMinutes();
  fullDay.textContent = `${date}/${month}/${year}`;

  hourEl.textContent = hour;
  minuteEl.textContent = minute;
  secondEl.textContent = now.getSeconds();
  return `${hour}:${minute}  ${date}.${month}.${year}`;
}
setInterval(() => {
  getTime();
}, 1000);

//! show ttodos=
async function showTodos() {
  const response = await fetch("https://todo-for-n92.cyclic.app/todos/all", {
    method: "GET",
    headers: {
      "x-access-token": tokenn,
    },
  });
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  const data = await response.json();
  todos = data.allTodos;
  listGroupTodo.innerHTML = "";
  todos.reverse().forEach((item) => {
    listGroupTodo.innerHTML += `<li class="list-group-item d-flex justify-content-between ${
      item.completed === true ? "complated" : ""
    } " ondblclick = "setCompleted('${item._id}')">
            ${item.task}
            <div class="todo-icons">
              <span class="opacity-50 me-2 time">${item.createdAt}</span>
              <img src="./img/edit.svg" onclick="editTodo('${
                item._id
              }')" alt="edit icon " width="25" height="25">
              <img src="./img/delete.svg"  onclick="deleteTodo('${
                item._id
              }')"  alt="delete icon " width="25" height="25" >
            </div>
            </li>`;
  });
  console.log(todos);
  console.log(tokenn);
}

showTodos();
//!   get todo
formCreate.addEventListener("submit", (e) => {
  e.preventDefault();
  const todoText = formCreate["input-create"].value.trim();
  formCreate.reset();
  if (todoText.length) {
    fetch("https://todo-for-n92.cyclic.app/todos/add", {
      method: "POST",
      body: JSON.stringify({
        task: todoText,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        "x-access-token": tokenn,
      },
    })
      .then(function (response) {
        if (response.ok) {
          return response.json();
        }
        return Promise.reject(response);
      })
      .then(function (data) {
        showMessage(".info", data.message, "orange");
        console.log(data);
        showTodos();
      })
      .catch(function (error) {
        console.warn("Something went wrong.", error);
      });
    setTimeout(() => {
      info.innerHTML = "Type what you should do";
      info.style.color = "green";
    }, 3000);
  }
});
// !delete
function deleteTodo(id) {
  fetch(`https://todo-for-n92.cyclic.app/todos/${id}`, {
    method: "DELETE",
    headers: {
      "x-access-token": tokenn,
    },
  })
    .then(function (response) {
      if (response.ok) {
        return response.json();
      }
      return Promise.reject(response);
    })
    .then(function (data) {
      showMessage(".info", data.message, "red");
      console.log(data);
      showTodos();
    })
    .catch(function (error) {
      console.warn("Something went wrong.", error);
    });
  console.log(id);
}

// !setcompleted
function setCompleted(id) {
  console.log("mmm");
  fetch(`https://todo-for-n92.cyclic.app/todos?id=${id}`, {
    method: "PUT",
    headers: {
      "x-access-token": tokenn,
    },
  })
    .then(function (response) {
      if (response.ok) {
        return response.json();
      }
      return Promise.reject(response);
    })
    .then(function (data) {
      showMessage(".info", data.message, "pink");
      console.log(data);
      showTodos();
    })
    .catch(function (error) {
      console.warn("Something went wrong.", error);
    });
  setTodos();
}
// !edit todo
formEdit.addEventListener("submit", (e) => {
  e.preventDefault();

  const todoText = formEdit["input-edit"].value.trim();
  console.log(editItemId);
  if (todoText.length) {
    fetch(`https://todo-for-n92.cyclic.app/todos/${editItemId}`, {
      method: "PUT",
      headers: {
        "x-access-token": tokenn,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        task: todoText,
      }),
    })
      .then(function (response) {
        if (response.ok) {
          return response.json();
        }
        return Promise.reject(response);
      })
      .then(function (data) {
        showMessage(".info", data.message, "green");
        console.log(data);
        showTodos();
      })
      .catch(function (error) {
        console.warn("Something went wrong.", error);
      });
  }
  close();
});

console.log(todos);
overlay.addEventListener("click", close);
closeEl.addEventListener("click", close);

function editTodo(id) {
  editItemId = id;
  fetch(`https://todo-for-n92.cyclic.app/todos/${editItemId}`, {
    method: "GET",
    headers: {
      "x-access-token": tokenn,
    },
  })
    .then(function (response) {
      if (response.ok) {
        return response.json();
      }
      return Promise.reject(response);
    })
    .then(function (data) {
      formEdit["input-edit"].value = data.todo.task;
    })
    .catch(function (error) {
      console.warn("Something went wrong.", error);
    });
  open();
}
function open() {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
}
function close() {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
}

// Token replace
let token = localStorage.getItem("token");
if (!token) {
  window.location.replace("/login.html");
}
