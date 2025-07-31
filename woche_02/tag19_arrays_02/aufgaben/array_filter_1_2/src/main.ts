import "./style.css"

const heroArr: (string | null | undefined)[] = [
  "Superman",
  "Batman",
  undefined,
  undefined,
  "Wonder Woman",
  "Spider-Man",
  "Black Widow",
  "Iron Man",
  "Thor",
  "Catwoman",
  undefined,
  null,
]
console.log(heroArr)

const cleanHeroArr = heroArr.filter((hero) => {
  if (hero !== null || hero !== undefined) {
    return hero
  }
})

console.log(cleanHeroArr)
