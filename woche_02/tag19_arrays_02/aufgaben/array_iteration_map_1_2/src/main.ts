import "./style.css"

const drinks = [
  "Coca-Cola",
  "Apfelsaft",
  "Pepsi",
  "Traubensaft",
  "Sprite",
  "Orangensaft",
  "Red Bull Energy Drink",
  "Fanta",
]

const upperDrinks = drinks.map((drinks) => drinks.toUpperCase())
console.log(upperDrinks)

const likeDrinks = drinks.map((drinks) => {
  return `I like ${drinks}`
})
console.log(likeDrinks)

// ? * Ohne Arrow-Funktion

const upperDrinksFunction = drinks.map(function (drinks) {
  return drinks.toUpperCase()
})
console.log(upperDrinksFunction)

const likeDrinksFunction = drinks.map(function (drinks) {
  return `I like ${drinks}`
})
console.log(likeDrinksFunction)
