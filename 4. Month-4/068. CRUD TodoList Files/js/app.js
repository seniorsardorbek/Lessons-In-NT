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
// console.log(fullDay);


let editItemId 
// chek
let todos = JSON.parse(localStorage.getItem("list"))
  ? JSON.parse(localStorage.getItem("list"))
  : [];
if (todos.length) showTodos();

// set todos local storage
function setTodos() {
  localStorage.setItem("list", JSON.stringify(todos));
}

function showMessage(where, message) {
  document.getElementById(`${where}`).textContent = message;
  setTimeout(() => {
    document.getElementById(`${where}`).textContent = "";
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

// show ttodos
function showTodos() {
  const todos = JSON.parse(localStorage.getItem("list"));

  listGroupTodo.innerHTML = "";
  todos.forEach((item, i) => {
    listGroupTodo.innerHTML += `<li class="list-group-item d-flex justify-content-between  ${
      item.completed === true ? 'complated' : ''
    } " ondblclick = (setCompleted(${i})) >
        ${item.text}
        <div class="todo-icons">
          <span class="opacity-50 me-2">${item.time}</span>
          <img src="./img/edit.svg" onclick=(editTodo(${i})) alt="edit icon " width="25" height="25">
          <img src="./img/delete.svg"  onclick=(deleteTodo(${i}))  alt="delete icon " width="25" height="25">          <img src="./img/close.svg" alt="edit icon " width="25" height="25">
        </div>
      </li>`;
  });
}

//   get todo
formCreate.addEventListener("submit", (e) => {
  e.preventDefault();

  const todoText = formCreate["input-create"].value.trim();
  formCreate.reset();
  if (todoText.length) {
    todos.push({
      text: todoText,
      time: getTime(),
      completed: false,
    });
    setTodos();
    showTodos();
  } else {
    showMessage("message-create", "Please, enter text");
  }
});

function deleteTodo(id) {
  const deleteTodos = todos.filter((item, i) => {
    return i !== id;
  });
  todos = deleteTodos;
  setTodos();
  showTodos();
}
function setCompleted(id) {
  // console.log('salom');
  const completedTodos = todos.map((item, i) => {
    if (id == i) {
      return { ...item, completed: item.completed == true ? false : true };
    } else {
      return { ...item };
    }
  });
  todos = completedTodos;
  setTodos();
  showTodos();
}
console.log(todos);


formEdit.addEventListener('submit' ,(e)=>{
  e.preventDefault()

  const todoText = formEdit["input-edit"].value.trim();
  formEdit.reset();
  if (todoText.length) {
    todos.splice(editItemId  , 1,{
      text: todoText,
      time: getTime(),
      completed: false,
    });

    setTodos();
    showTodos();
    close()
  } else {
    showMessage("message-create", "Please, enter text");
  }
})
  
overlay.addEventListener('click' , close)
closeEl.addEventListener('click' , close)

function editTodo(id){
  editItemId = id
  open()
}
function open(){
  modal.classList.remove('hidden')
  overlay.classList.remove('hidden')
}
function close(){
  modal.classList.add('hidden')
  overlay.classList.add('hidden')
}