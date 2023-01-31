// ? scopes => Global scope, Local or Function scope, Block scope



// const arr = []; // Global scope

// function sayHello(item){
//   const localScope ="Local scope" // Local scope
//   arr.push(item)
//   console.log(localScope);
// }

// sayHello("Hello")
// console.log(arr);


// {
//   const item = "item" // Block scope
// }
// console.log(item);


// ? var in scopes

// if(true){
//   var item = "Item"
// }

// console.log(item);

// function say (){
//   var item1 = "item1"
// }

// console.log(item1);

// ? Amaliyot
 

// const btnEl 






























// function $ (sel) {
//   return document.querySelector(sel)
// }
// let arr = [3,3,3]

// let le = arr.length
// function there (a , b){
//     if(le === 0){
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

// const arr = []
// let text = ' '

// $('#form').addEventListener('submit', e => {
//   e.preventDefault()
//   arr.push($('#searchName').value.split(' '))
//   let searchName = $('#Name').value
//   console.log(searchName) 
//   if(arr[0].includes(searchName,0)){
//     text ="Qidiruvdagi ism oldin kiritilgan";
//   }else{
//     arr[0].push(searchName)
//     text = 'ism yuq ekan endi qoshildi'
//   }
//   $(".text").textContent = text
// })
// console.log(arr);
// var son = [3.02 , -3.02 , 2 , -3.65    ]

// function yaxlit(son){
//     for (i of son){
//        if(i<0){
//         console.log(Math.round( i * -1 ));
//        }else{
//         console.log(Math.round( i  ));
//        }
//     }
// }
// yaxlit(son)


// !                                Topshiriq 1 va   3
// const arre = [[1,2],[3,4],[5,6],[7,8]]
// const arrs =[]
// function arrays(){
//    for(i=0; i<arre.length ; i++){
//     for(item of arre[i]){
//       arrs.push(item)
//     }
//    }
// }
// arrays(arre)
// console.log(arrs);
// console.log(arrs.reverse());




// !                           4
// let arr = [1,101, 2, 3, 4 , 4, 5, 6, 7 , 8, 7, 78 ,98 ,78 ,101 ,"sardor", "sardor"]
// arr = arr.sort(function (a, b) {  return a - b;  });
// function findsame(){
//   for(i=0; i<arr.length; i++ ){
//     if(arr[i] === arr[i+1]){
//       console.log(arr[i+1])
//     }
//   }
// }
// findsame(arr)

// !                         5
// let no = 0
// function blabla(num){
//   for(i=0;i<=num;i++){
//     no += i
//   }
// }
// blabla(6)
// console.log(no);