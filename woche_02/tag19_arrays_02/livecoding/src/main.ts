import "./style.css"

const beispielArray = ["Blaubeeren", "Erdbeeren", "Kartoffeln", "Schlagsahne", "Kichererbsen", "Eis"]
const beispielNumberArray = [-10, 3, -9, 3, 2, 7, 5]

// * Higher Ordeer Functions

// * .forEach
// Wir können forEach auf jedem Array aufrufen und ihm eine Funktion als Argument übergeben
// Diese Funktion wird dann für jedes Element im Array aufgerufen

const meinCallbackFuerForEach = function (element: string, index: number) {
  console.log(element, index)
}

beispielArray.forEach(meinCallbackFuerForEach)

// * Falls wir die Callbackfunktion inline definieren, sind keine expliziten Typ-Annotationen nötig
// beispielArray.forEach(function (element, index) {
//   console.log(element, index)
// })

// const bigBeispielArray: string[] = [...beispielArray]
// beispielArray.forEach((element) => {
//   console.log(element.toUpperCase()) // Nicht mutierend: Das Element selbst wird nicht verändert!
// })

// * .forEach hat keinen Rückgabewert. Um dennoch Ergebnisse außerhalb zu speichern, können wir externe variablen definieren.
const bigBeispielArray: string[] = []
beispielArray.forEach((element) => {
  element.toUpperCase()
  bigBeispielArray.push(element.toUpperCase())
  console.log(bigBeispielArray)
})

// const meinListener = function(){}
// document.addEventListener("click", meinListener)

// * .map
// .map ist eine Array-Methode, die einen Array aus einen Array mit transformierten Elementen verwandeln kann

const resultArray = beispielArray.map((element) => element.toLocaleUpperCase())

console.log({ resultArray })

// * .includes
//  .includes git true/flse zurück, je nachdem ob das Argument im Array vorliegt
console.log("includes Himbeeren:", beispielArray.includes("Himbeeren"))
console.log("includes Blaubeeren:", beispielArray.includes("Blaubeeren"))

// * .indexOf
// ! .indexOf gibt den Index zurück falls das Element vorhanden ist, sonst -1

console.log("indexOf Blaubeeren: ", beispielArray.indexOf("Blaubeeren"))
console.log("indexOf Salami: ", beispielArray.indexOf("Salami"))

if (beispielArray.indexOf("Salami") !== -1) {
  console.log("Viel Spaß beim Essen der Salami")
}

if (beispielArray.includes("Blauberen")) {
  console.log("Viel Spaß beim Essen der Blaubeeren")
}

// * find
// .find gibt uns das erste Elemente des Arrays zurück bei dem die übergebene Callbackfunktion "true" ergibt

// Wir wollen ein Element mit mindest. 12 Zeichen finden
// const predicatefunction(value, index){
//   return value.length >= 12
// })

const findResult = beispielArray.find(function (value, index) {
  return value.length >= 12
})

const findResult2 = beispielArray.find(function (value) {
  return value.toLowerCase().includes("beere")
})
// ? * .toLowerCase wirkt zuerst auf value ein before .includes danach sucht

console.log({ findResult2 })

// * .findIndex -> Das Gleicht gibt aber den Index zurück

const findIndexResult = beispielArray.findIndex(function (value) {
  return value.toLowerCase().includes("beere")
})
console.log(findIndexResult) // -> Gibt true aus wenn das Element beere enthält

// * .filter -> Gibt uns nur die Elemente aus, die beere enthalten, also true sind
//* .filter
// * filter kriegt auch eine Prädikatsfunktion (Funktion die true oder false zurückgibt).
// * es gibt einen Array zurück, der nur die Werte enthält für die die Funktion true ausgibt

const filterArray = beispielArray.filter(function (value) {
  return value.toLowerCase().includes("beere")
})
console.log({ filterArray })

// * .filter -> Gibt uns nur die Elemente aus, die nicht negativ sind
const filterNumbers = beispielNumberArray.filter((value) => value >= 0)
console.log({ filterNumbers })

// * .sort
// * sortiert entweder alphabetisch oder mithilfe einer übergebene Vergleichsfunktion

const unsortedNumbers = [1, 33, 20, 4, 19, 29, 7, 10, 999]
console.log(unsortedNumbers.sort())
// ! Problem: per default wird alles alphabetisch sortiert, auch Zahlen

// so kann man z. B. nach Zahlenwert sortieren (nummerisch)
console.log(unsortedNumbers.sort((a, b) => a - b))
// z. B. absteigend
console.log(unsortedNumbers.sort((a, b) => b - a))
// nach Zahl der Ziffern
console.log(unsortedNumbers.sort((a, b) => a.toString().length - b.toString().length))
// nach Zahl der Zeichen
console.log(beispielArray.sort((a, b) => a.length - b.length))

// * .map
// .map ist eine Array-Methode, die einen Array aus einen Array mit transformierten Elementen verwandeln kann

// const resultArray = beispielArray.map((element) => element.toUpperCase())

console.log({ resultArray })

const squaredNumbers = beispielNumberArray.map((element) => element * element) // es gibt auch sonst Math.pow(element, 2)

//  alle quadrieren und filtern, sodass maximal 99 groß

const squaredAndFitleredNumbers = beispielNumberArray.map((element) => element * element).filter((value) => value < 100)

console.log(squaredAndFitleredNumbers)

const arrayWithEmojis = beispielArray.map((value) => {
  const lowerCaseValue = value.toLowerCase()

  if (lowerCaseValue.includes("blaubeere")) {
    return value + " 🫐"
  } else if (lowerCaseValue.includes("kartoffel")) {
    return value + " 🥔"
  } else if (lowerCaseValue.includes("erdbeere")) {
    return value + " 🍓"
  } else if (lowerCaseValue.includes("eis")) {
    return value + " 🍦"
  } else {
    return value
  }
})
console.log({ arrayWithEmojis })

// *  Mehrdimensionale Arrays

const shoppingLists = [
  ["Eis", "Kartoffeln", "Kekse"],
  ["Hundefutter", "Socken", "Schokolade", "Klopapier"],
  ["Wein", "Schnaps", "Bier"],
]
//  Zugrif auf das zweite Element im ersten Unterarray
console.log(shoppingLists[0][1]) // Das erste Element steht eigentlich in Klammern!

// sortieren nach Länge
console.log(shoppingLists.sort((a, b) => a.length - b.length))

// * .flat

console.log(
  shoppingLists
    .flat()
    .sort()
    .map((value) => value.toUpperCase())
)

// ? .reduce() anschauen!
