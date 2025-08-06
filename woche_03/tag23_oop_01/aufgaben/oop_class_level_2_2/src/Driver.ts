import { Car } from "./Car"

export class Driver {
  _firstName: string
  _lastName: string
  _age: number
  _car: Car

  constructor(firstname: string, lastname: string, age: number, car: Car) {
    this._firstName = firstname
    this._lastName = lastname
    this._age = age
    this._car = car
  }

  introduceDriver(): void {
    console.log(
      `Ich heiße ${this._firstName} ${this._lastName} bin ${this._age} Jahre alt und fahre ein ${this._car._brand}.`
    )
  }
}
