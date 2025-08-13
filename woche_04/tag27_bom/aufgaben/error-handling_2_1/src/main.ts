import "./style.css"

function generateLottoNumber(): number {
  const randomNumber = Math.floor(Math.random() * 100) + 1

  if (randomNumber > 49) {
    throw new Error(`Ungültige Zahl: ${randomNumber}`)
  }
  return randomNumber
}

console.log(generateLottoNumber())

const lottoResult: number[] = []

while (lottoResult.length < 7) {
  try {
    const lottoNumber = generateLottoNumber()
    if (!lottoResult.includes(lottoNumber)) {
      lottoResult.push(lottoNumber)
    }
  } catch (error) {
    console.log(error)
  }
}

console.log(lottoResult)
