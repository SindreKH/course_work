// import dependencies:
import getApi from "../data/getApi.js"
import { apiUrls } from "../data/apiUrls.js"
import pokemonList from "./pokemonList.js"

const navContainer = document.getElementById("nav-bar")

function navbar(mountAtElement) {

  const buttonPrev = document.createElement("button")
  buttonPrev.textContent = "⬅️"
  const buttonHome = document.createElement("button")
  buttonHome.textContent = "POKE DEX"
  buttonHome.style = "color: white;"
  const buttonNext = document.createElement("button")
  buttonNext.textContent = "➡️"

  const searchInput = document.createElement("input")
  searchInput.placeholder = "search"

  // add event handlers:
  buttonPrev.addEventListener("click", () => pokemonList(
    getApi(apiUrls.previous), mountAtElement
  ))
  buttonHome.addEventListener("click", () => pokemonList(
    getApi(apiUrls.default), mountAtElement
  ))
  buttonNext.addEventListener("click", () => pokemonList(
    getApi(apiUrls.next), mountAtElement
  ))
  searchInput.addEventListener("input", (event) => pokemonSearch(event, mountAtElement))

  navContainer.append(buttonPrev, buttonHome, buttonNext, searchInput)
}

// search pokemon event handler
async function pokemonSearch(event, mountAtElement) {
  const searchText = event.target.value
  if (searchText.length <= 3) {
    console.log("need to enter more than 3 characters to search")
    return
  }

  // get api data
  const pokemonDetails = await getApi("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1281")
  // filter api data
  const filterResults = pokemonDetails.results.filter(pokemon => pokemon.name.includes(searchText))

  pokemonDetails.results = filterResults
  pokemonList(pokemonDetails, mountAtElement)

  // unpack contents of pokemonDetails into a new object, and then replace the objects results property with filterResults array.
  /* displayPokemonSearchResult({
    ...pokemonDetails,
    results: filterResults
  }) */

  //displayPokemonSearchResult(pokemonDetails)
}


export default navbar