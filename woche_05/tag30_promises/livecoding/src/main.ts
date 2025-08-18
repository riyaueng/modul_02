import "./style.css"

// # ------- Promise -------
// * Promise ist wie ein Versprechen und hat entweder gute oder schlechte Nachrichten
// * Was ist überhaupt Promise -> Sie ist im Grunde genommen eine Klasse bzw. eine Art von Obj
// * Mit Promise arbeiten zu können, braucht man dafür eine nue Instanz
// * Die Instanzen können sowohl als Variable als auch als Funktion geklariert werden

// * Die Promise Function haben zwei Hauptzustände ->
// ---- fullfiled -> (erfüllt) Das Promise wurde erfolgreich ausgeführt
// ---- rejected -> (abgelehnt) Das Promise wurde nicht erfolgreich ausgeführt
// ---- pending -> (ausstehend) Das Promiste braucht noch Zeit bevor das ausgeführt oder abgelehnt wird

// * Beim Daten laden (API-Abfrage)

// # --- Variante 1 ---
// new Promise benötigt eine Callback-Function, die immer zwie Argumtente erwartet

// let myPromise = new Promise((resolve, reject) => {
//   let server: boolean = false

//   if (server) {
//     resolve("Die Operation war erfolgreich!")
//   } else {
//     reject("Es gab ein Problem…")
//   }
// })

// console.log(myPromise)

// ! resolve -> then
// ! reject -> catch

// myPromise
//   .then((resp) => {
//     console.log(resp)
//   })
//   .catch((err) => {
//     console.log(err)
//   })
//   .finally(() => console.log("Alles lauft gut."))

// # --- Variante 2 ---

function loadData(): Promise<string> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let server: boolean = false
      if (server) {
        resolve("Daten erfolgreich geladen.")
      } else {
        reject("Fehler beim Laden der Daten.")
      }
    }, 3000)
  })
}

// console.log(loadData())

// loadData()
//   .then((resp: string) => {
//     console.log(resp)
//   })
//   .catch((err: Error) => console.log(err))

// # --- Variante 3 ---

function firstSteps(): Promise<void> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success: boolean = true

      if (success) {
        console.log("Erster Schritt abgeschlossen.")
        resolve()
      }
    }, 1000)
  })
}

function secondStep(): Promise<void | string> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success: boolean = false

      if (success) {
        console.log("Zweiter Schritt abgeschlossen.")
        resolve()
      } else {
        reject("Fehler im zweiten Schritt.")
      }
    }, 1200)
  })
}

function thirdStep(): Promise<void> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve()
    }, 2000)
  })
}

// firstSteps()
//   .then(() => secondStep())
//   .then(() => thirdStep())
//   .then(() => {
//     console.log("Alle Schritte sind erfolgreich abbgeschlossen.")
//   })
//   .catch((err: Error) => console.log(err))

// # --- Variante 4 ---

const dogAgePromise: Promise<number> = new Promise((resolve, reject) => {
  const randomAge: number = Math.floor(Math.random() * 30)
  if (randomAge <= 20) {
    resolve(randomAge)
  } else {
    reject("No dog age available.")
  }
})

dogAgePromise
  .then((resp: number) => {
    console.log(resp)
    const myRespToString = resp.toString()
    return myRespToString
  })
  .then((newVariable: string) => {
    console.log(newVariable)
  })
  .catch((err: Error) => console.log(err))
