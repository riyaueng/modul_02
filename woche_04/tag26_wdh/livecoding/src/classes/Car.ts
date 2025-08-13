import { OrderStatus } from "../enums/OrderStatus"
import { ICar } from "../interfaces/ICar"

class Car implements ICar {
  _brand: string
  _model: string

  static status: OrderStatus = OrderStatus.Created

  static availableType = ["BWM", "Benz", "Tesla", "VW", "FORD", "Ferrari"]

  static isAvailable(typeParameter: string): void {
    if (Car.availableType.includes(typeParameter)) {
      console.log(`Diese Marke ${typeParameter} ist vorhanden`)
    } else {
      console.log(`Diese Marke ${typeParameter} ist nicht vorhanden.`)
    }
  }

  // * Was static?
  // * Sie gehört der Klasse selbst und nicht einer Instanz
  // * Man greift mit Klassennamen.Eigenschaften oder Klassennamen.Methode
  // ! Dafür bracuht man kein "new" oder erzeugtes Obj
  static numberOfCars: number = 0

  constructor(brand: string, model: string) {
    this._brand = brand
    this._model = model
    Car.numberOfCars++
  }

  static howManyCars(): void {
    console.log(`Es gibt ${Car.numberOfCars} Autos in der Garage.`)
  }

  startEngine(): void {
    throw new Error("Method not implemented.")
  }

  static updateOrder(): void {
    if (Car.status === OrderStatus.Created) {
      Car.status = OrderStatus.Ready
    }
    if (Car.status === 1) {
      console.log("Das Auto ist bereit zu verkaufen.")
    }
  }
}

export default Car
