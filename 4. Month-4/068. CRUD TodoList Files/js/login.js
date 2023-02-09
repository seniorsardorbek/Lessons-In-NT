
let form = document.querySelector(".form");
let input = document.querySelector(".input");
let password = document.querySelector(".password");
let loginTitle = document.querySelector(".logintitle");
let reglogbtn = document.querySelector(".reglog");


let reglog = "login";


function reg() {
  switch (reglog) {
    case "register":
      reglogbtn.textContent = "Register";
      loginTitle.textContent = "Login";
      reglog = "login";
      break;
    case "login":
      reglogbtn.textContent = "Login";
      loginTitle.textContent = "Register";
      reglog = "register";
      break;
  }
}

reglogbtn.addEventListener("click", (e) => {
  reg();
  form.reset()
});

form.addEventListener("submit", (event) => {
 
  event.preventDefault();
  let body = {
    username: input.value,
    password: password.value,
  };
  console.log(body);
  fetch(`https://todo-for-n92.cyclic.app/user/${reglog}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  })
    .then((res) => res.json())
    .then((res) => {
      console.log(res);
     showMessage('.infoLogin' , res.message , 'red')
      localStorage.setItem("token", JSON.stringify(res.token));
      if (res.token) {
        window.location.replace("/index.html");
      }
    });

    form.reset()
});


function showMessage ( where ,message, color) {
  document.querySelector(where).textContent = message
  document.querySelector(where).style.color = color
  setTimeout(() => {
    document.querySelector(where).textContent = 'Enter Your Username or Register'
    document.querySelector(where).style.color = 'white'
  }, 2500)
}
