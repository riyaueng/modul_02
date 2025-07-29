import "./style.css"

let x: number = 1
let y: number = returnOne(5, 5)

function returnOne(x: number, y: number): number {
  if (x === y) {
    console.log("Wird das gedruckt?")
  }
  return 1
}

console.log(x, y)
