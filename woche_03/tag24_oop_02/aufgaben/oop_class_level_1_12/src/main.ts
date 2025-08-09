import "./style.css"
import { IceCreamFlavor } from "./classes/Ice"

const icecream1 = new IceCreamFlavor("Chocolate", 2, true)
console.log(icecream1)

const icecream2 = new IceCreamFlavor("Stracciatella", 3.5, false, "Classic Italian")
console.log(icecream2)

const icecream3 = new IceCreamFlavor("Mango", 4.5, true)
console.log(icecream3)

const icecream4 = new IceCreamFlavor("Mint", 2.5, false, "Fresh taste")
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

const iceContainer1 = document?.querySelector(".div_icecream") as HTMLDivElement

icecreamArray.forEach((ice: IceCreamFlavor) => {
  const divElement = document.createElement("div") as HTMLDivElement
  const starIcon = document.createElement("p") as HTMLParagraphElement
  const headlineElement = document.createElement("h2") as HTMLHeadingElement
  const priceElement = document.createElement("p") as HTMLParagraphElement
  const scoopsElement = document.createElement("p") as HTMLParagraphElement
  const totalPriceElement = document.createElement("p") as HTMLParagraphElement
  const numberBtn = document.createElement("button") as HTMLButtonElement
  const placeholder = document.createElement("div") as HTMLDivElement

  // ----- Styling der Boxen -----
  iceContainer1.style.display = "flex"
  iceContainer1.style.justifyContent = "center"
  iceContainer1.style.alignItems = "Center"

  divElement.style.textAlign = "center"
  divElement.style.display = "flex"
  divElement.style.flexDirection = "column"
  divElement.style.justifyContent = "center"
  divElement.style.alignItems = "center"
  divElement.style.backgroundColor = "white"
  divElement.style.width = "14rem"
  divElement.style.margin = "2rem"
  divElement.style.borderRadius = "0.5rem"
  divElement.style.boxShadow = "0px 0px 5px rgba(0,0,0,0.3)"
  divElement.style.color = "black"
  divElement.style.fontSize = "0.8rem"

  starIcon.textContent = "⭐️"
  starIcon.style.fontSize = "1.5rem"
  starIcon.style.marginTop = "1rem"
  // ---- Placeholder-Element für Icon ----
  placeholder.style.height = "2.3rem"
  placeholder.style.width = "1.5rem"

  placeholder.style.marginTop = "1rem"

  headlineElement.textContent = ice._name
  headlineElement.style.fontSize = "1.5rem"
  headlineElement.style.color = "#FF368D"

  priceElement.textContent = String(`Price: ${ice._price} Euro`)
  scoopsElement.textContent = "0"
  totalPriceElement.textContent = "0 Euro"

  numberBtn.textContent = "+1"
  numberBtn.style.color = "white"
  numberBtn.style.backgroundColor = "#FF368D"
  numberBtn.style.width = "2rem"
  numberBtn.style.height = "2rem"
  numberBtn.style.border = "none"
  numberBtn.style.borderRadius = "0.2rem"
  numberBtn.style.margin = "1rem"

  // ----- Styling-Elemente übergeben in HTML -----

  iceContainer1.appendChild(divElement)
  // ? --- Beliebtes Eissorten kennzeichnen ---
  if (ice._isPopular) {
    divElement.appendChild(starIcon)
  } else {
    divElement.appendChild(placeholder)
  }
  divElement.appendChild(headlineElement)
  divElement.appendChild(priceElement)
  divElement.appendChild(scoopsElement)
  divElement.appendChild(totalPriceElement)
  divElement.appendChild(numberBtn)

  // ----- Anzahl der Kugeln eingeben -----
  let scoopsCount: number = 0

  numberBtn?.addEventListener("click", () => {
    if (numberBtn) {
      scoopsCount++
      scoopsElement.textContent = String(scoopsCount)
      let iceTotalprice = ice.getTotalPrice(scoopsCount)
      totalPriceElement.textContent = `${iceTotalprice} Euro`
    }
  })
})
