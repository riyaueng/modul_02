import { Animal } from "./classes/Animals"
import { Person } from "./classes/Person"
import { Gender } from "./enums/Gender"
import "./style.css"

// * ------- Class with Animal -------

const myAnimal1 = new Animal("Cat", 13, "Orange")
console.log(myAnimal1)

console.log(myAnimal1.animalSpecies)
console.log(myAnimal1.animalAge)

myAnimal1.validAnimalAge = 40
myAnimal1.validAnimalAge = 10

myAnimal1.animalSpecies = "Cat"
myAnimal1.animalSpecies = "Hamster"
console.log(myAnimal1.animaColor)

// * ------- Class with Person -------

const myPerson1 = new Person("Erika", new Date("2001-05-22"), Gender.FEMALE)
const myPerson2 = new Person("Jaimy", new Date("1997-12-04"), Gender.DIVERSE)
const myPerson3 = new Person("Nils", new Date("1995-08-17"), Gender.MALE)

console.log(myPerson1)
console.log(myPerson2)
console.log(myPerson3)

console.log(myPerson1._name)
console.log(myPerson2.personbirthday)
console.log(myPerson1.personGender)

myPerson3.gender = Gender.DIVERSE
console.log(myPerson3.personGender)
console.log(myPerson3.personName)
