export class PersonClass {
  _id: number
  _firstName: string
  _lastName: string
  _birthday: Date

  constructor(id: number, firstname: string, lastname: string, birthday: Date) {
    this._id = id
    this._firstName = firstname
    this._lastName = lastname
    this._birthday = birthday
  }
}
