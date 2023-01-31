// webkit-Speech.Recognition =>

const recognition = new webkitSpeechRecognition();
const speechRecognitionList = new webkitSpeechGrammarList();
console.log(recognition);

recognition.grammars = speechRecognitionList;
recognition.continuous = false;
recognition.lang = 'en-Us';
recognition.interimResults = false;
recognition.maxAlternatives = 1;

// const body = document.querySelector("#body")

// document.body.onclick = () => {
//     recognition.start();
//     console.log('Ready to receive a color command.');
// };

document.body.onclick = () => {
    recognition.start();
    console.log('Ready to receive a color command.');
};
const arr =["red","green","blue"]

recognition.onresult = (event) => {
     console.log(event.results[0][0].transcript);
    const saidcolor = event.results[0][0].transcript
    console.log(saidcolor);
    if(saidcolor == arr[0]){
    document.body.style.background ="red"
    }
    document.body.style.background = saidcolor
    document.querySelector("#demo").innerHTML = saidcolor

}