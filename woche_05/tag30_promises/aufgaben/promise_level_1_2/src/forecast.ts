import { WeatherType } from "./weather-type"

console.log("Hallo")

const weatherPromise: Promise<WeatherType> = new Promise((resolve, reject) => {
  const randomNumber: number = Math.floor(Math.random() * 9)
  if (randomNumber === 0) {
    resolve(WeatherType.none)
  } else if (randomNumber === 1) {
    resolve(WeatherType.cloudy)
  } else if (randomNumber === 2) {
    resolve(WeatherType.rainy)
  } else if (randomNumber === 3) {
    resolve(WeatherType.snowy)
  } else if (randomNumber === 4) {
    resolve(WeatherType.stormy)
  } else if (randomNumber === 6) {
    resolve(WeatherType.windy)
  } else {
    reject("Weather forecast could not be determined.")
  }
})

weatherPromise
  .then((resp: WeatherType) => {
    console.log(WeatherType[resp])
  })
  .catch((err: Error) => console.log(err))

// * ---- Kürzere Lösung von Farid ----

//   enum weatherType {
//   none,
//   sunny,
//   cloudy,
//   rainy,
//   snowy
// }

// const weatherPromise: Promise<weatherType> = new Promise((resolve, reject) => {
//   const weatherTypeLength = Object.keys(weatherType).length
//   const randomNumber: number = Math.floor(Math.random() * weatherTypeLength)

//   if (randomNumber < 6) {
//     resolve(randomNumber)
//   } else {
//     reject("Weather forecast could not be determind")
//   }
// })

// weatherPromise.then((data: weatherType) => {
//   console.log(data);
//   console.log(weatherType[data]);
// })
