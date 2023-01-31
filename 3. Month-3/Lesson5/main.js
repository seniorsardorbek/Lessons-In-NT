
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



//  function $(sel){
//     return document.querySelector(sel)
//  }


// const arr =[]
// let text =" "
// $("#form").addEventListener("submit",(e)=>{
//         e.preventDefault()
//         arr.push($("#searchName").value.split(" "))
        
//        for(val of arr){
//         if(val.lenght >  text.length ){
//             text = val
//         }
//        }
      
//      })
//      console.log(text);

var son = [3.02 , -3.02 , 2 , -3.65    ]

function yaxlit(son){
    for (i of son){
       if(i<0){
        console.log(Math.round( i * -1 )); 
       }else{
        console.log(Math.round( i  )); 
       }
    }
}
yaxlit(son)