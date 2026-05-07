let speech=new SpeechSynthesisUtterance();

let voices=[];

let voiceSelect=document.querySelector("select")

window.speechSynthesis.onvoiceschanged=()=>{
    // all voices available on the device
    voices=window.speechSynthesis.getVoices();

    // default is the first voice
    speech.voice=voices[0];  

    // displaying in the dropdown
    voices.forEach((voice,i) => (voiceSelect.options[i] = new Option(voice.name,i)));
};

//to change the speech voice according to what is selected
voiceSelect.addEventListener("change", () => {
    speech.voice=voices[voiceSelect.value];
});

document.querySelector("button").addEventListener("click",()=>{
    speech.text=document.querySelector("textarea").value;
    window.speechSynthesis.speak(speech);
});