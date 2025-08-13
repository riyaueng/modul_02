function calcAverage(classNumbers: number[]) {
  if (classNumbers.length === 0) return "Keine Schulnote"

  let averageNumber = classNumbers.reduce((savedValue, currentValue) => savedValue + currentValue, 0)
  let averageResult = averageNumber / classNumbers.length

  if (averageResult < 50) {
    console.log(`${averageResult}: Ungenügend`)
  } else if (averageResult < 60) {
    console.log(`${averageResult}: Mangelhaft`)
  } else if (averageResult < 70) {
    console.log(`${averageResult}: Ausreichend`)
  } else if (averageResult < 80) {
    console.log(`${averageResult}: Befriedigend`)
  } else if (averageResult < 90) {
    console.log(`${averageResult}: Gut`)
  } else {
    console.log(`${averageResult}: Sehr gut`)
  }
}

console.log(calcAverage([44, 11, 70, 80, 52, 88, 94, 3, 25, 46]))
console.log(calcAverage([78, 83, 55, 65, 65, 92, 99, 39, 75, 33]))
console.log(calcAverage([78, 83, 90, 80, 65, 92, 99, 59, 75, 33]))
console.log(calcAverage([78, 83, 90, 80, 99, 92, 99, 69, 75, 45]))
console.log(calcAverage([95, 93, 90, 80, 99, 92, 99, 88, 89, 79]))
