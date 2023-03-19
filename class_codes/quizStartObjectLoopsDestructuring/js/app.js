"use strict"
let currentQuestion = 0
let score = 0

const quizQuestions = [
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
  {
    question: "Which of the following is the correct way to create an audio element in javascript ?",
    choices: [
      "let audioPlayer = new Audio('sounds/clap.wav');",
      "let audioPlayer = new audio('sounds/clap.wav');",
      "let audioPlayer = createAudio('sounds/clap.wav');"],
    correctAnswers: ["let audioPlayer = new Audio('sounds/clap.wav');"],
    usersAnswer: []
  }, 
  {
    question: "When defining a class, which of the following methods is called when a new instance of the class is created?",
    choices: [
      "init",
      "create",
      "constructor"],
    correctAnswers: ["constructor"],
    usersAnswer: []
  },
]


const someData = {
  text: "hei",
  time: "igår",
  tall: 12345
}

let myMsg = "text"

/* console.log(
  someData[myMsg]
)

// noe skjer her
myMsg = "time"
console.log(
  someData[myMsg]
)

 */

/* console.log(
  Object.keys(someData)
)
console.log(
  Object.values(someData)
)
console.log(
  Object.entries(someData)
) */

for (const property of Object.entries(someData)) {
  // console.log(property[0], property[1])
  //const key = property[0]
  //const value = property[1]
  const [key, value] = property


  // console.log(key, value)
}

// for keys only, and not values, you can use "for ... in loop":
for (const property in someData) {
  // console.log(property)
}

const quizEl = document.getElementById("quiz")

function createElement(type = "div", props = {}) {

  const element = document.createElement(type)
  for (const property of Object.entries(props)) {
    const [key, value] = property
    element[key] = value 
  }

  return element
}

//const egenskaper = {textContent: "hei fungerer dette?"}

const container = createElement()

const title = createElement("h4", {textContent: "hei fungerer dette?"})

const article = createElement(
  "p", {textContent: "lorem impsum", style: "color: green;"})

const checkbox = createElement("input", {type: "checkbox"})

// quizEl.append(container, title, article, checkbox)

function displayQuestion(prompt) {
  const { question, choices } = prompt

  const scoreElement = createElement("h2", {textContent: `Score: ${score}`})
  //scoreElement.textContent = `Score: ${score}`

  const questionContainer = document.createElement("div")
  const questionEl = document.createElement("p")
  questionEl.textContent = question

  const choiceElements = choices.map((value) => {
    const labelEl = document.createElement("label")
    labelEl.textContent = value

    const choice = document.createElement("input")
    choice.type = "checkbox"

    choice.addEventListener("click", () => {

      // if answer is not in the usersAnswer array, then add it, otherwise remove this value from usersAnswer array
      if (!quizQuestions[currentQuestion].usersAnswer.includes(value)) {
        quizQuestions[currentQuestion].usersAnswer.push(value)
      }
      else {
        quizQuestions[currentQuestion].usersAnswer = quizQuestions[currentQuestion].usersAnswer
          .filter((answer) => {
            if (answer === value) return false
            else return true
          })
      }

      console.log(quizQuestions[currentQuestion].usersAnswer)
    })
    

    labelEl.append(choice)

    return labelEl
  })

  const submitButton = document.createElement("button")
  submitButton.textContent = "Submit"

  // legg til event listener til submitButton
  submitButton.addEventListener("click", () => {
    quizQuestions[currentQuestion].usersAnswer.forEach((answer) => {
      let isAnswerCorrect = quizQuestions[currentQuestion].correctAnswers.includes(answer)
      
      if (isAnswerCorrect) score += 1
      else score -= 1
    })

    // console.log("Your score is: " + score)
    scoreElement.textContent = `Score: ${score}`

    // check if we are at the last question already, if so just "terminate"
    if (currentQuestion >= (quizQuestions.length - 1) ) return

    // go to next question
    currentQuestion += 1
    // remove current question html elements with innerHTML:
    quizEl.innerHTML = ""
    // alternatively we can remove the elements this way:
    // while (quizEl.firstChild) quizEl.firstChild.remove()

    // display the next question
    let questionElements = displayQuestion(quizQuestions[currentQuestion])
    quizEl.append(questionElements)
  })

  questionContainer.append(
    scoreElement,
    questionEl,
    ...choiceElements, 
    submitButton
  )  

  return questionContainer
}

function startQuiz() {
  currentQuestion = 0
  score = 0

  let questionElements = displayQuestion(quizQuestions[currentQuestion])
  quizEl.append(questionElements)
}

startQuiz()




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