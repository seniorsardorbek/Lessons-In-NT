// let arr = [3,3,3]

// let le = arr.length
// function there (a , b){
//     if(le === 0){main.js
//         return false
//     }else {
//      return a.every((vall )=> vall===b )}
// }

// console.log(there(arr , 3));
// let wer = null
//  $("#form").addEventListener("submit",(e)=>{
//     e.preventDefault()
//     arr.push($("#searchName").value)
//     wer = arr.every((vall )=> vall===$("#Name").value )
//  })
//  console.log(wer);


// const arr =[]
// let text =" "
// arr.every((val) => val===2)
//         e.preventDefault()     
//         arr.push($("#searchName").value.split(" "))

//        for(val of arr){
//         if(val.lenght >  text.length ){
//             text = val
//         }
//        }

//      })
//      console.log(text);

// var son = [3.02, -3.02, 2, -3.65];

// function yaxlit(son) {
//   for (i of son) {
//     if (i < 0) {
//       console.log(Math.round(i * -1));
//     } else {
//       console.log(Math.round(i));
//     }
//   }
// }
// yaxlit(son);

// Lesson 1

//? Regural function vs Arrow function
// //! Declaration
// function showThis(){
//   console.log(this);
// }
// showThis()

// //! Arrow function
// const  showThis2 =()=>{
//   console.log(this);
// }
// showThis2()

// const obj = {
//   name: "Object",
//   showThis: function () {
//     console.log(this);
//   },
//   showThis2: () => {
//     console.log(this);
//   },
//   showThis3(){
//     console.log(this);
//   }
// };
// console.log(this);
// obj.showThis();
// obj.showThis2();
// obj.showThis3();

// !Array methods
// const arr =[1,2,3,4,5,6,7,]
// const arrString =["sardor" ,"diyor" , "elshod","bobur"]

//? Array methods
// const arr = [1, 2, 3, 4, 5, 6, 7, 8];
// const stringArr = ["Ravshan", "Abror", "Eshmat", "Toshmat", "Do'smat"];


// console.log(arr.includes(2, 0));
// console.log(stringArr.includes("Abror", 0));

// let x = 0;

// arr.forEach((val, i) => {
//   console.log(i);
//   x += val;
// });
// console.log(x);
// !some vs every
// console.log(arr.every((val) => val === 2));
// console.log(arr.every((val) => val !== 2));
// console.log(arr.some((val) => val === 2));
// console.log(arr.some((val) => val !== 2));  


// function $(sel){
//     return document.querySelector(sel)
//  }

// $("#form").addEventListener("submit",(e)=>{
//      e.preventDefault()
//     let piyoda = 0
//     let velo = 0
//     let car = 0
//     let plane = 0
//     speed($("#searchName").value)
//     function speed(masofa){
//       piyoda = Math.round(masofa / 3.6)
//       velo = Math.round(masofa/20.1)
//       car = Math.round(masofa/70)
//       plane = Math.round(masofa/800)
//     }
//     $(".speed-1").textContent = piyoda + ` soatda yetib boradi`
//     $(".speed-2").textContent = velo + ` soatda yetib boradi`
//     $(".speed-3").textContent = car + ` soatda yetib boradi`
//     $(".speed-4").textContent = plane + ` soatda yetib boradi`
// })



// let piyoda = 0
// let velo = 0
// let car = 0
// let plane = 0
// function speed(masofa){
//   piyoda = masofa / 3.6
//   velo = masofa/20.1
//   car = masofa/70
//   plane = masofa/800

// }
// speed(1000)



