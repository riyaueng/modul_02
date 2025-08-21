import "./style.css"
import type { ICharacter, ICharacterResult } from "./interfaces/ICharacter"
import type { ILocation, ILocationResult } from "./interfaces/ILocation"
import type { IEpisode, IEpisodeResult } from "./interfaces/IEpisode"

const BASE_URL = `https://rickandmortyapi.com/api`
const CHARARCTER_URL = `${BASE_URL}/character`
const LOCATION_URL = `${BASE_URL}/location`
const EPISODE_URL = `${BASE_URL}/episode`

// # --------- Elemente abholen ----------

const outputElement = document.getElementById("output") as HTMLDivElement
const characterElement = document.getElementById("api-character") as HTMLAnchorElement
const locationElement = document.getElementById("api-location") as HTMLAnchorElement
const epsiodeElement = document.getElementById("api-episode") as HTMLAnchorElement

const nextPageElement = document.getElementById("next-page") as HTMLButtonElement
const lastPageElement = document.getElementById("last-page") as HTMLButtonElement

let currentPageUrl: string = CHARARCTER_URL

// # --------- Weitere Pages erstellen ----------

nextPageElement.addEventListener("click", async (event: Event) => {
  event.preventDefault()
  outputElement.innerHTML = ""
  try {
    const resp = await fetch(currentPageUrl)
    // console.log(await resp.json())
    const { info, results } = (await resp.json()) as ICharacter
    console.log(info)
    console.log(results)

    // ? Kann auch in eine seperate Funktion geschrieben werden !
    results.forEach(async (result: ICharacterResult) => {
      const divElement = document.createElement("div") as HTMLDivElement
      divElement.innerHTML = await displayCharacter(result)
      outputElement.appendChild(divElement)
    })

    if (info.next) {
      currentPageUrl = info.next
    }
  } catch (error) {
    console.log(error)
  }
})

// # ------- Character-Elemente in HTML übergeben --------

// characterElement.addEventListener("click", async () => {
//   try {
//     const resp = await fetch(CHARARCTER_URL)
//     const data = await resp.json()
//     console.log(data)
//   } catch (error) {}
// })

// ? ---- Effizienter um die Error-Ursache besser zu finden  ----

characterElement.addEventListener("click", async () => {
  outputElement.innerHTML = ""
  try {
    const resp = await fetch(CHARARCTER_URL)
    if (resp.status === 200 && resp.ok) {
      // --- Variante 1 ---
      // const data: ICharacter = await resp.json()

      // --- Variante 2 ---
      const { results } = (await resp.json()) as ICharacter
      results.forEach(async (result: ICharacterResult) => {
        // ---- In HTML-Element übergeben ----
        const characterContainer = document.createElement("div") as HTMLDivElement
        characterContainer.innerHTML = await displayCharacter(result)
        outputElement.appendChild(characterContainer)
      })

      // ! Navigiere dich durch das Data-Object um an das gewünschte Daten-Array zu kommen
    }
  } catch (error) {
    console.log(error)
  }
})

// ? ---- Funktion für die Darstellung in HTML ----
// * --- Sauberer Code, wenn man Funktionen außerhalb schreibt ----

async function displayCharacter(character: ICharacterResult): Promise<string> {
  const resultAsString = `
<div class="flex flex-col justify-between align-sub">
  <p class="text-red-600 font-bold">Name: ${character.name} </p>
  <p>Status: ${character.status}</p>
  <p>Gener: ${character.gender} </p>
  <p>Origin: ${character.origin?.name}</p>
  <p>Location: ${character.location?.name}</p>
  <img src="${character.image}"  alt="${character.name}">
</div>
`
  return resultAsString
}

// # ------- Location-Elemente in HTML übergeben --------

locationElement.addEventListener("click", async () => {
  outputElement.innerHTML = ""
  try {
    const resp = await fetch(LOCATION_URL)
    const { results } = (await resp.json()) as ILocation
    for (let result of results) {
      const locationContainer = document.createElement("div") as HTMLDivElement
      locationContainer.innerHTML = await displayLocation(result)
      outputElement.appendChild(locationContainer)
    }
  } catch (error) {
    console.log(error)
  }
})

// ? ---- Funktion für die Darstellung in HTML ----

async function displayLocation(location: ILocationResult): Promise<string> {
  const nameCharacterInResident = await fetchResident(location.residents)
  const resultAsString = `
<p> ${location.name}</p>
<p>Resident-Charakter Namen: ${nameCharacterInResident}</p>
`
  return resultAsString
}

async function fetchResident(locationResidetnUrl: string[]): Promise<string> {
  const characterArray: string[] = []

  for (let residentUrl of locationResidetnUrl) {
    try {
      const resp = await fetch(residentUrl)
      const character: ICharacterResult = await resp.json()

      // if Kann man anwenden, wenn man nicht weiß ob ein Element true ist
      if (character.name) {
        characterArray.push(character.name)
      }
    } catch (error) {
      console.log(error)
    }
  }
  return characterArray.join(", ")
}

// # ------- Episode-Elemente in HTML übergeben --------

epsiodeElement.addEventListener("click", async () => {
  outputElement.innerHTML = ""
  try {
    const resp = await fetch(EPISODE_URL)
    const data: IEpisode = await resp.json()

    await Promise.all(
      data.results.map(async (result: IEpisodeResult) => {
        const episodeContainer = document.createElement("div") as HTMLDivElement
        episodeContainer.innerHTML = await dipslayEpisode(result)
        outputElement.appendChild(episodeContainer)
      })
    )

    console.log(data)
  } catch (error) {
    console.log(error)
  }
})

// ? ---- Funktion für die Darstellung in HTML ----

async function dipslayEpisode(episode: IEpisodeResult): Promise<string> {
  const characterName = await fetchResident(episode.characters)
  const resultAsString = `
  <div>
  <p>Name: ${episode.name} </p>
  <p>Charakter: ${characterName} </p>
  </div>
  `
  return resultAsString
}
