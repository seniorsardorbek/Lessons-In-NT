const recognition = new webkitSpeechRecognition( );
const speechRecognitionList = new webkitSpeechGrammarList();
recognition.grammars = speechRecognitionList;
recognition.continuous = false;
recognition.lang = 'en_EN';
recognition.interimResults = false;
recognition.maxAlternatives = 1;


console.log(recognition);
console.log(speechRecognitionList);

document.body.onclick = () => {
    recognition.start()
    console.log('Ready to receive a color command.');
    
};
    recognition.onresult = (event) => {
    let  result = event.results[0][0].transcript
    console.log( event)
    document.body.style.background = result
    console.log('salom');
}

