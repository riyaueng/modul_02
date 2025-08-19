const numberPromise: Promise<number[]> = new Promise((resolve, reject) => {
  let numberArray: number[] = []

  for (let i = 0; i < 3; i++) {
    const randomNumber: number = Math.floor(Math.random() * 130) + 1
    numberArray.push(randomNumber)

    if (randomNumber > 100) {
      reject("Number is higher than 100.")
    } else {
      resolve(numberArray)
    }
  }

  console.log(`Original array: ${numberArray}`)
})

console.log(numberPromise)

numberPromise
  .then((resp: number[]) => {
    console.log(`Add 7: ${resp}`)
    return resp.map((num) => num + 7)
  })
  .then((resp: number[]) => {
    console.log(`Multiplicate 2: ${resp}`)
    return resp.map((num) => num * 2)
  })
  .then((resp: number[]) => {
    console.log(`Subtract 1: ${resp}`)
    return resp.map((num) => num - 1)
  })
  .then((resp: number[]) => {
    console.log(`Modulo 2: ${resp}`)
    return resp.map((num) => num % 2)
  })
  .catch((err) => {
    console.log(err)
  })
