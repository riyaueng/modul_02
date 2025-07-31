import "./style.css"

const woerter: string[] = [
  "Banane",
  "Kaktus",
  "Flausch",
  "Ente",
  "Apfel",
  "Auto",
  "Giraffe",
  "Schmetterling",
  "Krokodil",
  "Lampe",
]

console.log(woerter)

const filterWoerter: string[] = woerter.filter(function (wort) {
  if (wort.length <= 6) {
    return wort
  }
})
console.log(filterWoerter)

const filterOhneE: string[] = woerter.filter((wort) => !wort.includes("E") && !wort.includes("e"))

console.log(filterOhneE)

function filterVokale(worte: string[]): string[] {
  return worte.filter((wort) => {
    const vokale = wort.match(/[aeiouAEIOU]/gi)
    return vokale !== null && vokale.length > 2
  })
}

const gefilterteWoerter = filterVokale(woerter)
console.log(gefilterteWoerter)
