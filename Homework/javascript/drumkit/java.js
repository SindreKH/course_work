"use strict"

const soundFolder = "./sounds/"
const soundList = [
 "saluting1.wav",
 "saluting2.wav",
 "saluting3.wav",
 "saluting4.wav"
]

const drumkitEl = document.getElementById("drumkit")

soundList.forEach((sound) =>{
    drumkitEl.append(createButton(sound, soundFolder + sound))

})

function createButton(buttonText, audioSource) {
    const buttonEl = document.createElement("button")
    buttonEl.textContent = buttonText
    const audioEl = createAudio(audioSource)
    buttonEl.addEventListener("click", function(){
        audioEl.play()
    })
    return buttonEl
}

function createAudio(source) {
    const audioEl = document.createElement("audio")
    audioEl.src = source
    return audioEl
}