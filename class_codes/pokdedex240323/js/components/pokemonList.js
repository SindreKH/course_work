// import dependencies:
import getApi from "../data/getApi.js"
import { apiUrls, itemsPerPage } from "../data/apiUrls.js"
import pokemonCard from "./pokemonCard.js"

// displays list of pokemons (data is a promise that contains list of pokemons)
async function pokemonList(data, mountAtElement) {
  const pokemonData = await data
  const count = pokemonData.count
  // update api urls
  apiUrls.updateUrls(pokemonData)

  const pokemonList = pokemonData.results
  // clear the mainContainer before appending new content:
  mountAtElement.innerHTML = ""

  for (const pokemon of pokemonList) {
    // get additional pokemon data (ie: image, etc)
    const pokemonDetails = await getApi(pokemon.url)
    //console.log(pokemonDetails)
    mountAtElement.append(pokemonCard(pokemon.name, pokemonDetails, mountAtElement))
  }
}
export default pokemonList