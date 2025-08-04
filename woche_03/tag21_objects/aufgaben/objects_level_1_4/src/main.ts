import "./style.css"

type Pet = {
  tiertyp: string
  namen: string[]
}

const unsereHaustiere: Pet[] = [
  {
    tiertyp: "Katze",
    namen: ["Gipsy", "Nala", "Dinky"],
  },
  {
    tiertyp: "Hunde",
    namen: ["Knöpfchen", "Pinselchen", "Droopy"],
  },
]

const getNala = unsereHaustiere[0].namen[1]
console.log(getNala)

const getDroopy = unsereHaustiere[1].namen[2]
console.log(getDroopy)

unsereHaustiere.forEach((petname: Pet) => {
  console.log(petname.namen)
})

unsereHaustiere[0].namen[2] = "Pinky"
unsereHaustiere[1].namen[2] = "Snoopy"

const neueTiere: Pet = {
  tiertyp: "Hamster",
  namen: ["Hamtaro", "Bijou", "Noki"],
}

unsereHaustiere.push(neueTiere)
console.log(unsereHaustiere)
