import "./style.css"

const dataArray: string[] = ["holidays.jpg", "restaurant.jpg", "food", "rooms.jpg", "dogatbeach.jpg"]

console.log(dataArray)

// * Mit .map

const removeFileMap: string[] = dataArray.map((filename) => {
  if (filename.toLowerCase().includes(".jpg")) {
    return filename.toLowerCase().slice(0, -4)
  } else {
    return "invalid"
  }
})
console.log(removeFileMap)

// * Mit .forEach

const removeFileEach: string[] = []
dataArray.forEach((filename) => {
  filename.toLowerCase()
  if (filename.includes(".jpg")) {
    removeFileEach.push(filename.toLowerCase().slice(0, -4))
  } else {
    removeFileEach.push("invalid")
  }
})
console.log(removeFileEach)
