

// function dtm(ball , pul){
//     if (ball < 60 ){
//        text = "Siz normativ ball ham olomapsiz"
//     }
//     else if(ball <=101  ){
//         if(pul >= 3000){
//             text = 'Siz super asosida oqiy olasiz'
//         }else{
//             text =` Siz super kontrakt asosida oqish uchun yetarli mablag mavjud emas`
//         }
//     }
//     else if (ball <=170  ){
//         if(pul >= 2000){
//             text = 'Siz kontrakt asosida oqiy olasiz'
//         }else{
//             text =` Siz  kontrakt asosida oqish uchun yetarli mablag mavjud emas`
//         }
//     }
//     else if (ball <=189 ){
//         text = "Siz grand asosida oqishga qabul qilindingiz Pulingizga abed qivoring"
//     }
//     else{
//        text = "Siz notugri malumot kiritdingiz"
//     }
//     const headingEl = document.querySelector("#heading")
//     headingEl.textContent = text
//     }


//     let  ball = prompt('Balingizni yozing')
// let  sum = prompt('Oqish uchun qancha pulingiz bor ')
// ball = dtm(ball , sum)







// // function kalku(a, amal ,c){
    // //     // let a = prompt("A sonni kiriting")
    // //     // let b = prompt("B sonni kiriting")
// //     // let amal = prompt("amalni kiriting")
// //     let result = a + amal + c
// //     console.log(result)
// // }

// // // let a = prompt("A sonni kiriting")
// // // let c = prompt("B sonni kiriting")
// // // let amal = prompt("amalni kiriting")
// // kalku(1 ,2 
// //     )
// function squad (a , b){
//    alert(a**b)
// }
// let a = prompt("a son")
// let b = prompt("b son")
// squad(a , b)

// function funksiya(a , b , c){
//     if(a > b && b > c ){
//         console.log(true)
//     }else{
//         console.log(false)
//     }
// }
// funksiya(3 , 2 , 3)



    const headingEl = document.querySelector("#heading")


function fizzBuzz(a ){
    if (a  % 3 == 0 && a  % 5 == 0 ){
      return "FizzBuzz"
 }
    else if (a  % 5 == 0){
        return "Fizz"
    }
    else if (a  % 3 == 0  ){
       return "Buzz"
    } 
}
let a =prompt("a sonni kiriting")

headingEl.textContent = fizzBuzz(a)