import "./style.css"
import { IceCreamFlavor } from "./classes/Ice"

const icecream1 = new IceCreamFlavor("Chocolate", 2, true)
console.log(icecream1)

const icecream2 = new IceCreamFlavor("Mango", 4, true)
console.log(icecream2)

const icecream3 = new IceCreamFlavor("Stracciatella", 3, false, "Classic Italian")
console.log(icecream3)

const icecream4 = new IceCreamFlavor("Mint", 2, false, "Fresh taste")
console.log(icecream4)

const icecreamArray: IceCreamFlavor[] = [icecream1, icecream2, icecream3, icecream4]
console.log(icecreamArray)

for (const ice of icecreamArray) {
  ice.showPopularIce()
}

// * -------- Aufgabe Class Level 1_12 --------

console.clear()

icecreamArray.forEach((icecream: IceCreamFlavor) => {
  console.log(icecream)
  console.log(`Gesamtpreis: ${icecream.getTotalPrice(4)}`)
  icecream.printInfo()
  icecream.getLengthOfDiscription()
})

// * -------- Aufgabe Class Level 1_12 Bonus --------

const iceContainer1 = document?.querySelector<HTMLDivElement>(".div_icecream")

// icecreamArray.forEach((ice: IceCreamFlavor) => {
//   const divElement = document.createElement("div") as HTMLDivElement
//   const headlineElement = document.createElement("h2") as HTMLHeadingElement
//   const textElement = document.createElement("p") as HTMLParagraphElement
//   headlineElement.textContent = ice._name
//   headlineElement.style.color = #FF368D
//   // textElement.textContent = ice._price
//   textElement.style.color = "black"
//   divElement.style.backgroundColor = "white"
//   iceContainer1.appendChild(divElement)
// })

// obstsalat.forEach((obst: string) => {
//   const listElement = document.createElement("li") as HTMLLIElement

//   listElement.style.color = "red"
//   listElement.style.listStyle = "none"
//   listElement.textContent = obst
//   ungeordneteListeElement.appendChild(listElement)
// })
