console.log("Hello")

function doHomwork(studentName: string, timeInMilliSeconds: number): Promise<string> {
  return new Promise((resolve, reject) => {
    if (timeInMilliSeconds === 0) {
      reject("Homework duration must be greater than 0.")
    }
    setTimeout(() => {
      resolve(`${studentName} has finished homework.`)
    }, timeInMilliSeconds)
  })
}

const aliceHomework = doHomwork("Alice", 3000)
const joeHomework = doHomwork("Joe", 1000)

console.log(aliceHomework)
console.log(joeHomework)

// * ---- Lange Version: Sich an alle Promises einzeln hängen ----
// aliceHomework
//   .then((lastMsg: string) => {
//     console.log(lastMsg)
//   })
//   .catch((err: Error) => {
//     console.log(err)
//   })

Promise.all([aliceHomework, joeHomework])
  .then((results: string[]) => {
    // * Hier landen wir, wenn alle zwei Promises erfolgreich in resolve gegangen sind (bis auch der letzte fertig ist.)
    // * In results stehen die zwei Ergbebnisse der zwei Promises genau in der Reihenfolge, das wa swir in Promise.all reingeschrieben haben

    results.forEach((result: string) => {
      console.log(result)
    })
  })
  .catch((err) => console.log(err))

type TIcecream = {
  id: number
  name: string
  details?: string
  price: number
}

// * --- local Icecream ---

const onlineIceCreams: TIcecream[] = [
  { id: 3, name: "Strawberry", price: 3.0 },
  { id: 4, name: "Mango", price: 2.5 },
]

// * --- online Icecream ----

const localIceCreams: TIcecream[] = [
  { id: 1, name: "Vanilla", price: 2.0 },
  { id: 2, name: "Chocolate", price: 2.5 },
]

const getLocalIcecream = (): Promise<TIcecream[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(localIceCreams)
    }, 2000)
  })
}

const getOnlineIcecream = (): Promise<TIcecream[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(onlineIceCreams)
    }, 3000)
  })
}

Promise.all([getLocalIcecream(), getOnlineIcecream()])
  // ! -- Variante 1 ---
  // .then((resp: [TIcecream[], TIcecream[]])=>{

  // ! -- Variante 2 ---
  .then((resp: TIcecream[][]) => {
    console.log(resp)
    // * resp ist ein Array vom Array IceCream Obj
    const [local, online] = resp

    console.log("Local IceCream", local)
    console.log("Online IceCream", online)

    const allIceCream: TIcecream[] = [...local, ...online]
    console.log(allIceCream)

    allIceCream.forEach((icecream: TIcecream) => {
      console.log(icecream.price)
    })
  })
  .catch((err: string) => console.log(err))
