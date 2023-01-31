function $(selector){
    return document.querySelector(selector)
}




const arr = [];

const form = document.querySelector("#form");
// const btn =$("#btn")

form.addEventListener("submit", event => {
    event.preventDefault();
    const name = document.querySelector("#name");
    arr.push(name.value);
    name.value =""
    // name.textContent= "1"
    // console.log(arr);
    if(arr.length===10){
        document.querySelector('#btn').disabled = true;
    }


    if(arr.length === 1 ){
        $("#namesarr").textContent = `O'yinchilar: ${arr[0]}`

    }
    else if(arr.length === 2){
        $("#namesarr").textContent = `O'yinchilar: ${arr[0]} ${arr[1]}`
    }
    else if(arr.length === 3){
        $("#namesarr").textContent = `O'yinchilar: ${arr[0]} ${arr[1]} ${arr[2]}`
    }
    else if(arr.length === 4){
        $("#namesarr").textContent = `O'yinchilar: ${arr[0]} ${arr[1]} ${arr[2]} ${arr[3]}`
    }
    else if(arr.length === 5){
        $("#namesarr").textContent = `O'yinchilar: ${arr[0]} ${arr[1]} ${arr[2]} ${arr[3]} ${arr[4]}`
    }
    else if(arr.length === 6){
        $("#namesarr").textContent = `O'yinchilar: ${arr[0]} ${arr[1]} ${arr[2]} ${arr[3]} ${arr[4]} ${arr[5]}`
    }
    else if(arr.length === 7){
        $("#namesarr").textContent = `O'yinchilar: ${arr[0]} ${arr[1]} ${arr[2]} ${arr[3]} ${arr[4]} ${arr[5]} ${arr[6]}`
    }
    else if(arr.length === 8){
        $("#namesarr").textContent = `O'yinchilar: ${arr[0]} ${arr[1]} ${arr[2]} ${arr[3]} ${arr[4]} ${arr[5]} ${arr[6]} ${arr[7]}`
    }
    else if(arr.length === 9){
        $("#namesarr").textContent = `O'yinchilar: ${arr[0]} ${arr[1]} ${arr[2]} ${arr[3]} ${arr[4]} ${arr[5]} ${arr[6]} ${arr[7]} ${arr[8]}`
    }
    else if(arr.length === 10){
        $("#namesarr").textContent = `O'yinchilar:  ${arr[0]} ${arr[1]} ${arr[2]} ${arr[3]} ${arr[4]} ${arr[5]} ${arr[6]} ${arr[7]} ${arr[8]} ${arr[9]} `
    }
    // for(i=0;i<arr.length ; i++){
        // $("#namesarr").textContent = `O'yinchilar: ${arr[0]}${arr[1]}${arr[2]}${arr[3]}${arr[4]}${arr[5]}${arr[6]}${arr[7]}${arr[8]}${arr[9]}`
    // }
    // $("#namesarr").textContent = `O'yinchilar:`
});

const acommand =[]
const bcommand =[]
document.querySelector("#render").addEventListener("click", ()=>{
    const numa = arr.length/2
    
    // console.log(arr.length/2)
    
   if(arr.length%2 === 0){
    for(i=0;i<numa ; i++){
        const randomUser = Math.ceil(Math.random() * (arr.length  ));
        acommand.push(arr.splice(randomUser , 1)[0])
    }
    bcommand.push(arr)
    console.log(acommand);
    console.log(bcommand);
    

    const l1 =$("#list-1");
    const l2 =$("#list-2");
    const l3 =$("#list-3");
    const l4 =$("#list-4");
    const l5 =$("#list-5");
    const l6 =$("#list-6");
    const l7 =$("#list-7");
    const l8 =$("#list-8");
    const l9 =$("#list-9");
    const l10 =$("#list-10");
    
    l1.textContent =acommand[0]
    l2.textContent =acommand[1]
    l3.textContent =acommand[2]
    l4.textContent =acommand[3]
    l5.textContent =acommand[4]
    l6.textContent =bcommand[0][0]
    l7.textContent =bcommand[0][1]
    l8.textContent =bcommand[0][2]
    l9.textContent =bcommand[0][3]
    l10.textContent =bcommand[0][4]
   }else{
    $("#error").textContent =`O'yinchilar soni yetarli emas`
   }

    
})
const reload = $("#reload")
reload.addEventListener("click",()=>{
    window.location.reload();
})