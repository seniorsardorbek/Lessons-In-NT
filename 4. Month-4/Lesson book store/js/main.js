let likeBtn = document.querySelector(".like_btn");
let buy_btn = document.querySelector(".buy_btn");
let cartBtn = document.querySelector(".cart");
let cards = document.querySelector(".cards");
let qtyEl = document.querySelector(".qty");
let cardModal = document.querySelector(".card_modal");
let mainModal = document.querySelector(".main_modal");

// console.log( )
let likeArr = JSON.parse(localStorage.getItem("likeArr")) || [];
let cartArr = JSON.parse(localStorage.getItem("cartArr")) || [];

render(books, cards);
rendercart()

const cart = JSON.parse(localStorage.getItem("carts")) || {
  prods: [],
  totalPrice: 0,
  quantity: 0,
};



cartBtn.addEventListener("click", (e) => {
  console.log("work");
  cardModal.style.transform = "translate(0%)";
});
cardModal.addEventListener("click", (e) => {
  if (e.target.id === "modalMain") {
    cardModal.style.transform = "translate(100%)";
  }
});

function addcart(id, price) {
 
  if (!cartArr.includes(cartArr.find((item) => item.id === id))) {
    const foundProdIndex = cart.prods.findIndex((prod) => {
      return prod.id === id;
    });
     if (foundProdIndex === -1) {
        cart.prods.push({
          id,
          qty: 1,
        });
        cart.totalPrice += price;
        cart.quantity += 1
      } 
      else{
       cart.prods[foundProdIndex].qty +=1 
       cart.totalPrice += (cart.prods[foundProdIndex].qty * price ) 
    }
    cartArr.push(books.find((item) => item.id === id));
  } else {
    cartArr.splice(cartArr.findIndex(items => items === cartArr.find(item => item.id === id)), 1);
    // cart.quantity -= 1;
    qtyEl.textContent = cart.quantity;
  }

  console.log(cartArr);
  localStorage.setItem("cartArr", JSON.stringify(cartArr));

  render(books, cards);
  rendercart()
}

function likeadd(id) {
  if (!likeArr.find((item) => item.id === id)) {
    const carts = books.find((item) => {
      return item.id === id;
    });
    likeArr.push(carts);
  } else {
    console.log("salom");
    likeArr.splice(
      likeArr.findIndex(
        (item) => item === likeArr.find((fitem) => fitem.id === id)
      ),
      1
    );
  }
  localStorage.setItem("likeArr", JSON.stringify(likeArr));
  console.log(likeArr);
  render(books, cards);
  rendercart()
}

function render(arr, whr) {
  whr.innerHTML = "";
  arr.forEach((item) => {
    const temp = `
    <div class="card" style="width: 18rem;">
                <img src="${item.thumbnailUrl}" class="card-img-top" alt="${
      item.title
    }">
                <div class="card-body">
                  <h5 class="card-title">$${item.cost}/${item.title}</h5>
                  <p class="card-text">${item.authors}</p>
                  <p class="card-text"></p>
                  <button  onclick="addcart(${item.id}, ${
      item.cost
    })"  class="btn   buy_btn " >
    <i class="${
      !cartArr.find((likedBook) => likedBook.id === item.id)
        ? "fa-solid fa-cart-shopping"
        : "fa-brands fa-opencart"
    }"></i></i>
    </button>
                  <button onclick="likeadd(${item.id})"
                   class="btn   like_btn" 
                   '>
                   <i class= " ${
                     likeArr.find((likedBook) => likedBook.id === item.id)
                       ? "fa-solid"
                       : "fa-regular"
                   } fa-heart"></i></button>
                </div>
              </div>
    `;
    whr.innerHTML += temp;
  });
}
 function rendercart (){
  mainModal.innerHTML = ''
  cartArr.forEach((item)=>{
   const temp = `
   <div class="wrapper">
          <div class="product-img pImg">
            <img src="${item.thumbnailUrl}" height="420" width="327" />
          </div>
          <div class="product-info">
            <div class="product-text">
              <h1>${item.title}</h1>
              <h2>Categories:${item.categories}</h2>
              
            </div>
            <div class="product-price-btn">
              <p><span>${item.cost}</span>$</p>
              <button type="button" id="minusBtn" onclick="minus(${item.id} , ${item.cost})">-</button>
              <button type="button" id="plusBtn" onclick="plus(${item.id} , ${item.cost} )"  >+</button>
            </div>
          </div>
        </div>
   `
   mainModal.innerHTML += temp
  })
 }






 function plus(id , price){
  

}




function minus (id , price){
 
}