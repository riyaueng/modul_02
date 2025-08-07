import { Gender } from "../enums/Gender"

export class Person {
  _name: string = ""
  _birthday: Date
  _gender: Gender

  get personName(): string {
    return this._name
  }

  get personbirthday(): Date {
    return this._birthday
  }

  get personGender(): Gender {
    return this._gender
  }

  set name(value: string) {
    this._name = value
  }

  set gender(value: Gender) {
    if (value === Gender.FEMALE || value === Gender.MALE || value === Gender.DIVERSE) {
      this._gender = value
    } else {
      console.error(`Please choose a valid gender.`)
    }
  }

  constructor(name: string, birthday: Date, gender: Gender) {
    this._name = name
    this._birthday = birthday
    this._gender = gender
  }
}
