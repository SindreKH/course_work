async function getApi(url) {

  try {
    const request = await fetch(url)
    if (!request.ok) {
      console.log("Request was unsuccessful")
      return
    }

    const data = await request.json()

    return data
  } 
  catch(error) {
    // create your custom error handling funcionality
    console.log("Noe gikk galt!")
  }
}
export default getApi