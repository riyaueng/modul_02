import type { CarType } from "./enums/CarType"

export class Car {
  _brand: string
  private _constructionYear: number
  _currentSpeed: number
  _carType: CarType

  public get constructionYear(): number {
    return this._constructionYear
  }

  constructor(brand: string, constructionYear: number, currenSpeed: number, carType: CarType) {
    this._brand = brand
    this._constructionYear = constructionYear
    this._currentSpeed = currenSpeed
    this._carType = carType
  }

  getSpeedInfo(): void {
    if (this._currentSpeed <= 40) {
      console.log("Drive slowly")
    } else if (this._currentSpeed > 40 && this._currentSpeed <= 70) {
      console.log("Driving normally")
    } else if (this._currentSpeed > 70 && this._currentSpeed <= 120) {
      console.log("Driving fast")
    } else if (this._currentSpeed > 120 && this._currentSpeed <= 190) {
      console.log("Driving really fast")
    } else if (this._currentSpeed > 190) {
      console.log("WTF")
    }
  }
}
