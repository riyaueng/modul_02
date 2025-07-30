import "./style.css"

const numberArray: number[] = [23, 54, 75]
console.log(numberArray)

const pushNumbers = numberArray.push(23, 45, 66, 71, 90)
console.log(numberArray)

const unshiftNumbers = numberArray.unshift(96, 51, 83, 49, 22)
console.log(numberArray)

const popNumber1 = numberArray.pop()
const popNumber2 = numberArray.pop()
console.log(numberArray)

const shiftNumber1 = numberArray.shift()
const shiftNumber2 = numberArray.shift()
console.log(numberArray)
