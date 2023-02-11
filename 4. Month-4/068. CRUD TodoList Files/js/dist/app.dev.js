"use strict";

var formCreate = document.getElementById("form-create");
var formEdit = document.getElementById("form-edit");
var listGroupTodo = document.getElementById("list-group-todo"); // const messageCreate = document.getElementById('message-create')

var time = document.getElementById("time");
var modal = document.getElementById("modal");
var overlay = document.getElementById("overlay");
/* time elements */

var fullDay = document.getElementById("full-day");
var hourEl = document.getElementById("hour");
var minuteEl = document.getElementById("minute");
var secondEl = document.getElementById("second");
var closeEl = document.getElementById("close");
var info = document.querySelector(".info"); // console.log(info);

var editItemId;
var tokenn = JSON.parse(localStorage.getItem("token")); // chek

var todos = [];
showTodos(); // set todos local storage

function setTodos() {// localStorage.setItem("list", JSON.stringify(todos));
}

function showMessage(where, message, color) {
  document.querySelector(where).textContent = message;
  document.querySelector(where).style.color = color;
  setTimeout(function () {
    document.querySelector(where).textContent = "Type what you should do";
    document.querySelector(where).style.color = "green";
  }, 2500);
} // time


function getTime() {
  var now = new Date();
  var date = now.getDate() < 10 ? "0" + now.getDate() : now.getDate();
  var month = now.getMonth() < 10 ? "0" + (now.getMonth() + 1) : now.getMonth();
  var year = now.getFullYear();
  var hour = now.getHours() < 10 ? "0" + now.getHours() : now.getHours();
  var minute = now.getMinutes() < 10 ? "0" + now.getMinutes() : now.getMinutes();
  fullDay.textContent = "".concat(date, "/").concat(month, "/").concat(year);
  hourEl.textContent = hour;
  minuteEl.textContent = minute;
  secondEl.textContent = now.getSeconds();
  return "".concat(hour, ":").concat(minute, "  ").concat(date, ".").concat(month, ".").concat(year);
}

setInterval(function () {
  getTime();
}, 1000); //! show ttodos=

function showTodos() {
  var response, data;
  return regeneratorRuntime.async(function showTodos$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(fetch("https://todo-for-n92.cyclic.app/todos/all", {
            method: "GET",
            headers: {
              "x-access-token": tokenn
            }
          }));

        case 2:
          response = _context.sent;

          if (response.ok) {
            _context.next = 5;
            break;
          }

          throw new Error("HTTP error! status: ".concat(response.status));

        case 5:
          _context.next = 7;
          return regeneratorRuntime.awrap(response.json());

        case 7:
          data = _context.sent;
          todos = data.allTodos;
          listGroupTodo.innerHTML = "";
          todos.reverse().forEach(function (item) {
            listGroupTodo.innerHTML += "<li class=\"list-group-item d-flex justify-content-between ".concat(item.completed === true ? "complated" : "", " \" ondblclick = \"setCompleted('").concat(item._id, "')\">\n            ").concat(item.task, "\n            <div class=\"todo-icons\">\n              <span class=\"opacity-50 me-2 time\">").concat(item.createdAt, "</span>\n              <img src=\"./img/edit.svg\" onclick=\"editTodo('").concat(item._id, "')\" alt=\"edit icon \" width=\"25\" height=\"25\">\n              <img src=\"./img/delete.svg\"  onclick=\"deleteTodo('").concat(item._id, "')\"  alt=\"delete icon \" width=\"25\" height=\"25\" >\n            </div>\n            </li>");
          });
          console.log(todos);
          console.log(tokenn);

        case 13:
        case "end":
          return _context.stop();
      }
    }
  });
}

showTodos(); //!   get todo

formCreate.addEventListener("submit", function (e) {
  e.preventDefault();
  var todoText = formCreate["input-create"].value.trim();
  formCreate.reset();

  if (todoText.length) {
    fetch("https://todo-for-n92.cyclic.app/todos/add", {
      method: "POST",
      body: JSON.stringify({
        task: todoText
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        "x-access-token": tokenn
      }
    }).then(function (response) {
      if (response.ok) {
        return response.json();
      }

      return Promise.reject(response);
    }).then(function (data) {
      showMessage(".info", data.message, "orange");
      console.log(data);
      showTodos();
    })["catch"](function (error) {
      console.warn("Something went wrong.", error);
    });
    setTimeout(function () {
      info.innerHTML = "Type what you should do";
      info.style.color = "green";
    }, 3000);
  }
}); // !delete

function deleteTodo(id) {
  fetch("https://todo-for-n92.cyclic.app/todos/".concat(id), {
    method: "DELETE",
    headers: {
      "x-access-token": tokenn
    }
  }).then(function (response) {
    if (response.ok) {
      return response.json();
    }

    return Promise.reject(response);
  }).then(function (data) {
    showMessage(".info", data.message, "red");
    console.log(data);
    showTodos();
  })["catch"](function (error) {
    console.warn("Something went wrong.", error);
  });
  console.log(id);
} // !setcompleted


function setCompleted(id) {
  console.log("mmm");
  fetch("https://todo-for-n92.cyclic.app/todos?id=".concat(id), {
    method: "PUT",
    headers: {
      "x-access-token": tokenn
    }
  }).then(function (response) {
    if (response.ok) {
      return response.json();
    }

    return Promise.reject(response);
  }).then(function (data) {
    showMessage(".info", data.message, "pink");
    console.log(data);
    showTodos();
  })["catch"](function (error) {
    console.warn("Something went wrong.", error);
  });
  setTodos();
} // !edit todo


formEdit.addEventListener("submit", function (e) {
  e.preventDefault();
  var todoText = formEdit["input-edit"].value.trim();
  console.log(editItemId);

  if (todoText.length) {
    fetch("https://todo-for-n92.cyclic.app/todos/".concat(editItemId), {
      method: "PUT",
      headers: {
        "x-access-token": tokenn,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        task: todoText
      })
    }).then(function (response) {
      if (response.ok) {
        return response.json();
      }

      return Promise.reject(response);
    }).then(function (data) {
      showMessage(".info", data.message, "green");
      console.log(data);
      showTodos();
    })["catch"](function (error) {
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
  fetch("https://todo-for-n92.cyclic.app/todos/".concat(editItemId), {
    method: "GET",
    headers: {
      "x-access-token": tokenn
    }
  }).then(function (response) {
    if (response.ok) {
      return response.json();
    }

    return Promise.reject(response);
  }).then(function (data) {
    formEdit["input-edit"].value = data.todo.task;
  })["catch"](function (error) {
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
} // Token replace


var token = localStorage.getItem("token");

if (!token) {
  window.location.replace("/login.html");
}