// * Runden

const rundenAnzeige = document.querySelector(".runden-anzeige") as HTMLElement
const rundenAnzahl = document.querySelector(".runden-anzahl") as HTMLElement

const gespielteRunden = document.querySelector(".gespielte-runden") as HTMLSpanElement
const gesamteRunden = document.querySelector(".gesamte-runden") as HTMLSpanElement
const resetBtn = document.querySelector(".reset") as HTMLButtonElement

//Spielstaende
const spielstandSpieler = document.querySelector(".spielstand-spieler") as HTMLDivElement
const spielstandComputer = document.querySelector(".spielstand-computer") as HTMLDivElement

//Anzeige - gewonnen, verloren, 'lass uns spielen'
const actionOutput = document.querySelector(".action-output") as HTMLElement

// Button Area mit Buttons: Schere, Stein, Papier
const btnArea = document.querySelector(".choices") as HTMLElement
const schereBtn = document.querySelector(".schere") as HTMLButtonElement
const steinBtn = document.querySelector(".stein") as HTMLButtonElement
const papierBtn = document.querySelector(".papier") as HTMLButtonElement

const makeYourMove = document.querySelector(".mach-deinen-zug") as HTMLElement

const spieler_choice_element = document.querySelector("spieler_choice") as HTMLDivElement
const computer_choice_element = document.querySelector("computer_choice") as HTMLDivElement

// ! --------      Variablen     -------

let aktuellRunde: number = 0
let spielerPunkte: number = 0
let computerPunkte: number = 0

let computerChoice: string = ""

const randomComputerAuswahl = () => {
  const randomZahl = Math.floor(Math.random() * 3) + 1

  if (randomZahl === 1) {
    computerChoice = "Schere"
  } else if (randomZahl === 2) {
    computerChoice = "Stein"
  } else {
    computerChoice = "Papier"
  }
}

const spielen = (benutzerAuswahl: string) => {
  event?.preventDefault()
  randomComputerAuswahl()

  computer_choice_element.innerText = `${computerChoice}`
  spieler_choice_element.innerText = `${benutzerAuswahl}`

  const gesamteRundenAnzahlInput = document.querySelector('input[name="num-of-rounds"]:checked') as HTMLInputElement
  const gesamtZahlRunden = Number(gesamteRundenAnzahlInput.value)

  gesamteRunden.innerText = gesamtZahlRunden.toString()
  aktuellRunde++
  gespielteRunden.innerText = aktuellRunde.toString()

  // ? ---- Regeln -----

  if (
    (benutzerAuswahl === "Schere" && computerChoice === "Papier") ||
    (benutzerAuswahl === "Stein" && computerChoice === "Schere") ||
    (benutzerAuswahl === "Papier" && computerChoice === "Stein")
  ) {
    spielerPunkte++
    actionOutput.innerText = "You won"
  } else if (benutzerAuswahl === computerChoice) {
    actionOutput.innerText = `Unentschieden ${benutzerAuswahl}`
  } else {
    computerPunkte++
    actionOutput.innerText = "You lose"
  }

  spielstandSpieler.innerText = spielerPunkte.toString()
  spielstandComputer.innerText = computerChoice.toString()

  if (aktuellRunde === gesamtZahlRunden) {
    // ! Neue function wird benötigt
    gameOver()
    if (spielerPunkte === computerPunkte) {
      actionOutput.innerText = "Gleichstand"
    } else if (spielerPunkte > computerPunkte) {
      actionOutput.innerText = "Glückwunsch"
    } else {
      actionOutput.innerText = "Leider verloren."
    }
  }
}

const gameOver = () => {
  btnArea.classList.add("display-none")
}

schereBtn.addEventListener("click", () => spielen("Schere"))
papierBtn.addEventListener("click", () => spielen("Papier"))
steinBtn.addEventListener("click", () => spielen("Stein"))

resetBtn.addEventListener("click", (e: Event) => {
  // ! v1
  window.location.reload()

  // ! v2
  // spielerPunkte = 0
  // computerPunkte = 0
  // aktuellRunde = 0
  // actionOutput.textContent = "Lass uns spielen"

  // spielstandSpieler.innerText = "0"
  // spielstandComputer.innerText = "0"

  // btnArea.classList.remove("display-none")
  // rundenAnzahl.classList.remove("display-none")
  // rundenAnzeige.classList.remove("display-block")
})
