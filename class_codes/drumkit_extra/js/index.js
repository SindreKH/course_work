// ressurser:
// https://www.w3schools.com/jsref/met_document_createelement.asp
// https://developer.mozilla.org/en-US/docs/Web/API/HTMLAudioElement
// https://www.w3schools.com/jsref/met_element_addeventlistener.asp

// turn on strict mode:
"use strict"

// folder and array containing sound files:
const soundFolder = "./sounds/"
const soundList = [
  {sound: "clap.wav", key: "1"},
  {sound: "hihat.wav", key: "2"},
  {sound: "kick.wav", key: "q"},
  {sound: "openhat.wav", key: "w"},
  {sound: "ride.wav", key: "a"},
  {sound: "snare.wav", key: "s"},
  {sound: "tink.wav", key: "z"},
  {sound: "tom.wav", key: "x"}
]

// her
const drumKitEl = document.getElementById("drumkit")

// lag audio element, og sett kilde:
function createAudio(audioFile) {
  const audioElement = document.createElement("audio")
  audioElement.src = "./sounds/" + audioFile

  return audioElement
}

//drumKitEl.innerHTML = "<button>click</button>"

// lag et element og lagre det i en variabel

const buttonEl = document.createElement("button")

// endre / lage text i en html element
buttonEl.textContent = "clap"
// buttonEl.innerText = "<b>click</b>"

// 
buttonEl.addEventListener("click", playClap )

function playClap() {
  const audioElement = createAudio("clap.wav")
  audioElement.play()
}

function playHihat() {
  const audioElement = createAudio("hihat.wav")
  audioElement.play()
}

////////////////////////////////////////

const buttonHihatEl = document.createElement("button")
buttonHihatEl.textContent = "Hihat"

buttonHihatEl.addEventListener("click", playHihat)


// 
drumKitEl.append(buttonEl, buttonHihatEl)




