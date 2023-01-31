function km(a){
    let text = a / 1000 +"km"
    const headingEl = document.querySelector("#heading")
    headingEl.textContent = text
}
var x = parseInt(prompt("Enter a Number"))
let  num = parseFloat(x)
num = km(x)