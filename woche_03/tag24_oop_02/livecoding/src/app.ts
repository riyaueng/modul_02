import { Dog } from "./classes/Dog"
import { LiberyBook } from "./classes/LibaryBook"
import { Owner } from "./classes/Owner"
import { Person } from "./classes/Person"
import "./style.css"

const ownerVariable = new Owner("Joe Doe", "Musterstrasse", 35327, new Date(2022, 3, 25))
console.log(ownerVariable)

const myDog = new Dog("Sunny", 100, ownerVariable, "2024.06.02")
// myDog.age = 20

console.log(myDog)
console.log(myDog.age)
console.log(myDog.dogInGerman)
console.log(myDog.name)

const myInputElement = document.getElementById("myInput") as HTMLInputElement

document.querySelector("form")?.addEventListener("submit", (e: Event) => {
  e.preventDefault()
  myDog.name = myInputElement?.value
  console.log(myDog)
})

myDog.sleep()

myDog.bark("Wuf, Wuf, Wuf")

myDog.eat()
myDog.eat()
myDog.eat()
myDog.eat()
myDog.eat()

console.log(myDog.isHungry())

// Übung mit Person

const andre = new Person("Andre", "Schmidt", new Date("2004-01-01"))
andre.email = "andre@gmail.de"

console.log(andre.birth)
console.log(andre.email)

console.clear()

const goodGirlBook = new LiberyBook("Good Girl", "Aria Daba")
console.log(goodGirlBook)

goodGirlBook.borrowBook("Malte")
goodGirlBook.returnBook()
goodGirlBook.borrowBook("Farid")
