import type { IHead, IHouses, ITrait } from "./interfaces/IHouses"
import type { ISpells } from "./interfaces/ISpells"
import "./style.css"

// * Immer am Anfang, wenn ich die Schnittstelle aufrufe und mehrere Endpunkte/Routen habe, die UR
const BASE_URL = "https://wizard-world-api.herokuapp.com"
const HOUSE_URL = `${BASE_URL}/Houses`
const SPELLS_URL = `${BASE_URL}/Spells`

// * Elemente abholen

const houseLink = document.getElementById("nav-houses") as HTMLAnchorElement
const spellsLink = document.getElementById("nav-spells") as HTMLAnchorElement
const contentDiv = document.getElementById("content") as HTMLDivElement

houseLink.addEventListener("click", () => {
  console.log("Houses clicked")
  fetchAndDisplay(HOUSE_URL, "Houses")
})

spellsLink.addEventListener("click", () => {
  console.log("Spells clicked")
  fetchAndDisplay(SPELLS_URL, "Spells")
})

function fetchAndDisplay(url: string, routeName: string) {
  fetch(url)
    .then((resp: Response) => {
      console.log(resp)
      return resp.json()
    })
    .then((data) => {
      if (routeName === "Houses") {
        const houses = data as IHouses[]
        contentDiv.innerHTML = createHouseList(houses)
        createHouseList(houses)
        // console.log(houses)
      } else if (routeName === "Spells") {
        const spells = data as ISpells[]
        contentDiv.innerHTML = createSpellsList(spells)
        // console.log(spells)
      }
    })
    .catch((error: Error) => {
      console.log(error)
    })
}

function createHouseList(houses: IHouses[]) {
  const resultAsString = houses.map((house: IHouses) => {
    console.log(house)
    return `
          <div>
          <p>Id: ${house.id}</p>
          <p>Name: ${house.name}</p>
          <p>House Colours: ${house.houseColours}</p>
          <p>Founder: ${house.founder}</p>
          <p>Animal: ${house.animal}</p>
          <p>Element: ${house.element}</p>
          <p>Ghost: ${house.ghost}</p>
          <p>CommonRoom: ${house.commonRoom}</p>
          <p>Heads: ${house.heads.map((head: IHead) => `${head.firstName} ${head.lastName}`).join(", ")}</p>
          <p>Traits: ${house.traits.map((trait: ITrait) => `${trait.name}`).join(", ")}</p>
        </div>`
  })
  console.log(JSON.stringify(resultAsString))
  return `<main>${resultAsString.join("")}</main>`
}

function createSpellsList(spells: ISpells[]) {
  const resultAsString = spells.map((spell: ISpells) => {
    console.log(spells)
    return `<li>
     <p>Id: ${spell.id}</p>
          <p>Name: ${spell.name}</p>
          <p>Incantation: ${spell.incantation}</p>
          <p>Effect: ${spell.effect}</p>
          <p>Type: ${spell.type}</p>
    </li>
    `
  })

  return `<ul>${resultAsString.join("")}</ul>`
}
