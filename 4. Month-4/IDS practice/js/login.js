let form = document.querySelector(".form");
let input = document.querySelector(".input");
let password = document.querySelector(".password");

// form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   let body = {
//     email: input.value,
//     password: password.value,
//   };
//   fetch("https://reqres.in/api/register", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(body),
//   })
//     .then((res) => res.json())
//     .then((res) => {
//         console.log(res);
//       localStorage.setItem("token", JSON.stringify(res.token));
//       if(res.token){
//         window.location.replace('index.html')
//       }

//     });
// });

// function myFetch(url, { method, body }) {
//     return new Promise((resolve, reject) => {
//         const req = new XMLHttpRequest();

//         req.open(method, url, true);
//         req.responseType = "json";
//         req.setRequestHeader("Content-Type", "application/json");
//         req.setRequestHeader("Access-Control-Allow-Origin", "*");
//         req.onload = function (event) {
//             resolve(req.response);
//         };
//         req.onerror = function (event) {
//             reject("Error");
//         };
//         req.send(JSON.stringify(body))
//     })
// }

form.addEventListener("submit", (event) => {
  event.preventDefault();
  let body = {
    email: input.value,
    password: password.value,
  };

  console.log(body);

  fetch("https://reqres.in/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      })
        .then((res) => res.json())
        .then((res) => {
            console.log(res);
          localStorage.setItem("token", JSON.stringify(res.token));
          if(res.token){
            window.location.replace('index.html')
          }
    
        });
});
