let cards = document.querySelector('.cards')

 
console.log(cards);
 async function render(){
    const res = await fetch('http://universities.hipolabs.com/search?country=United+States')
    const data = await res.json()
        cards.innerHTML = ''
    data.forEach(element => {
        let li = document.createElement('li')
        let h1 = document.createElement('h1')
        let h2 = document.createElement('h2')
        let alink = document.createElement('a')
           h1.textContent  = element.country 
           h2.textContent = element.name
           alink.textContent  = 'Go web'
           alink.href  = element.web_pages.map(item => item)
           alink.setAttribute('target' , '_blank')
           li.append(  h1 , h2 ,  alink  )
           cards.appendChild(li)
    })
    
}
render()