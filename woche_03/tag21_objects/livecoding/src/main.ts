import "./style.css"

// * ------ Object ------

// ? Wie schreibt man Obj?
// Obj werden immer mit geschweiften Klammern geschrieben {}
// Sie bestehen aus Eigenschaften und deren Werte -> key und values
// Zuerst kommt der Name der Eigenschaft und dann ein Doppelpunkt und dann der Wert

const user = {
  vorName: "Joe",
  nachName: "Doe",
  age: 30,
  address: "main Street",
}

console.log(user)
console.log("Vorname: ", user.vorName)

user.vorName = "Lisa"
console.log("Vorname nach Referenz: ", user.vorName)

// * Eigenschaften eines Objs können auch Arrays oder wiedder Objs sein

const user2 = {
  vorName: "Marc",
  nachName: "Mustermann",
  age: 42,
  beruf: "Trainer",
  address: {
    stadt: "Berlin",
    strasse: "Musterstraße",
    plz: 10111,
  },
  hobbies: ["Soccer", "Tennis", "Play Piano"],
}

// const user3 = {
//   username: "Malte"
// }

console.log(user2.nachName)
console.log(user2.address.strasse)

// ! Type -> Wir definieren uns einen eigenen Datentyp namens TMovie und legen die Pflichteigenschaften und Datentypen fest

type TMovie = {
  title: string
  year: number
  mainCharacter: string
  categories: string[]
}

const movie1: TMovie = {
  title: "The Godfather",
  year: 1972,
  mainCharacter: "Don Vito",
  categories: ["action"],
}

console.log(movie1)
movie1.categories.push("Drama")

const movie2: TMovie = {
  title: "Batman Begins",
  year: 2005,
  mainCharacter: "Batman",
  categories: ["adventure", "drama", "fantasy"],
}

const movie3: TMovie = {
  title: "The Lord of the Rings: The Two Towers",
  year: 2002,
  mainCharacter: "Gollum",
  categories: ["adventure", "drama", "fantasy"],
}

const moviesCollection: TMovie[] = [movie1, movie2, movie3]

// ! forEach(), map(), die ganze Arrays Methoden werden immer mit einem Callback Function geschrieben

// ? Ich kann das Array von dem Object dann in einer Schleife durchlaufen und jeweils einzelne Eigenschaften ausgeben

moviesCollection.forEach((movie: TMovie) => {
  console.log(movie.title)
})

// Movies nach Erscheinungsjahr sortieren

moviesCollection.sort((movieA: TMovie, movieB: TMovie) => {
  return movieA.year - movieB.year
})

console.log(moviesCollection)

const movie4: TMovie = {
  title: "Hulk",
  year: 2010,
  mainCharacter: "Hulk",
  categories: ["action", "fantasy"],
}

moviesCollection.push(movie4)

// * for…in ist für Obj zuständig

// ! V1 Alte Version
// Keys ausgeben
// for (const key in movie4) {
//   console.log(key)
// }

// Values ausgeben
// for (const value in movie4) {
//   console.log(movie4[value])
// }

// ! V2 Neue Version

console.log(Object.keys(movie4))
console.log(Object.values(movie4))
