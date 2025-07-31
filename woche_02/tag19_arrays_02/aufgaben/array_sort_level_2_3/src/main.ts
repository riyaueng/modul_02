import "./style.css"

const oldPainters: string[] = [
  "Caspar David Friedrich",
  "Mary Cassatt",
  "Rosa Bonheur",
  "Francisco de Goya",
  "Édouard Manet",
]

const newPainters: string[] = ["Pablo Picasso", "Salvador Dalí", "Frida Kahlo", "Georgia O'Keeffe"]

const emptyArray: string[] = []
const femalePainters = emptyArray.concat(oldPainters[1], oldPainters[2], newPainters[2], newPainters[3])
console.log(femalePainters)

const selectOldPainters = [oldPainters[0], oldPainters[3], oldPainters[4]]
const selectNewPainters = [newPainters[0], newPainters[1]]

const malePainters = [...selectOldPainters, ...selectNewPainters]
console.log(malePainters)
