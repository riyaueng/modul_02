console.log("Test")

enum PizzaSize {
  Small,
  Medium,
  Large,
  Family,
}

console.log(Object.values(PizzaSize))

enum PizzaIngredients {
  Cheese,
  Onion,
  Salami,
  Champignons,
  Spinat,
  Tuna,
}

console.log(Object.values(PizzaIngredients))

type TPizza = {
  pizzaSize: PizzaSize
  ingredients: PizzaIngredients[]
}

const classicPizza: TPizza = {
  pizzaSize: PizzaSize.Small,
  ingredients: [PizzaIngredients.Cheese, PizzaIngredients.Salami, PizzaIngredients.Onion],
}

console.log(Object.entries(classicPizza))

const tunaPizza: TPizza = {
  pizzaSize: PizzaSize.Large,
  ingredients: [PizzaIngredients.Cheese, PizzaIngredients.Tuna, PizzaIngredients.Onion],
}

console.log(Object.entries(tunaPizza))

const veggiPizza: TPizza = {
  pizzaSize: PizzaSize.Medium,
  ingredients: [PizzaIngredients.Cheese, PizzaIngredients.Spinat, PizzaIngredients.Onion],
}

console.log(Object.entries(veggiPizza))

const funghiPizza: TPizza = {
  pizzaSize: PizzaSize.Family,
  ingredients: [PizzaIngredients.Cheese, PizzaIngredients.Champignons, PizzaIngredients.Salami, PizzaIngredients.Onion],
}

console.log(Object.entries(funghiPizza))
