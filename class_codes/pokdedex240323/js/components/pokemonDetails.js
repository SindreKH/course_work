// displays pokemonDetails
function pokemonDetails(pokemonData, mountAtElement) {
  
  const {id, name, height, weight, base_experience, types, stats} = pokemonData
  const image = pokemonData["sprites"].other["official-artwork"].front_default


  const typesElements = types.reduce((accumulator, currentValue) => {
    return accumulator + `<h3>${currentValue.type.name}</h3>`
  }, "")

  const statsElements = stats.map((stat) => {
    const name = stat.stat.name
    const value = stat.base_stat
    return `<h3>${name}</h3><h3>${value}</h3><hr>`
  }).join("")

  // clear the mainContainer before appending new content:
  mountAtElement.innerHTML = ""

  const container = document.createElement("div")
  container.classList.add("card", "card-big")

  // id, name, height, weight, base_experience
  container.innerHTML = 
    `<h2>${id}. ${name}</h2>
    <img src="${image}" alt="Image of ${name}">

    <div class="card-stats">
      <div class="info">
        <h3 class="height">${height/10}m</h3>
        <h3 class="weight">${weight/10}kg</h3>
        <h3 class="xp">${base_experience}</h3>
      </div>

      <div class="types">
        ${typesElements}
      </div>
      <div class="stats">
        ${statsElements}
      </div>
    </div>`

  mountAtElement.append(container)
  //return container
}
export default pokemonDetails