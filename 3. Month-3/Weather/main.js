function $(sel) {
  return document.querySelector(sel);
}
function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

let form = $("#form");
let cell = null;
let datas = null;
let weather = null;
form.addEventListener("submit", (e) => {
  e.preventDefault();

  let country = $("#searchCountry").value;
  country = country.toLowerCase();
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${country}&appid=ca2ee2bac201d9139492c9c38259f2e4`
  )
    .then((response) => response.json())
    .then((data) => {
      datas = data;
    });

  weather = datas.weather[0].main;

  console.log(weather);

  cell = Math.ceil(datas.main.temp);
  cell -= 273;

  console.log(datas);
  let video = $("#videos");
  
  $("#heading").innerHTML = `<span id="heading">${capitalizeFirstLetter(
    country
  )}   </span><span>${cell} &#176</span>`;

   if(weather=== "Clouds"){
    console.log("salom");
   }else if (weather=== "Clear") {
    console.log("xayr");
   }


});
