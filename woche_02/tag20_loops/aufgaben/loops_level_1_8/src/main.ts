console.log("Test")

let indexNumber = 1
let evenNumbers = ""
let outputDiv = document.querySelector(".even_numbers")
do {
  if (indexNumber % 2 === 0) {
    evenNumbers += indexNumber + "<br>"
    console.log(indexNumber)
  }
  indexNumber++
} while (indexNumber <= 20)

if (outputDiv) {
  outputDiv.innerHTML = evenNumbers
}
