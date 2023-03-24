// items per page
export const itemsPerPage = 20
// api urls:
export let apiUrls = {
  lastPage: 0,
  default: `https://pokeapi.co/api/v2/pokemon/?offset=0&limit=${itemsPerPage}`,
  next: "",
  previous: "",
  updateUrls(data) {
    const { count, next, previous} = data
    this.lastPage = Math.floor(count / itemsPerPage) * itemsPerPage

    this.next = next || this.default
    this.previous = previous || 
    `https://pokeapi.co/api/v2/pokemon/?offset=${this.lastPage}&limit=${itemsPerPage}`
  }
} 