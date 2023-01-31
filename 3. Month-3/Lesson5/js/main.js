
function oddEven(a){
    
    if(a % 2 == 0){
        text = "Even"
    }
    else{
        text = "Odd"
    }
    const headingEl = document.querySelector("#heading")
    headingEl.textContent = text
}
let  son = prompt('sonni yozing')
son = oddEven(son)