// import dependencies
import pokemonDetails from "./pokemonDetails.js"
// cireates and returns a pokemon card with title and image
function pokemonCard(name, pokemonData, mountAtElement) {

  const imgSrc = pokemonData.sprites.other["official-artwork"].front_default

  const element = document.createElement("div")
  element.className = "card"
  const title = document.createElement("h2")
  title.textContent = name
  const image = document.createElement("img")
  image.src = imgSrc
  image.alt = `Image of ${name}`

  element.append(title, image)

  // add click event to the card:
  element.addEventListener("click", () => pokemonDetails(pokemonData, mountAtElement))

  return element
}
export default pokemonCard