"use strict"
// import data modules:
import getApi from "./data/getApi.js"
import { apiUrls, itemsPerPage } from "./data/apiUrls.js"
// import components:
import navbar from "./components/navbar.js"
import pokemonList from "./components/pokemonList.js"

// main container:
const mainContainer = document.querySelector(".poke-list")

// run navbar, pokemonlist on page load
navbar(mainContainer)
pokemonList(
  getApi(apiUrls.default), mainContainer)