let form = document.querySelector(".form");

// form.addEventListener("submit" , (e)=>{
//   e.preventDefault()

//   let body = {
//     name: e.target[0].value,
//     password: e.target[1].value,
//   };

//   console.log(body);
//   fetch("https://reqres.in/api/register", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(body),
//       })
//       .then((res) => res.json())
//         .then((res) => {
//           token = res.token
//             console.log(res.token);
//           localStorage.setItem("token", JSON.stringify(res.token));
//           if(res.token){
//             window.location.replace('index.html')
//           }

//         });
// })

// async function mypost(url){
//   const res = await fetch(url)
//   const data = await res.json()
//   console.log(data);
// }

// mypost('https://reqres.in/api/login')

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

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch("https://reqres.in/api/users/2", {
    method: "GET",
    // body: JSON.stringify({
    //   title: "New Pirate Captain",
    //   body: {
    //     name: e.target[0].value,
    //     job: e.target[1].value,
    //   },
    // }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then(function (response) {
      if (response.ok) {
        return response.json();
      }
      return Promise.reject(response);
    })
    .then(function (data) {
      console.log(data);
    })
    .catch(function (error) {
      console.warn("Something went wrong.", error);
    });
});

// console.log(cards);
// async function render() {
//   const res = await fetch(
//     "http://universities.hipolabs.com/search?country=United+States"
//   );
//   const data = await res.json();
//   cards.innerHTML = "";
//   data.forEach((element) => {
//     let li = document.createElement("li");
//     let h1 = document.createElement("h1");
//     let h2 = document.createElement("h2");
//     let alink = document.createElement("a");
//     h1.textContent = element.country;
//     h2.textContent = element.name;
//     alink.textContent = "Go web";
//     alink.href = element.web_pages.map((item) => item);
//     alink.setAttribute("target", "_blank");
//     li.append(h1, h2, alink);
//     cards.appendChild(li);
//   });
// }
// render();
const Rectangle = class ree {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
};

console.log(new Rectangle(20, 30));

{
 class user{
  #hello
  constructor(name , surname ){
    this.age = Math.floor(Math.random() * 99999);
    this.name = name ;
    this.surname = surname ;

    this.#hello = 'sardorbek'
  }

  info(){
    return `My fullname ${ this.name} ${ this.surname} . My age is ${ this.age} ${this.status }`
  }

}
class Admin extends  user{
  constructor(name , surname ){
    super(name , surname );
    this.status = "Siuper admin"
  }
}


 console.log(new Admin ("sardor" , 'samijonov'  ));
 console.log(new Admin ("sardor" , 'samijonov'    ).info());
 console.log(new Admin.#hello);
}
