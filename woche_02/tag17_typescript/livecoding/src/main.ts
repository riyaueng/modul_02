import "./style.css"
// import { setupCounter } from "./counter.ts"

// setupCounter(document.querySelector<HTMLButtonElement>("#counter")!)

// * Deklarierte Funktion dürfen auch in Zeilen vor ihrer Deklaration aufgerufen werden
// * Das nennt sich "Hoisting"
printMessages()

// * Funktiondeklaration, da mit function Keywords am Anfang der Zeile definiert
function printMessages(): void {
  // * Dinge die währen Funktionsausführung passieren und mit der Außenwelt interagieren
  // * -> Seiteneffekte / Side effects
  console.log("Guten Morgen")
  console.log("Guten Mittag")
  console.log("Guten Abend")
}

// In JS
// function addTwenty(num) {
//   return num + 20
// }

function addTwenty(num: number): number {
  // return muss zwingend einen Wert von Typ number zurückgeben
  return num + 20
}

console.log(addTwenty(20))
addTwenty(100)

// soll bis zu 5 Zahlen addieren
function addABunchOfNumbers(num1: number, num2: number = 0, num3: number = 0, num4: number = 0, num5: number = 0) {
  return num1 + num2 + num3 + num4 + num5
}

console.log(addABunchOfNumbers(10))
console.log(addABunchOfNumbers(10, 30, 20, 5, 1))
console.log(addABunchOfNumbers(10, 30, 20, 40))

// mit ? können wir ausdrücken, das ein bestimmter Wert nicht übergeben werden muss
// er darf also undefined sein
// das "wirkt" nur bei den Parametern am Ende der Parameterliste
function getGreetingMessage(name: string, customGreeting?: string) {
  const greeting = customGreeting || "Hallo"
  return greeting + name
}

getGreetingMessage("John") // "Hallo John"
getGreetingMessage("John", "Guten Abend") // "Guten Abend John"

// ! Hoisting funktioniert nur mit Functionsdeklarationen
// console.log(getMehrwertsteuer(200, 7)) // 14

// * neben Funktionsdeklaratione. gibt es auch function expressions
const getMehrwertsteuer = function (wert: number, steuerSatz: number = 19) {
  return (wert / 100) * steuerSatz
}

console.log(getMehrwertsteuer(200, 7)) // 14

const steuerSatzMarried = 0.3
const steuerSatzUnmarried = 0.35

function calculateEinkommenssteuer(einkommen: number, isMarried: boolean): number {
  let steuerSatz: number
  if (isMarried) {
    // wir sind hier in einem codeblock der ein child-scope von calculatorEinkommenssteuer ist, haben also Zugriff auf Variablen die dort oder weiter oben definiert wurden
    steuerSatz = steuerSatzMarried
  } else {
    steuerSatz = steuerSatzUnmarried
  }
  return einkommen * steuerSatz
}

//  ! Das hier geht nicht, da steuerSatz im Scope der Funktion definiert wurde
// console.log(steuerSatz)

console.log("Steuern für 30000, unverheiratet: ", calculateEinkommenssteuer(30000, false))
console.log("Steuern für 40000, unverheiratet: ", calculateEinkommenssteuer(40000, true))

// * ES6 Arrow Functions

const addThirty = (num: number) => {
  return num + 30
}

// * Arrow Function mit implizierter Return
const addFourty = (num: number) => num + 40

// [(1, 2, 3, 4, 5, 6, 7, 8, 9)].map((num) => console.log(num * 40));
