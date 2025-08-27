import Actors from "./classes/Actor"
import Series from "./classes/Series"

console.log("Hallo")

const actor1 = new Actors("Joe", "Doe", "23.06.1987", "Male")
const actor2 = new Actors("Juliet", "Doit", "23.06.1987", "Female")
const actor3 = new Actors("Jaimy", "Done", "23.06.1987", "Diverse")

const actorsArray: Actors[] = [actor1, actor2, actor3]

console.log(actorsArray)

const serie1 = new Series(
  "Opening Game",
  45,
  "Lorem Ispum1",
  actorsArray,
  "Serie 01",
  "Sci-Fi Action Drama",
  2022,
  2025
)

console.log(serie1)
const serie2 = new Series("Middle Party", 15, "Lorem Ispum2", actorsArray, "Serie 02", "Fantays Mystery", 2018, 2023)
const serie3 = new Series("Ending Season", 23, "Lorem Ispum3", actorsArray, "Serie 03", "Horro Comedy", 2023, 2027)

console.log(serie1.printSeriesInfo())
console.log(serie2.printSeriesInfo())
console.log(serie3.printSeriesInfo())
