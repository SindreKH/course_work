/*
x Lag en form og en container som skal liste todolist items
x Legg til en input text field i formen
x Legg til en submit knapp til formen

x Lag en funksjon som skal lagre todolist items i et array
Legg til fjern funksjonalitet sånt at en todolist item kan bli fjernet fra todolisten

Senere: se på browserstorage
*/

// array containing todolist items
const todolist = []

// select form elements
const todoFormEl = document.getElementById("todo-form")
const todoFormTextEl = todoFormEl.querySelector("input")
// select todolist container
const todoItemsContainer = document.getElementById("todolist-items")

// add form event handler:
todoFormEl.addEventListener("submit", handleForm)

function handleForm(event) {
  event.preventDefault()

  // check if input is valid
  if (todoFormTextEl.value.length < 3) return
  // if (todoFormTextEl.value.includes(" ")) return

  addTodo()
}

function addTodo() {
  // add item to todolist array:
  const todoId = Date.now()
  todolist.push({
    name: todoFormTextEl.value,
    id: todoId
  })
  // add item to the page:
  const todoItemEl = document.createElement("p")
  todoItemEl.textContent = todoFormTextEl.value

  const removeTodoButton = document.createElement("button")
  removeTodoButton.textContent = "Remove"
  removeTodoButton.addEventListener("click", () => removeTodo(todoId, todoItemEl))

  todoItemEl.append(removeTodoButton)

  todoItemsContainer.append(todoItemEl)
  //todoItemsContainer.textContent = `<p>${todoFormTextEl.value}</p>`
}

function removeTodo(todoId, todoElement) {
  todoElement.remove()
  console.log("removing todo with id: ", todoId)

  // removing todo with id:  1678699360128
}

const currentTimeStamp = Date.now() // 1678699158972

console.log(currentTimeStamp)