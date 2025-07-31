import "./style.css"

const numberArray: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log({ numberArray })

const evenNumbers: number[] = numberArray.filter(function printEvenNumbers(number) {
  return number % 2 === 0
})
console.log({ evenNumbers })

const oddNumbers: number[] = numberArray.filter(function printOddNumbers(number) {
  return number % 2 !== 0
})
console.log({ oddNumbers })

const evenNumbersArrow: number[] = numberArray.filter((number) => number % 2 === 0)

console.log({ evenNumbersArrow })

const oddNumbersArrow: number[] = numberArray.filter((number) => number % 2 !== 0)

console.log({ oddNumbersArrow })
