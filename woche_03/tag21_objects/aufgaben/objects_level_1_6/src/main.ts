type Musik = {
  kunstler: string
  title: string
  release_jahr: number
  formate: string[]
  gold: boolean
}

const meineTopVier: Musik[] = [
  {
    kunstler: "The Beatles",
    title: "Abbey Road",
    release_jahr: 1969,
    formate: ["LP", "CD", "MC", "Download"],
    gold: true,
  },
  {
    kunstler: "Pink Floyd",
    title: "Dark Side of the Moon",
    release_jahr: 1978,
    formate: ["CS", "CD", "LP", "Download"],
    gold: true,
  },
  {
    kunstler: "Led Zeppelin",
    title: "Led Zeppelin IV",
    release_jahr: 1971,
    formate: ["CS", "LP", "Download"],
    gold: true,
  },
  {
    kunstler: "Metallica",
    title: "Kill ’Em All und Ride the Lightning",
    release_jahr: 1983,
    formate: ["LP", "CD", "MC", "Download"],
    gold: true,
  },
]

const meineBand = meineTopVier[0].kunstler
console.log(meineBand)

const meinFormat = meineTopVier[1].formate[3]
console.log(meinFormat)

const meinStatus = meineTopVier[1].gold
console.log(`Gold gewonnen? ${meinStatus}`)

const meinJahr1 = meineTopVier[2].release_jahr
const meinJahr2 = meineTopVier[3].release_jahr
console.log(`Meine Jahre: ${meinJahr1} und ${meinJahr2}`)

const meinFormat2 = meineTopVier[3].formate[2]
console.log(`Format von Metallica: ${meinFormat2}`)

const nurMetallica = meineTopVier[3].title
const inWoerter = nurMetallica.split(" ")
const gesuchtesWort = inWoerter[4]
console.log(gesuchtesWort)

const favoriteSong: Musik = {
  kunstler: "Slipknot",
  title: "Duality",
  release_jahr: 2004,
  formate: ["LP", "CD", "MC", "Download"],
  gold: false,
}

meineTopVier.push(favoriteSong)
console.log(meineTopVier)
