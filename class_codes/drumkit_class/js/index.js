// trun on strict mode:
"use strict"

// folder and array containing sound files:
const soundFolder = "./sounds/"
const soundList = [
  "clap.wav",
  "hihat.wav",
  "kick.wav",
  "openhat.wav",
  "ride.wav",
  "snare.wav",
  "tink.wav",
  "tom.wav"
]

// select the div container:
const drumkitEl = document.getElementById("drumkit")

// render the drumkit on the page
soundList.forEach((sound) => {

  drumkitEl.append(createButton(sound, soundFolder + sound) )
})

// create and return a button element:
function createButton(buttonText, audioSource) {
  // create a button, and set its textcontent
  const buttonEl = document.createElement("button")
  buttonEl.textContent = buttonText
  // create an audio element, and set its source atribute
  const audioEl = createAudio(audioSource)
  // add an event listener
  buttonEl.addEventListener("click", function() {
    audioEl.play()
  })
  // return the button
  return buttonEl
}

// create an audio element:
function createAudio(source) {

  const audioEl = document.createElement("audio")
  audioEl.src = source

  return audioEl
}



