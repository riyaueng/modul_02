function createImageNames(): string[] {
  let returnArray: string[] = []

  for (let i = 1; i <= 100; i++) {
    let numberString = i.toString().padStart(3, "0")
    let nameFile = `image_${numberString}.jpg`
    returnArray.push(nameFile)
  }

  return returnArray
}

console.log(createImageNames())
