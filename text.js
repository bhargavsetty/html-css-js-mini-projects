let speech=new SpeechSynthesisUtterance();

let vioces=[];

let vioceSelect = document.querySelector("select");

window.speechSynthesis.onvoiceschanged=()=>{
    voices=window.speechSynthesis.getVoices();
    speech.voice=voices[0];

    voices.forEach((voice,i)=>(vioceSelect.options[i]=new Option(voice.name,i)))
};

vioceSelect.addEventListener("change",()=>{
    speech.voice=voices[vioceSelect.value];
});

document.querySelector("button").addEventListener("click",()=>{
    speech.text=document.querySelector("textarea").value;
    window.speechSynthesis.speak(speech);
});