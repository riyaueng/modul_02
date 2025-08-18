import "./style.css"

console.log("Hallo")

const shoePromise: Promise<string[]> = new Promise((resolve, reject) => {
  let ourShoeServer: boolean = true

  const shoes: string[] = ["Black High Heels", "Adidas Samba", "Green Crocs", "Nike Air Max", "Red Converse"]

  setTimeout(() => {
    if (ourShoeServer) {
      resolve(shoes)
    } else {
      reject("Sorry, no shoes available.")
    }
  }, 5000)
})

// * ---- Elemente aus HTML abholen ----

const orderBtn = document.getElementById("order-button") as HTMLButtonElement
const shoeOutputElement = document.getElementById("shoe-output") as HTMLDivElement
const loaderIndicator = document.getElementById("loading") as HTMLDivElement

if (orderBtn && shoeOutputElement && loaderIndicator) {
  orderBtn.addEventListener("click", () => {
    // * Ladeazeige anzeigen, weil es vorher auf Display: none war
    loaderIndicator.style.display = "block"

    shoePromise
      .then((shoes: string[]) => {
        // * Schuhe anzeigen lassen
        // * In shoes steckt das Ergebnis, dass oben bei resolve mitgegeben wurde

        shoes.forEach((shoe: string) => {
          const shoeElement = document.createElement("p") as HTMLParagraphElement
          shoeElement
          shoeElement.innerText = shoe
          shoeOutputElement.appendChild(shoeElement)
        })
      })
      .catch((err: string) => {
        console.log(err)
        const errorParagrapgh = document.createElement("p") as HTMLParagraphElement
        // const errorMessage: string = err.message
        // errorParagrapgh.innerText = errorMessage

        errorParagrapgh.innerText = err
        shoeOutputElement.appendChild(errorParagrapgh)
      })
      .finally(() => {
        loaderIndicator.style.display = "none"
      })
  })
}
