let elFrom = document.querySelector(".form");
let elInput = document.querySelector("#searchTitle");
let elSelect = document.querySelector("#wekkness");
let cards = document.querySelector(".cards");

let likeDiv = document.querySelector(".likediv");
let likesBtn = document.querySelector(".likesBtn");

let modalMain = document.querySelector(".modal-main");
let modalCard = document.querySelector(".card-modal");

let likesArr =   JSON.parse(localStorage.getItem('likes')) ||  [];
let selArr = [];

function render(arr, ell) {
  ell.innerHTML = "";
  arr.forEach((item) => {
    let elLi = document.createElement("li");
    let elImg = document.createElement("img");
    let elTitle = document.createElement("p");
    let elBtn = document.createElement("button");
    let likebtn = document.createElement("button");

    elImg.src = item.img;
    elTitle.textContent = item.name;
    elBtn.textContent = "More";
    likebtn.textContent = "Like";
    elLi.append(elImg, elTitle, elBtn, likebtn);
    elBtn.dataset.pokid = item.id;
    cards.appendChild(elLi);
    elLi.classList.add("card");
    elBtn.classList.add("btn");
    likebtn.classList.add("likeBtn");

    likebtn.dataset.pokid = item.id;

    elLi.addEventListener("click", (e) => {
      if (e.target.matches(".btn")) {
        const clikedId = Number(e.target.dataset.pokid);
        // console.log(clikedId);
        modalMain.style.transform = "scale(100%)";
        const modalArr = pokemons.find((item) => {
          return item.id === clikedId;
        });
        modalCard.textContent = "";
        // console.log(modalArr);
        let modalImg = document.createElement("img");
        let modalName = document.createElement("h3");
        let modalDiv = document.createElement("div");
        let boyi = document.createElement("p");
        let vazni = document.createElement("p");

        modalImg.classList.add("modalImg");
        modalDiv.classList.add("modaldiv");
        modalImg.src = modalArr.img;
        modalName.textContent = modalArr.name;

        boyi.textContent = `Weight ${modalArr.height}`;
        vazni.textContent = `Height ${modalArr.weight}`;
        modalDiv.append(boyi, vazni);
        modalCard.append(modalImg, modalName, modalDiv);
      }
    });
    
    .addEventListener("click", (e) => {
      if (e.target.matches(".likeBtn")) {
        var clikedId = Number(e.target.dataset.pokid);
        const likeArr = pokemons.find((item) => {
          return item.id === clikedId;
        });
        if (!likesArr.find(item => item.id === clikedId)) {
          likesArr.push(likeArr);
          console.log(likesArr);
          localStorage.setItem('likes' ,  JSON.stringify(likesArr))
        }
        
        
        likeDiv.textContent = ``
        likesArr.forEach(item =>{
            let elLi = document.createElement('li')
            let elImg = document.createElement('img')
            let elTitle = document.createElement('p')
            let elBtn = document.createElement('button')
            let likebtn = document.createElement('button')
            elImg.src = item.img
            elTitle.textContent = item.name
            elBtn.textContent = 'More'
            likebtn.textContent = 'Like'
            elLi.append(elImg, elTitle, elBtn , likebtn)
            elBtn.dataset.pokid = item.id
            likeDiv.appendChild(elLi)
            elLi.classList.add('card')
            elBtn.classList.add('btn')
            likebtn.classList.add('likeBtn')
        })
        
      }
    });
  });
}
render(pokemons, cards);

pokemons.filter((item) => {
  item.weaknesses.forEach((innerItem) => {
    if (!selArr.includes(innerItem)) {
      selArr.push(innerItem);
    }
  });
});
let option = document.createElement("option");
option.textContent = "All";
option.value = "all";
elSelect.appendChild(option);
selArr.map((item) => {
  let option = document.createElement("option");
  option.textContent = item;
  option.value = item;
  elSelect.append(option);
});

elInput.addEventListener("keydown", (evt) => {
  let inpval = evt.target.value;
  let searched = pokemons.filter((item) => {
    return item.name.toLocaleLowerCase().includes(inpval);
  });
  render(searched, cards);
});
elSelect.addEventListener("change", (evt) => {

  let selval = evt.target.value;

  let searched =
    selval === "all"
      ? pokemons
      : pokemons.filter((item) => {
          return item.weaknesses.includes(selval);
        });
  render(searched, cards);
});

modalMain.addEventListener("click", (e) => {
  if (e.target.id === "main") {
    modalMain.style.transform = "scale(0%)";
  }
});

likesBtn.addEventListener("click", (e) => {
  e.preventDefault();
  

});
