import "./style.css"

function getNumberOfVowels(letterString: string) {
  const vowelsArray: string[] = []
  const lowerLetters = letterString.toLowerCase()
  const searchVowels = "aeiou"

  for (let i = 0; i < lowerLetters.length; i++) {
    if (searchVowels.includes(lowerLetters[i])) {
      vowelsArray.push(lowerLetters[i])
    }
  }
  return vowelsArray
}

const exampleString1 = "Hallo, ich bin ein Beispiel."
const filledVowelsArray = getNumberOfVowels(exampleString1)
console.log(filledVowelsArray)
