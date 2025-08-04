function addToFifty(): void {
  let sum = 0
  while (sum <= 50) {
    const randomNumber: number = Math.floor(Math.random() * 10) + 1
    console.log(randomNumber)
    sum += randomNumber
  }
  console.log(`${sum} > 50. Stopping right here.`)
}

addToFifty()
