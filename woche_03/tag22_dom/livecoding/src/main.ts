import "./style.css"

console.log("Test")

// # querySelector
// Holt sich nur das erste Element, dass gefunden wird
// Wir können hier die Elemente über die bekannte CSS Syntax "." nutzen, mit . auf Klassen oder mit # auf IDs oder div auf Div-Elemente

// ! Variante 1 mit TS
// ? Das ! bedeutet ignoriere das Element, wenn es null ist
// Das ! heißt

// const containerElement = document.getElementById("container")!

// containerElement.innerHTML = "<p>Hello World</p>"

// ! Variante 2 mit TS

const containerElement = document.getElementById("container") as HTMLDivElement

containerElement.innerHTML = "<p>Hello World</p>"

// ! Variante 3 mit TS
// Diese Variante funktioniert nur mit querySelector, ansonsten würde das mit getElementById nicht funktionieren

// const containerElementVarianteDrei = document.querySelector<HTMLDivElement>("#container")

// ! Variante 4 mit TS

// const containerElementVarianteVier: HTMLDivElement | null = document.querySelector("#container")

// # createElement

const paragraphElement = document.createElement("p") as HTMLParagraphElement
paragraphElement.textContent = "Was geeeht ab"
containerElement.appendChild(paragraphElement)

// * Container 2

const container2 = document.getElementById("container2") as HTMLDivElement
const obstsalat: string[] = ["Kiwi", "Apfel", "Aprikose"]
const ungeordneteListeElement = document.createElement("ul") as HTMLUListElement

obstsalat.forEach((obst: string) => {
  const listElement = document.createElement("li") as HTMLLIElement

  listElement.style.color = "red"
  listElement.style.listStyle = "none"
  listElement.textContent = obst
  ungeordneteListeElement.appendChild(listElement)
})

container2.appendChild(ungeordneteListeElement)

// * Mit Button-Click eine Liste anzeigen lassen

const shoppingList = ["Gemüse", "Obst", "Snacks", ["Shampoo", "Seife", "Spüllung"]]

const myBtnElement = document.getElementById("show_myList") as HTMLButtonElement

myBtnElement.addEventListener("click", () => {
  const olListElement = document.createElement("ol") as HTMLDListElement
  olListElement.style.listStyle = "none"

  shoppingList.forEach((produkt: string | string[]) => {
    console.log(produkt)
    const liELement = document.createElement("li") as HTMLLIElement

    if (Array.isArray(produkt)) {
      const innerUlListeElement = document.createElement("ul") as HTMLUListElement
      innerUlListeElement.style.listStyle = "none"
      const innerLiElement = document.createElement("li") as HTMLLIElement
      innerLiElement.textContent = "DM"
      innerUlListeElement.appendChild(innerLiElement)

      produkt.forEach((element: string) => {
        const liElementSchleife = document.createElement("li") as HTMLLIElement
        liElementSchleife.textContent = element
        innerUlListeElement.appendChild(liElementSchleife)
      })
      liELement.appendChild(innerUlListeElement)
    } else {
      liELement.textContent = produkt
    }

    olListElement.appendChild(liELement)
  })
  document.body.appendChild(olListElement)
})

// # querySelectorAll

// * holt sich alle Elemente, auf die Bedingung  zutrifft

// const allDivElemente = document.querySelector("div")
// console.log(allDivElemente)

const allLiElemente = document.querySelectorAll<HTMLLIElement>("#testingArea li")
console.log(allLiElemente)

allLiElemente[1].style.color = "red"
allLiElemente[0].textContent = "Ich bind das erste Kind"

allLiElemente.forEach((element: HTMLLIElement, index: number) => {
  if (index % 2 === 0) {
    element.style.color = "red"
  } else {
    element.style.color = "green"
  }
})

const myImg = document.createElement("img") as HTMLImageElement
myImg.setAttribute("src", "https://picsum.photos/id/237/200/300")
myImg.setAttribute("alt", "Das ist ein Random-Pic von Picsum")
document.body.appendChild(myImg)

const anchorElement = document.createElement("a") as HTMLAnchorElement
anchorElement.setAttribute("href", "https://www.google.com/")
anchorElement.setAttribute("target", "_blank")
anchorElement.textContent = "Go to Google"
document.body.appendChild(anchorElement)
