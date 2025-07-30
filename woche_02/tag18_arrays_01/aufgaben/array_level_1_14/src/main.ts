import "./style.css"

const oldHollywoodActors: string[] = [
  "Marlon Brando",
  "Audrey Hepburn",
  "Elizabeth Taylor",
  "Cary Grant",
  "Paul Newman",
  "Doris Day",
]
console.log(oldHollywoodActors)

const actorsReference = oldHollywoodActors
const addMarilyn = actorsReference.push("Marilyn Monroe")
console.log(actorsReference)

const copyActorList1 = oldHollywoodActors.concat()
console.log(copyActorList1)

const copyActorList2 = oldHollywoodActors.slice()
console.log(copyActorList2)

const copyActorList3 = [...oldHollywoodActors]
console.log(copyActorList3)

const changeList1 = copyActorList1.splice(5, 1, "New Name")
const changeList2 = copyActorList2.splice(-2, 1, "New Name")
const changeList3 = copyActorList3.splice(2, 3, "New Name 1", "New Name 2", "New Name 3")

console.log(oldHollywoodActors)
console.log(copyActorList1)
console.log(copyActorList2)
console.log(copyActorList3)
