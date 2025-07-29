import "./style.css"
import { getYear } from "date-fns"

const dateNow = new Date()
const yearNow = getYear(dateNow)
console.log(yearNow)

function calculateAge(birthYear: number): number {
  return yearNow - birthYear
}

console.log(calculateAge(1992))

function compareAge(myAge: number, hisAge: number) {
  return Math.abs(myAge - hisAge)
}

const altersDifferenz: number = compareAge(32, 28)

console.log(altersDifferenz)
