console.log("Hello")

const numberPromise: Promise<number[]> = new Promise((resolve, reject) => {
  const randomNumber1: number = Math.floor(Math.random() * 130) + 1
  const randomNumber2: number = Math.floor(Math.random() * 130) + 1
  const randomNumber3: number = Math.floor(Math.random() * 130) + 1

  if (randomNumber1 > 100 || randomNumber2 > 100 || randomNumber3 > 200) {
    reject("Number is higher than 100.")
  } else {
    const randomNumbers: number[] = [...[randomNumber1], ...[randomNumber2], ...[randomNumber3]]
    console.log(randomNumbers)
    resolve(randomNumbers)
  }
})

// numberPromise.then((resp: number[]) => {
//   for (let i = 0; i < resp.length; i++) {
//     resp[i] = resp[i] + 7
//     console.log(resp)
//   }
// }).then((resp: number[]) => {
//    for (let i = 0; i < resp.length; i++) {
//   resp[i] = resp[i]*2
// }).then((resp: number[]) => {
//    for (let i = 0; i < resp.length; i++) {
//   resp[i] = resp[i] - 2
