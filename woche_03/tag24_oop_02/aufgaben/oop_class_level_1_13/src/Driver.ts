import { Car } from "./Car"
import type { CarType } from "./enums/CarType"

export class Driver {
  _firstName: string
  _lastName: string
  _age: number
  _car: Car
  private _licenseFromYear: number

  get license(): number {
    return this._licenseFromYear
  }

  constructor(firstname: string, lastname: string, age: number, car: Car, licenseFromYear: number) {
    this._firstName = firstname
    this._lastName = lastname
    this._age = age
    this._car = car
    this._licenseFromYear = licenseFromYear
  }

  introduceDriver(): void {
    console.log(
      `Ich heiße ${this._firstName} ${this._lastName} bin ${this._age} Jahre alt und fahre ein ${this._car._brand}.`
    )
  }

  getCarType(): CarType {
    return this._car._carType
  }
}
