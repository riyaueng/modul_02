import "./style.css"

const inputNumber = document.querySelector("#input_number") as HTMLInputElement
const elementBts = document.querySelector("#btn") as HTMLButtonElement
const outputLetters = document.querySelector(".result_loop") as HTMLParagraphElement

elementBts?.addEventListener("click", () => {
  const numberValue = parseInt(inputNumber.value)

  if (isNaN(numberValue) || numberValue < 1) {
    outputLetters.textContent = "Bitte eine gültige Zahl eingeben."
    return
  }

  let outputWord = "L"
  for (let i = 0; i < numberValue; i++) {
    outputWord += "o"
  }
  outputWord += "p"

  outputLetters.textContent = outputWord
  console.log(outputWord)
})
