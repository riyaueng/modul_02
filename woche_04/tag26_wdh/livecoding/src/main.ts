import Car from "./classes/Car"
import userListe from "./data/userData"
import { IAddress } from "./interfaces/IAddress"
import IMovie from "./interfaces/IMovie"
import IUser from "./interfaces/IUser"
import "./style.css"

const ichSucheKeys = Object.keys(userListe)

// ? .map() kann mit return ein neues Array erstellen!
// ?.forEach() gibt void aus, weil es kein Array erstellen kann!
const alleKeysInObj = userListe.map((user: IUser) => {
  // console.log(Object.keys(user))
  return Object.keys(user)
})

// ? Dynamische Darstellung/Anzeigen lassen der keys und values
// # 1. Object.keys() | 2. Object.values() | 3. Object.entries()
// ! -> Nutzen wir sobald man ein Obj in ein Array umwandeln möchte

// ObjToArray.forEach(([key, value]: [string, string | IAddress | IMovie[]]) => {
//   content += `<ul>
//   <li>${key}: ${JSON.stringify(value)}</li>
//   </ul>`
// })

userListe.forEach((user: IUser) => {
  const divElement = document.createElement("div") as HTMLDivElement
  divElement.innerHTML = `<h3>Username: ${user.username}</h3>`
  const ObjToArray = Object.entries(user)
  // console.log("ObjToArray", ObjToArray)

  ObjToArray.forEach(([key, value]: [string, string | IAddress | IMovie[]]) => {
    divElement.innerHTML += `<ul>
    <li>${key}: ${typeof value === "string" ? value : ObjToArrayFunction(value)}</li>
    </ul>`
  })
  document.body.appendChild(divElement)
})

function ObjToArrayFunction(valueParameter: IAddress | IMovie[]): HTMLDivElement | string | undefined {
  // Abfragen, ob es sich um ein Array handelt
  if (Array.isArray(valueParameter)) {
    const divMovieElement = document.createElement("div") as HTMLDivElement

    const newMovieyArrayValue = valueParameter.map((movie: IMovie) => {
      const myValue = (divMovieElement.innerHTML = `<h6>${movie.title}</h6>
        <p>${movie.rate}</p>`)
      return myValue
    })
    return newMovieyArrayValue.join(",")
  }
}

enum ColorPlattes {
  Red = "#c1121f",
  Brown = "#bc6c25",
  Yellow = "#ffd60a",
  BabyBlue = "#cae9ff",
}

const enumToArray = Object.entries(ColorPlattes)

enumToArray.forEach(([key, value]) => {
  const btn = document.createElement("button") as HTMLButtonElement
  btn.textContent = key
  btn.style.backgroundColor = value
  document.body.appendChild(btn)
  btn.addEventListener("click", () => {
    document.body.style.backgroundColor = value
  })
})

// # ----------- static ------------

const car1 = new Car("Tesla", "X5")
console.log(car1)

Car.howManyCars()
Car.updateOrder()

Car.isAvailable("Lamborgini")
