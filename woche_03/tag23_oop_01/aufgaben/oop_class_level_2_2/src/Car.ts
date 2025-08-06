export class Car {
  _brand: string
  _constructionYear: number
  _currentSpeed: number

  constructor(brand: string, constructionYear: number, currenSpeed: number) {
    this._brand = brand
    this._constructionYear = constructionYear
    this._currentSpeed = currenSpeed
  }
}
