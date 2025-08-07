export class Person {
  firstName: string
  lastName: string
  private _email: string = ""
  private _birthday: Date

  get email(): string {
    return this._email
  }

  set email(value: string) {
    if (value.includes("@")) {
      this._email = value
    } else {
      console.error("Emails must have includes an @")
    }
  }

  // ! Geburtstag soll nur einmal über den constructor gesetzt und nie wieder verändern werden
  get birth() {
    return this._birthday
  }

  constructor(firstName: string, lastName: string, birthday: Date) {
    this.firstName = firstName
    this.lastName = lastName
    this._birthday = birthday
  }
}
