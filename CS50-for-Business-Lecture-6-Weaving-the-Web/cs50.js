// speak function
document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('form').addEventListener('submit', function(e) {
        let name = document.querySelector('#name')
        let utterance = new SpeechSynthesisUtterance(`hello, ${name}`)
        window.speechSynthesis.speak(utterance);
        e.preventDefault()
    })
})