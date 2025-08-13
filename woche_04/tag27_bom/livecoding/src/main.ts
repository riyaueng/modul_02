import "./style.css"

// # --------- BOM ----------

// * -> Browser Object Model ist eine Schnittstelle, die vom Browser bereit gestellt wird
// * -> Wir können mit Typescript mit dem Browserfenster und den Browserdaten integrieren

// # window.screen.height

console.log("Aktuelle Bildschirmhöhe in px:", window.screen.height)
console.log("Aktuelle Bildschirmbreite in px:", window.screen.width)

// # Verfügbare Bildschirmgröße

console.log("Verfügbare Bildschirmhöhe in px:", window.screen.availHeight)
console.log("Verfügbare Bildschirmbreite in px:", window.screen.availWidth)

// # Farbtiefe

console.log("Farbtiefe:", window.screen.colorDepth)

// # Browserfenster selbst

console.log("Innere Höhe des Browserfenster", window.innerHeight)

console.log("Innere Breite des Browserfenster", window.innerWidth)

// * EventListener, wenn sich die Größe des Fensters ändert

window.addEventListener("resize", () => {
  console.log(`Fensterggröße wurde geändert auf ${window.innerWidth} ${window.innerHeight}`)
})

//  # Informationen zur aktuellen URL ->

console.log("Gesamte URL:", window.location.href)
console.log("Port", window.location.port)

// # Verlauf der Aufrufe -> window.history

console.log("Länge der History:", window.history.length)

// * ------ Zurück in der History gehen -------
document.getElementById("back-button")?.addEventListener("click", () => {
  window.history.back()
})

// * ------ Seite neu laden -------
document.getElementById("reload")?.addEventListener("click", () => {
  window.location.reload()
})

// * ------ Umleiten und öffnen ------
document.getElementById("open-btn")?.addEventListener("click", () => {
  window.open("https://super-code.de/", "_blank")
})

// * ----- Infos, welchen Browser der User gerade nutzt -----
console.log("Browser-Info:", window.navigator.userAgent)

if (window.navigator.userAgent.includes("Chrome")) {
  console.log("Du bist cool")
} else {
  console.log("Brother awwww")
}

// # Welche Browser-Sprache ist eingestellt

console.log("Eingestellt Sprach:", window.navigator.language)

if (window.navigator.language.startsWith("de")) {
  console.log("Ok, lass uns alles auf Deutsch machen.")
}

const greetToUser = (): void => {
  const languageBrowser = window.navigator.language
  switch (languageBrowser) {
    case "de-DE":
      console.log("Guten Morgen")
      break
    case "en-EN":
      console.log("Good Morning")
      break
    default:
      console.log("Irgendwas stimmt nicht")
      break
  }
}

greetToUser()

console.log("IsOnline", window.navigator.onLine)

// # ------ Cookies ------

if (window.navigator.cookieEnabled) {
  console.log("Cookies sind aktiv.")
} else {
  console.log("Cookies wurden blockiert.")
}

document.cookie = "username=joedoe"

// # -------- JSON.parse & JSON.stringify --------

// ? JSON ist ein leichtes Datenformat, das hauptsächlich zum Austausch von Daten zwischen Server und Client verwendet wird.
// ? Kannn leicht von verschiedenen Sprachen verarbeitet werden.

// ! JSOM -> Javascript Object Notation

// * ----- JSON.stringifiy -> Nimmt JS-Obj und wandelt es in einem JSON-String um ------

const user = {
  email: "andre@gmail.de",
  password: "123456789",
}
console.log(user)

// ! Um in den LocalStorage speichern zu können, müssen wir das User Obj unbedingt in das JSON Format umwandeln

// -> Dev Tools (Untersuchen) -> Applikation -> Lcal storage

const objToJSON = JSON.stringify(user)
console.log(objToJSON)

localStorage.setItem("currentUser", objToJSON)

// * JSON.parse zurück umwandeln in ein Obj

const userFromLocalStorage = localStorage.getItem("currentUser")

console.log(userFromLocalStorage)

if (userFromLocalStorage) {
  const stringToObj = JSON.parse(userFromLocalStorage)
  console.log(stringToObj)
}

const langSettings = {
  language: "German",
  subTitle: "Englisch",
}

const settingAsJSON = JSON.stringify(langSettings)
console.log(settingAsJSON)

localStorage.setItem("languageSettingMitObjStruktur", settingAsJSON)

// * -------> Ice Cream Example -------

const iceCreamFlavorsArr = [
  {
    name: "Vanilla",
    price: 2.5,
    isPopular: true,
  },
  {
    name: "Chocolate",
    price: 3.0,
    isPopular: true,
  },
  {
    name: "Strawberry",
    price: 2.8,
    isPopular: false,
  },
  {
    name: "Mint Chocolate Chip",
    price: 3.2,
    isPopular: true,
  },
  {
    name: "Cookie Dough",
    price: 3.5,
    isPopular: false,
  },
]

console.log(iceCreamFlavorsArr)
const myArrToJSON = JSON.stringify(iceCreamFlavorsArr)
console.log(myArrToJSON)

localStorage.setItem("iceCreamSorten", myArrToJSON)

// # -------- try catch ----------

// * Für Fälle, in denen ich nicht gensu weiß zurück kommmt, der ob ein Fehler auftreten wird, arbeite ich mit try catch block
// * Das ist wie ein Sicherheitsnetz, dass ich unter meinen Code spanne
// * Mit try-catch kann man Code Abschnitte umschließen, die potenziell fehlerhaften Code enthalten

const myInput = document.getElementById("some-i") as HTMLInputElement

try {
  console.log(myInput.value)
} catch (error) {
  // ! Variante 1
  console.error("Wir haben den Fehler abgefangen.", error)

  // ! Variante 2
  const errorMessage = (error as Error).message
  console.log(errorMessage)
  const myParagraph = document.createElement("p") as HTMLParagraphElement
  myParagraph.innerHTML = errorMessage
  document.body.appendChild(myParagraph)
}

// * ----- throw new Error -----

const divide = (a: number, b: number): number => {
  if (b === 0) {
    throw new Error("Division by zero is not allowed.")
  }
  return a / b
}

console.log(divide(10, 0))
