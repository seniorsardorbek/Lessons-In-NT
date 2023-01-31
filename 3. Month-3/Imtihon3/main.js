function $(selector){
    return document.querySelector(selector)
}

const pizza ={
    ism:null,
    tel:null,
    addres:null,
    non:null,
    size:null,
    ustiga:[    ],
    plus:[],
}
let narx = 0

$("#form").addEventListener("submit", (event)=>{
    event.preventDefault()
    pizza.ism = $("#ism").value
    pizza.tel = $("#tel").value
    pizza.addres = $("#addres").value
    pizza.non =$("#nonid").value
   const size = document.getElementsByName("size")
   const ustiga = document.querySelectorAll(".up-plus")
   const plus = document.querySelectorAll(".plus")
   
   if(pizza.non === null && pizza.size === null){

   }
//    Qalinligi un
   if(pizza.non==="Yupqa"){
    narx += 10
   }
  else  if(pizza.non==="O'rtacha"){
    narx += 12
   }
   else if(pizza.non==="Qalin"){
    narx += 15
   }
//   Kattaligi un
   for(input of size){
    if(input.checked){
        pizza.size = input.value
        if(input.value==="25"){
                narx += 10
               }
               else  if(input.value==="30"){
                narx += 12
               }
               else if(input.value==="35"){
                narx += 15
               }
    }
   }
{
    
}

// Ustiga 
   for(item of ustiga){
       if(item.checked){
               pizza.ustiga.push(item.value)
           }
   }
     narx += (pizza.ustiga.length*5)
// Qoshimcha
   for(item of plus){
       if(item.checked){
               pizza.plus.push(item.value)
           }
   }
   narx += (pizza.plus.length*3)

   $(".ism").textContent = pizza.ism
   $(".tel").textContent = pizza.tel
   $(".manzili").textContent = pizza.addres
   $(".non").textContent = pizza.non
   $(".kattaligi").textContent = pizza.size
   $(".li-1").textContent = pizza.ustiga[0]
   $(".li-2").textContent = pizza.ustiga[1]
   $(".li-3").textContent = pizza.ustiga[2]
   $(".li-4").textContent = pizza.ustiga[3]
   $(".li-5").textContent = pizza.ustiga[4]
   $(".li-6").textContent = pizza.ustiga[5]
   $(".li-7").textContent = pizza.plus[0]
   $(".li-8").textContent = pizza.plus[1]
   $(".narx").textContent = `Narxi: ${narx}`
})