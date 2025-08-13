import { Person } from "./Person"

// * Wenn ich einer Elternklasse Eigenschaften und Methoden erben will, sieht es immer so aus ->
// * class Klassenname extends [Name der Elternklasse]
// * Eine Klasse erbt von einer anderen Klasse

// ? Ich brauche zwei Dinge um zu erben -> extends und super in constructor

class Employee extends Person {
  public _isMarried: boolean = false
  private _email: string = ""

  get email(): string {
    return this._email
  }

  set email(value: string) {
    this._email = value
  }

  constructor(firstname: string, lastname: string, handynummer?: string) {
    // Diese Logik passiert schon in der Elternklasse ->
    // this._firstName = firstname
    // this._lastName = lastname
    super(firstname, lastname, handynummer)
  }

  public getFullName(): string {
    return `${this._firstName} ${this._lastName}`
  }

  public checkingFly(): void {
    if (this._isMarried) {
      this.checkPassport()
    }
  }
}

export default Employee
