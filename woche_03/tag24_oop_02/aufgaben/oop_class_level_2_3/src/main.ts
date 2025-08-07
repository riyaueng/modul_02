import { Customer } from "./classes/Customer"
import "./style.css"

const customer1 = new Customer("Eva", "eevie@gmail.de", "Route 3", "23964", "Azuria City")
const customer2 = new Customer(
  "MissignNoooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo",
  "buggy@gmail.de",
  "Route 25",
  "X54ghv",
  "Zinnoberinsel"
)
const customer3 = new Customer("Derek", "dragonran@gmail.de", "Route 18", "34698", "Ebenholz City")
const customer4 = new Customer("Annie", "angler@gmail.de", "Route 45", "85764", "See des Zorns")

console.log(customer1)
console.log(customer2)
console.log(customer3)

console.log(customer2.checkName)
console.log(customer2.checkEmail)
console.log(customer2.checkPostelCode)
