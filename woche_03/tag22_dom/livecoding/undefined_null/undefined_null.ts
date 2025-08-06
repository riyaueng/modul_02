console.log("Test 2")

// ! ------ undefined, null, any -------

// ? ---- undefined ----
// Klassischer Fall: Variable wurde deklariert, aber wurde ihr kein Wert zugewiesen

let sum20: number
// console.log(sum20)

// ! Hinter dem undefined versteckt sich ein true/false

// if (sum20) {
//   console.log("Die Zahl wurde gefunden")
// }

// * Weiterer Fall: Wenn eine function keinen expliziten Rückgabewert hat, gibt es uns undefined zurück

// function myFunc() {}
// console.log(myFunc())

// * Letzter Fall: Der Zugriff auf nicht existierende Eigenschaften eines Objects

// let myObj = {}
// console.log(myObj.userName)

// * Mit Array

type TPlantsSchema = {
  name: string
  color: string
}

const plants: TPlantsSchema[] = [
  { name: "Rose", color: "Red" },
  { name: "Ivy", color: "green" },
  { name: "Lavender", color: "purple" },
]

// ! Sobald ihr mit geschweifte Klammer arbeitet, denkt bitte daran, dass ihr mit return arbeiten müsst!
const ichSucheNachKaktus = plants.find((plants: TPlantsSchema) => {
  return plants.name.includes("Kaktus")
})

console.log(ichSucheNachKaktus)

// ? ---- null ----
// Wenn etwas nicht Vorhanden ist oder nicht existiert

const myBtn = document.getElementById("mein-btn")
console.log(myBtn)

// * Undefined bedeutet in Typscript, dass eine Variable wurde bereits deklariert, aber wurde noch nicht zugewiesen
// Elvis Operator kann nur bei Zuweisung und Ausgaben verwendet werden, kurz gesagt -> auf der rechten Seite

const someText = myBtn?.innerText

console.log(someText)

// Man kann null verwenden um eine Variable zuzuweisen, die später ein Objectwert erhalten soll

type TMyUser = {
  id?: number
  name: string
  age?: number
}

let user: null | TMyUser = null

// Das ist meine Simulation vom Backend

user = {
  name: "Joe",
  age: 20,
}

const userCollection: TMyUser[] = [
  { id: 1, name: "Andre" },
  { id: 2, name: "Riya" },
  { id: 3, name: "Malte" },
]

// ! Auf Array-Methoden folgt immer eine Callback-Function !
function findUserById(id: number): TMyUser | null {
  for (let user of userCollection) {
    if (user.id === id) {
      return user
    }
  }
  // Kein User wurde gefunden, weil es nicht existiert
  return null
}

const user2 = findUserById(10)

console.log(user2)

// * ---- any ----
// ! Das sollte sehr sehr sehr selten verwendet werden

const iAmSomething: any = "sgfdfgd"

function returnAnything(): any {
  return 765875
}

returnAnything()
