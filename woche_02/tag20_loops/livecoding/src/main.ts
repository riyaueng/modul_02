// querySelector<HTMLInputElement> damit können wir ts mitteilen, welches Element wir erwarten

const arrayInput = document.querySelector<HTMLInputElement>("#array_input")
const buttonElement = document.querySelector<HTMLButtonElement>("#button")

// * Mit dem Optional Chaining Operator (?.) können wir aucf Properties von Werten zugreifen, die vielleicht nicht vorhanden sind. Falls sie nicht vorhanden sind, ist das Ergebnis undefined
// const inputValue = arrayInput? arrayInput.value : undefined
// const inputValue = arrayInput?.value

buttonElement?.addEventListener("click", function buttonCallback() {
  if (arrayInput) {
    const array: number[] = JSON.parse(arrayInput.value)

    // Wir iterieren einmal über den Array, hören dabei aber ein Element früher auf als sonst, da wir immer zwei benachtbarte Elemente vergleichen wollen und sonst über das Ziel hinaussschießen würden
    for (let i = 0; i < array.length - 1; i++) {
      const a = array[i]
      const b = array[i + 1]
      if (a > b) {
        array[i + 1] = a
        array[i] = b
      }
    }
    console.log(array)
    // Etwas sortieren array zurück in input schreiben
    arrayInput.value = JSON.stringify(array)
  }
})
