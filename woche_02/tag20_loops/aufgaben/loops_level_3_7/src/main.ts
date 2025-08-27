console.log("Encrypted message with Rot13.")

const alphabetLetters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
]
console.log(alphabetLetters)

function encryptRot13(word: string): string {
  let result = ""

  for (let i = 0; i < word.length; i++) {
    const upperLetter = word[i].toUpperCase()
    const alphabetIndex = alphabetLetters.indexOf(upperLetter)
    const indexRot13 = (alphabetIndex + 13) % alphabetLetters.length
    result = result + alphabetLetters[indexRot13]

    if (upperLetter === " ") {
      result = result + " "
    }
  }
  return result
}

console.log(encryptRot13("Encrypted message with Rot13."))
