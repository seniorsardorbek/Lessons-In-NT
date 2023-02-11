const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
    autoplay: {
      delay: 5000,
    },
  });


  let menu = true
function menubar(){
  if(menu){
    document.querySelector('.menu-list').style.transform = 'translate(0%)'
    document.querySelector('.menu-list').style.visibility = 'visible'
    menu = false 
  }
  else {
    document.querySelector('.menu-list').style.transform = 'translate(100%)'
    document.querySelector('.menu-list').style.visibility = 'hidden'
    menu = true
    }
}

let token  = localStorage.getItem('token')
if(!token){
  window.location.replace('login.html')
}