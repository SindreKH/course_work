'use strict'
const quizDiv = document.getElementById("container")
const scoreEl = document.getElementById("points")

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
    {
      question: "Which of the following is the correct way to create an audio element in javascript ?",
      choices: [
        "let audioPlayer = new Audio('sounds/clap.wav');",
        "let audioPlayer = new audio('sounds/clap.wav');",
        "let audioPlayer = createAudio('sounds/clap.wav');"],
        correctAnswers: ["let audioPlayer = new Audio('sounds/clap.wav');"],
      usersAnswer: []
    }, 
  ]
  let score = 0
  
  function displayQuestion(questionArray, currentQuestion) {
    while (quizDiv.firstChild){
      quizDiv.removeChild(quizDiv.firstChild)
    }
    if (currentQuestion === quizQuestions.length){
    let endText = document.createElement("p")
    endText.textContent = `Congratulations, your score is ${score}`
    let restart = document.createElement("button")
    restart.textContent = "Restart"
    restart.addEventListener("click", ()=>{displayQuestion(quizQuestions, 0)})
    quizDiv.append(endText, restart)
    return
  }
  currentQuestion = currentQuestion
  let questionObj = questionArray[currentQuestion]
  const {question, choices, correctAnswers, usersAnswer} = questionObj
  
  let questionText = document.createElement("p")
  questionText.textContent = question
  
  let choicesContainer = document.createElement("div")
  choicesContainer.id = "choicesdiv"
  for (let index = 0; index < choices.length; index++) {
    const element = choices[index];
    let checkBox = document.createElement("input")
    checkBox.type="checkbox"
    checkBox.addEventListener("click", (event)=>{
      let usersChoice = event.target.parentElement.textContent
      if (usersAnswer.includes(usersChoice)){
        usersAnswer.splice(usersAnswer.indexOf(usersChoice, 1))
      } else {
        usersAnswer.push(usersChoice)
      }
      console.log(usersAnswer)

    })
    
    let userChoices = document.createElement("label")
    userChoices.textContent = element
    userChoices.append(checkBox)
    choicesContainer.append(userChoices)
  }
  let submitButton = document.createElement("button")
  submitButton.addEventListener("click",() =>{
    if (usersAnswer.length > 0){ 
    
      

      
      currentQuestion++
      displayQuestion(questionArray, currentQuestion)
      
    }
    
  })
  submitButton.textContent = "Submit"
  
  


  
  quizDiv.append(questionText, choicesContainer, submitButton)
}


displayQuestion(quizQuestions, 0)