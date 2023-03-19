/*
quiz spørsmål og svar:

1. What is the purpose of the `console.log()` function?
"To print output to the console", 
"To create a new line in the console", 
"To clear the console"

riktig: "To print output to the console"

2. Which of the following is the correct way to create an audio element in javascript ?
"let audioPlayer = new Audio('sounds/clap.wav');",
"let audioPlayer = new audio('sounds/clap.wav');",
"let audioPlayer = createAudio('sounds/clap.wav');"

riktig: "let audioPlayer = new Audio('sounds/clap.wav');"

*/

const quizQuestions = [
  {
    question: "What is the purpose of the `console.log()` function?",
    choices: [
      "To print output to the console", 
      "To create a new line in the console", 
      "To clear the console"
    ],
    correctAnswers: ["To print output to the console"],
    usersAnswer: []
  }
]

const quizEl = document.getElementById("quiz")


function displayQuestion(prompt) {

  const { question, choices } = prompt

  /*
  <p>Question?</p>

  <label>
    <input type="checkbox">
    Alternative #x
  </label>
  <label>
    <input type="checkbox">
    Alternative #y
  </label>

  <button>Submit</button>
  */

  const questionContainer = document.createElement("div")


  const questionEl = document.createElement("p")
  questionEl.textContent = question

  const choiceElements = choices.map((value) => {
    const choice = document.createElement("input")
    choice.type = "checkbox"
    
    const labelEl = document.createElement("label")
    labelEl.textContent = value

    labelEl.append(choice)

    return labelEl
  })

  console.log(choiceElements)



  const submitButton = document.createElement("button")
  submitButton.textContent = "Submit"

  // legg til event listener til submitButton

  questionContainer.append(
    questionEl,
    ...choiceElements, 
    submitButton
  )  

  return questionContainer
}

let tempVar = displayQuestion(quizQuestions[0])

quizEl.append(tempVar)







/*
let choiceElementsV1 = []

  choices.forEach((value) => {
    
    const choice = document.createElement("input")
    choice.type = "checkbox"
    
    const labelEl = document.createElement("label")
    labelEl.textContent = value

    labelEl.append(choice)

    choiceElementsV1.push(labelEl)
  })
*/