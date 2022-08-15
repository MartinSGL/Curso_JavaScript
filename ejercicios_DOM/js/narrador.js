const d = document,
    w = window;

export default function speechReader(){
    const $speechSelect = d.getElementById('speach-select'),
        $speechTextarea = d.getElementById('speech-text'),
        $speechBtn = d.getElementById('speech-btn'),
        speechMessage = new SpeechSynthesisUtterance();
    
    let voices = [];

    d.addEventListener('DOMContentLoaded', e=>{
        w.speechSynthesis.addEventListener('voiceschanged', e=>{
            voices = w.speechSynthesis.getVoices();

            voices.forEach(v=>{
                const $option = d.createElement('option');
                $option.value = v.name;
                $option.textContent = `${v.name} *** ${v.lang}`;
                $speechSelect.appendChild($option);
            })
        })
    })

    d.addEventListener('change', e=>{
        if(e.target === $speechSelect){
            speechMessage.voice = voices.find(voice => voice.name === e.target.value)
            console.log(speechMessage.voice)
        }
    })

    d.addEventListener('click', e=>{
        if(e.target === $speechBtn){
            speechMessage.text = $speechTextarea.value
            w.speechSynthesis.speak(speechMessage);
        }
    })

}