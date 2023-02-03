let elForm = document.querySelector(".form");
let elInput = document.querySelector(".form-input");
let elList = document.querySelector(".list");

let API_KEY = "33f22703";

let listarr = JSON.parse(localStorage.getItem('list')) || [];
console.log(listarr);
// render(listarr.Search , elList)
let likeArr = JSON.parse(localStorage.getItem('likeId')) || []
function render(arr, element) {
	element.innerHTML = " ";
  arr.map((item) => {
    let movie_card = document.createElement("div");
    let info_section = document.createElement("div");
    let blur_back = document.createElement("div");
    let movie_header = document.createElement("div");
    let locandina = document.createElement("img");

    let elTitle = document.createElement("h1");
    let elData = document.createElement("h4");
    let minutes = document.createElement("span");

    let movie_desc = document.createElement("div");
    let text = document.createElement("p");
    let movie_social = document.createElement("div");
    // let heart = document.createElement("button");
    // let play = document.createElement("button");

    movie_card.classList.add("movie_card");
    movie_card.id = "bright";
    info_section.classList.add("info_section");
    blur_back.classList.add("blur_back");
    movie_header.classList.add("movie_header");
    locandina.classList.add("locandina");
    minutes.classList.add("minutes");

    movie_desc.classList.add("movie_desc");
    text.classList.add("text");
    movie_social.classList.add("movie_social");
    // heart.classList.add("button");
    // play.classList.add("button");
   movie_social.innerHTML = `
   <button class="btn"  onclick="like('${item.imdbID}')" ><i class="fa-regular fa-heart"></i></buttton>
   <button class="btn" ><i class="fa-solid fa-play"></i> </button> 
   `



    locandina.src = item.Poster;
    elTitle.textContent = item.Title;
    elData.textContent = item.Year;
    minutes.textContent = 100;
    text.textContent = `Set in a world where fantasy creatures live side by side with
	  humans. A human cop is forced to work with an Orc to find a weapon
	  everyone is prepared to kill for.`;
    movie_card.style.backgroundImage = `url(${item.Poster})`;
    movie_header.append(locandina, elTitle, elData, minutes);
    movie_desc.append(text);

    info_section.append(movie_header, movie_desc, movie_social);
    movie_card.append(info_section, blur_back);
    element.appendChild(movie_card);
  });
}
elForm.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log('salom');
  let inputVal = elInput.value;
  fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${inputVal}`)
    .then((res) => res.json())
    .then((data) => {
    window.localStorage.setItem("list", JSON.stringify(data));
	  render(data.Search , elList)
      console.log(data.Search);

      
      
      
    });
  });
  function like(id ){
    // likeArr.push(id)
    !likeArr.includes( id ) && likeArr.push(id) 
    localStorage.setItem('likeId' , JSON.stringify(likeArr))
    console.log(likeArr);
  }