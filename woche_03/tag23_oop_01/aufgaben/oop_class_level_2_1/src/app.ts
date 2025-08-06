import "./style.css"
import { SchoolClass } from "./classes/SchoolClass"
import { PersonClass } from "./classes/personClass"

const schoolClass1 = new SchoolClass(5, "Wüstenkinder", [])
console.log(schoolClass1)

const person1 = new PersonClass(12, "Lia", "Funghia", new Date("2007-01-24"))
const person2 = new PersonClass(13, "Henri", "Gustus", new Date("2006-10-03"))
const person3 = new PersonClass(14, "Henri", "Gustus", new Date("2005-12-18"))
const person4 = new PersonClass(15, "Petra", "Dalia", new Date("2006-04-31"))
const person5 = new PersonClass(16, "Ben", "Cuscos", new Date("2007-08-26"))

const students = [person1, person2, person3, person4, person5]

students.forEach((student) => schoolClass1.addPerson(student))
schoolClass1.showStudents()
