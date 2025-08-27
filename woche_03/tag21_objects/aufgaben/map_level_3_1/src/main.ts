import "./style.css"

console.log("Hey")

import bands from "./favoriteBands"
import "./style.css"

console.log(bands)
console.log(bands.size)

bands.set("Slipknot", [
  "Shawn Crahan",
  "Mick Thomson",
  "Corey Taylor",
  "Sid Wilson",
  "Jim Root",
  "Alessandro Venturella",
  "Micheal Pfaff",
  "Eloy Casagrande",
])

// ----- Neue Lieblingsbands hinzufügen -----

bands.set("Alesana", ["Dennise Lee", "Shawn Milke", "Patrick Thompson", "Jeremy Bryan", "Shane Crump"])

bands.set("Linkin Park", ["Chester Bennington", "Mike Shinoda", "brad Delson", "Dave Farell", "Joe Hahn"])

const bandMembers = bands.get("Slipknot")
console.log(bandMembers)

// ----- nach Mitgliedern suchen (values) -----

if (bandMembers) {
  const lastMember: string = bandMembers.slice(-1)[0]
  console.log(lastMember)
}

if (bands.has("Metallica")) {
  console.log("I found Metallica here.")
} else {
  console.log("There is no band like Metallica here.")
}

// ----- Eintrag in Map ändern/ersetzen -----

bands.set("Linkin Park", [
  "Emily Armstrong",
  "Mike Shinoda",
  "brad Delson",
  "Dave Farell",
  "Joe Hahn",
  "Colin Brittain",
])

const LinkinParkUpdate = bands.get("Linkin Park")

console.log(LinkinParkUpdate)

// ? Ergebnis: Der letzte Eintrag wird übernommen und angezeigt

// ----- Mitglieder mit Zeichen länger als 12 ausgeben -----

for (const [band, members] of bands) {
  if (members) {
    for (let i = 0; i < members.length; i++) {
      let memberEntry = members[i]
      if (memberEntry.length > 12) {
        const memberOver12 = `Band: ${band}, Member: ${memberEntry}, Length: ${memberEntry.length}`
        console.log(memberOver12)
      }
    }
  }
}
