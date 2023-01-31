function $(selector){
    return document.querySelector(selector)
}


const form =$("#form")
const cards = $("#cards")
let alldata =[]

form.addEventListener("submit" , (event)=>{
    event.preventDefault()


    const image = $("#image").value
    const name = $("#name").value
    const message = $("#message").value
    
let userObj ={
    userimage:image,
    username:name,
    usermessage:message,
}
 
alldata.push(userObj)
render()
})

function render(){
      cards.innerHTML = ""

    for(i=0;i<alldata.length ; i++){
        addcard =`<img src="${alldata[i].userimage}" alt="" width="300">
            <div class="text">
                <h4>${alldata[i].username}</h4>
                <p>${alldata[i].usermessage}</p>
            </div>
            `
            cards.innerHTML = cards.innerHTML + addcard
    }
    
}























