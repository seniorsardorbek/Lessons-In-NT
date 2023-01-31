const body1 = document.querySelector("#bodyid")
 function faster(){
    body1.classList.add("faster")
    body1.classList.remove("normal")
    body1.classList.remove("fast")
 }
 function normal(){
    body1.classList.add("normal")
    body1.classList.remove("fast")
    body1.classList.remove("faster")
 }
 function fast(){
    body1.classList.add("fast")
    body1.classList.remove("normal")
    body1.classList.remove("faster")
 }

 