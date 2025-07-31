import "./style.css"

const numberArray: number[] = [
  118, 16, 80, 151, 47, 38, 95, 142, 68, 61, 34, 151, 29, 17, 56, 30, 100, 106, 15, 130, 74, 97, 27, 199, 91, 127, 73,
  112, 92, 106, 127, 71, 26, 115, 178,
]
console.log(numberArray)

const checkNumber = numberArray.map((number) => {
  if (number % 3 === 0) {
    return number + 100
  } else {
    return number
  }
})

console.log(checkNumber)

const filterCheckNumber = numberArray.filter((number) => number % 3 === 0)

console.log(filterCheckNumber)
