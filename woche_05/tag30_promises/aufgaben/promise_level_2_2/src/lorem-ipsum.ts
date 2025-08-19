console.log("Test")

const placeholderText: string =
  "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et"

function generateLoremIpsum(numberOfWords: number): Promise<string[]> {
  return new Promise((resolve, reject) => {
    let stringArray: string[] = []

    if (numberOfWords > 50) {
      reject("Number of words cannot exceed 50.")
    } else {
      for (let i = 0; i < numberOfWords; i++) {
        stringArray.push(placeholderText.split(" ")[i])
      }
      resolve(stringArray)
    }
  })
}

generateLoremIpsum(50)
  .then((resp: string[]) => {
    // console.log(resp)
    return resp.map((resp) => resp.toUpperCase())
  })
  .then((resp: string[]) => {
    return resp.map((resp) => resp.replace("L", "").replace("U", "").replace("T", ""))
  })
  .then((resp: string[]) => {
    return resp.filter((resp) => resp.length <= 8)
  })
  .then((resp: string[]) => {
    return resp.join(" ")
  })
  .then((resp: string) => {
    return console.log(resp)
  })
  .catch((err: string) => {
    console.error(err)
  })
