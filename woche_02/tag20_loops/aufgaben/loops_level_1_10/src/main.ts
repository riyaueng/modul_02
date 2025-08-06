import "./style.css"

function getHigherNumber(numberArray: number[]) {
  for (let i = 0; i < Array.length; i++) {
    const highestNumber = Math.max(...numberArray)
    if ((i = highestNumber)) {
      console.log("Gefunden!")
    } else {
      console.log("Hat nicht geklappt.")
    }
    return highestNumber
  }
}

const numberArray1: number[] = [2, 7, 4, 78, 21, 56, 98, 38, 3, 8]
const numberArray2: number[] = [23, 73, 5, 78, 111, 6, 18, 334, 22, 10]
const numberArray3: number[] = [45, 18, 425, 19, 101, 306, 138, 34, 62, 15]

console.log(getHigherNumber(numberArray1))
console.log(getHigherNumber(numberArray2))
console.log(getHigherNumber(numberArray3))
