const starWarsActor: [string, string] = ["Luke Skywalker", "Mark Hamill"]

console.log(starWarsActor)

const starWarsActors: [string, string][] = [
  ["Luke Skywalker", "Mark Hamill"],
  ["Yoda", "Frank Oz"],
  ["Han Solo", "Harrison Ford"],
  ["Princess Leia", "Carrie Fisher"],
]

console.log(starWarsActors)

starWarsActors.forEach(([character, actor]) => {
  console.log(`${actor} spielt ${character}`)
})
