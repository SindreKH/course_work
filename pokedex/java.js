'use strict'

const containerMain = document.getElementById("pkmncontainer")
const navBar = document.getElementById(navbar)

async function getApi (url){
    const request = await fetch(url)
    const data = request.json()
    return data
}
async function logData(){
    const newData = await getApi("https://pokeapi.co/api/v2/pokemon?offset=0&limit=3")
    console.log(newData)
    const results = newData.results
    //containerMain.append(pokemonCard(newData))
    for (const data of results) {
        const pokeCard = await pokemonCard(data)
        containerMain.append(pokeCard)
        console.log(data)
    }
}
logData()

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
function navBarButtons(){
    document.createElement("button")
} 