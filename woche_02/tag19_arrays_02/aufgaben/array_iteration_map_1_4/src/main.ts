import "./style.css"

const fahrenheitArray: number[] = [64.4, 32, 44.6, 50, 75.2, 80.6, 98.6, 120.2]
console.log(fahrenheitArray)

const changeCelciusArray = fahrenheitArray.map((number) => (number - 32) / 1.8)

changeCelciusArray.forEach((number, indexNum, arrayNum) => {
  arrayNum[indexNum] = Math.round(number)
})

console.log(changeCelciusArray)
