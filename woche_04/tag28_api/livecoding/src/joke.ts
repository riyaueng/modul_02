// ! URL-LINK = https://api.chucknorris.io/jokes/random

type TJoke = {
  icon_url: string
  id: string
  url: string
  value: string
}

console.log("Hello")
const URL_Joke_API = "https://api.chucknorris.io/jokes/random"
const jokeOutput = document.getElementById("joke-output") as HTMLParagraphElement
const myJokeBtn = document.getElementById("joke-btn") as HTMLButtonElement

myJokeBtn.addEventListener("click", () => {
  fetch(URL_Joke_API)
    .then((response: Response) => {
      console.log(response)
      return response.json()
    })
    .then((joke: TJoke) => {
      console.log(joke)
      const imgElement = document.createElement("img") as HTMLImageElement
      jokeOutput.textContent = joke.value
      imgElement.src = joke.icon_url
      document.body.appendChild(imgElement)
    })
})
