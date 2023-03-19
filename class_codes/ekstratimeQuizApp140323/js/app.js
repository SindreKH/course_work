import  { quizQuestions } from "./data/quizQuestions.js"

import { mySecretData } from "./data/quizQuestions.js" 

import getData from "./data/someData.js"


getData()
/*
{
    question: "What is the purpose of the `console.log()` function?",
    choices: [
      "To print output to the console", 
      "To create a new line in the console", 
      "To clear the console",
      "To debug code"
    ],
    correctAnswers: ["To print output to the console", "To debug code"],
    usersAnswer: []
  },
*/

let currentQuestion = 0
let score = 0

const quizEl = document.getElementById("quiz")


function createElement(type = "div", props = {}) {
  const element = document.createElement(type)

  for (const property of Object.entries(props)) {
    const [key, value] = property
    // sjekk om "key" er en valid html property (F.eks: textContent er valid). Returnerer true eller false.
    if (key in element) element[key] = value
  }

  return element
}

function displayQuestion(prompt) {
  //const question = prompt.question
  //const choices = prompt.choices
  
  const { question, choices } = prompt

  const scoreElement = createElement("h2", {textContent: `Score: ${score}`})
  const questionContainer = createElement()
  const questionEl = createElement("p", {textContent: question})

  const choiceElements = choices.map(function(value) {

    const labelEl = createElement("label", {textContent: value})
    const choice = createElement("input", {type: "checkbox"})

    choice.addEventListener("click", () => {

      // usersAnswer peker til quizQuestions[currentQuestion].usersAnswer objektet. Pga. måten objects/arrays fungerer kan vi pushe til denne variablen, og den til da oppdatere quizQuestions[currentQuestion].usersAnswer
      let usersAnswer = quizQuestions[currentQuestion].usersAnswer
      // if answer is not in the usersAnswer array, then add it, otherwise remove this value from usersAnswer array
      if (!usersAnswer.includes(value)) 
        usersAnswer.push(value)
      else {
        const findAnswerIndex = usersAnswer.indexOf(value)
        usersAnswer.splice(findAnswerIndex, 1)
        /* quizQuestions[currentQuestion].usersAnswer = usersAnswer
          .filter((answer) => {
            //console.log("answer is " + answer)
            //console.log("value is " + value)
            //if (answer === value) return false
            //else return true 
            if (answer !== value) return true
          }) */
      }

      console.log(usersAnswer)
    })
    
    labelEl.append(choice)

    return labelEl
  })

  const submitButton = createElement("button", {textContent: "Submit"})
  // legg til event listener til submitButton
  submitButton.addEventListener("click", () => updateScore(scoreElement))

  questionContainer.append(
    scoreElement,
    questionEl,
    ...choiceElements, 
    submitButton
  )  

  return questionContainer
}

function updateScore(scoreElement) {
  quizQuestions[currentQuestion].usersAnswer.forEach((answer) => {
    let isAnswerCorrect = quizQuestions[currentQuestion].correctAnswers.includes(answer)
    
    if (isAnswerCorrect) score += 1
    else score -= 1
  })

  scoreElement.textContent = `Score: ${score}`
  // check if we are at the last question already, if so just "terminate"
  if (currentQuestion >= (quizQuestions.length - 1) ) {
    endQuiz()
    return
  }
  // go to next question
  currentQuestion += 1
  // remove current question html elements with innerHTML:
  quizEl.innerHTML = ""
  // alternatively we can remove the elements this way:
  // while (quizEl.firstChild) quizEl.firstChild.remove()

  // display the next question
  let questionElements = displayQuestion(quizQuestions[currentQuestion])
  quizEl.append(questionElements)
}

function endQuiz() {
  quizEl.innerHTML = ""
  const endQuizMessage = createElement("h2", {
    textContent: 
    `You completed the quiz, your final score is ${score}.`
  })
  const startQuizButton = createElement("button", {textContent: "Start quiz"})

  startQuizButton.addEventListener("click", startQuiz)

  quizEl.append(endQuizMessage, startQuizButton)
}

function startQuiz() {
  quizEl.innerHTML = ""
  currentQuestion = 0
  score = 0

  let questionElements = displayQuestion(quizQuestions[currentQuestion])
  quizEl.append(questionElements)
}

function welcomeMessage() {
  const welcomeMessage = createElement("h2", {
    textContent: 
    `To start the quiz, click "Start quiz".`
  })
  const startQuizButton = createElement("button", {textContent: "Start quiz"})

  startQuizButton.addEventListener("click", startQuiz)

  quizEl.innerHTML = ""
  quizEl.append(welcomeMessage, startQuizButton)
}

welcomeMessage()

// startQuiz()

// endQuiz()