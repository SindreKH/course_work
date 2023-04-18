'use strict'

const containerMain = document.getElementById("pkmncontainer")
const navBar = document.getElementById("navbar")
const pageChange = {default: "https://pokeapi.co/api/v2/pokemon?offset=0&limit=3", next:"", previous:""
}

async function getApi (url){
    const request = await fetch(url)
    const data = request.json()
    return data
}
async function startPage(url){
    const newData = await getApi(url)
    console.log(newData)
    const results = newData.results
    for (const data of results) {
        const pokeCard = await pokemonCard(data)
        containerMain.append(pokeCard)
        console.log(data)
    }
}
startPage(pageChange.default)

async function pokemonCard(obj){
    const {name, url} = obj
    const cardDiv = document.createElement("div")
    const pokemonName = name
    const pokemonTitle = document.createElement("h1")
    pokemonTitle.textContent = pokemonName
    const imageContainer = document.createElement("img")
    const currentPokemon = await getApi(url)
    const pokemonPicture = currentPokemon.sprites.front_default
    imageContainer.src = pokemonPicture
    cardDiv.append(pokemonTitle, imageContainer)
    return cardDiv
}
function navBarBack(){
    const back = document.createElement("button")
    back.textContent = "<-"
    navBar.append(back)
} 
//navbarInput(){
    //const inputPrompt = document.createElement("input")

navBarBack()
function navBarForward(){
    const forward = document.createElement("button")
    forward.textContent = "->"
    navBar.append(forward)
} 
navBarForward()