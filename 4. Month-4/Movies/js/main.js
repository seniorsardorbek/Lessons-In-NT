let elForm = document.querySelector(".form");
let elInput = document.querySelector(".form-input");
let elList = document.querySelector(".list");

let API_KEY = "33f22703";

let listarr = JSON.parse(localStorage.getItem('list')) || []
console.log(listarr)

function render(arr , element){
   element.inerHTML = ''
   arr.map(item =>{
	let elItem = document.createElement('li')
	let elImg = document.createElement('img')
	let elTitle = document.createElement('h2')


	elImg.src = item.Poster
	elTitle.textContent = item.Title
	elItem.append(elImg , elTitle)
	element.appendChild(elItem)
   })
}
render(listarr.Search , elList)


elForm.addEventListener("click", (e) => {
  e.preventDefault();
  let inputVal = elInput.value;
  fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${inputVal}`)
    .then((res) => res.json())
    .then((data) => {
		render(data.Search , elList)
		window.localStorage.setItem('list' , JSON.stringify(data))
	})
});
