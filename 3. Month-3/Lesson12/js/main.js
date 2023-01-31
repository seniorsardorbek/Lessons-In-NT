// webkit Speech Recognition =>

// const recognition = new webkitSpeechRecognition();
// const speechRecognitionList = new webkitSpeechGrammarList();
// console.log(recognition);

// recognition.grammars = speechRecognitionList;
// recognition.continuous = false;
// recognition.lang = 'en-Us';
// recognition.interimResults = false;
// recognition.maxAlternatives = 1;

// document.body.onclick = () => {
//     recognition.start();
//     console.log('Ready to receive a color command.');
// };

// document.body.onclick = () => {
//     recognition.start();
//     console.log('Ready to receive a color command.');
// };
// // const arr =["qizil","yashil","ko'k"]

// recognition.onresult = (event) => {
//     //  console.log(event.results[0][0].transcript);
//     const saidcolor = event.results[0][0].transcript
//     console.log(saidcolor);
//     // if(saidcolor ==arr[0]){
//     // document.body.style.background ="red"
//     // }
//     document.body.style.background =saidcolor
//     document.querySelector("#demo").innerHTML = saidcolor

// }

//  // //  Create element =>

// const element = document.createElement("h1")
// const element1 = document.createElement("h1")
// element.textContent="Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt ipsum excepturi, labore molestiae pariatur sequi! Fugit culpa debitis, dignissimos aut, nulla ad deleniti impedit ipsam ex perspiciatis excepturi eos. Eveniet."
// element1.textContent="Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt ipsum excepturi, labore molestiae pariatur sequi! Fugit culpa debitis, dignissimos aut, nulla ad deleniti impedit ipsam ex perspiciatis excepturi eos. Eveniet."
// console.log(element);
// // element.classList.add(".red")
// const div =document.createElement("div")
// div.append(element,element1)
// document.body.appendChild(div)
// console.log(div);
// // document.body.appendChild(element);

//  // padStart vs padEnd =>

// const text ="Hello"
// text.padStart(10,"+")

// console.log(text.padStart(10,"+"));
// console.log(text.padEnd(10,"-"));

//  // ASCII =>

// console.log("A" > "a"); 