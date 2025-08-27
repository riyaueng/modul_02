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

bands.set("Alesana", ["Dennise Lee", "Shawn Milke", "Patrick Thompson", "Jeremy Bryan", "Shane Crump"])

bands.set("Linkin Park", ["Chester Bennington, Mike Shinoda", "brad Delson", "Dave Farell", "Joe Hahn"])

const bandMembers = bands.get("Slipknot")
console.log(bandMembers)

if (bandMembers) {
  const lastMember: string = bandMembers.slice(-1)[0]
  console.log(lastMember)
}
