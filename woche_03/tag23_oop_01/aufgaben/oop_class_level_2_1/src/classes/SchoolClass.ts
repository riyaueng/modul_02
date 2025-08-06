import { PersonClass } from "./personClass"

export class SchoolClass {
  _id: number
  _name: string
  _person: PersonClass[]

  constructor(id: number, name: string, person: PersonClass[]) {
    this._id = id
    this._name = name
    this._person = person
  }

  addPerson(person: PersonClass) {
    this._person.push(person)
  }

  showStudents() {
    this._person.forEach((student) => {
      console.log(
        `${student._firstName} ${student._lastName} mit der ID ${student._id} hat geburststagt am ${student._birthday}.`
      )
    })
  }
}
