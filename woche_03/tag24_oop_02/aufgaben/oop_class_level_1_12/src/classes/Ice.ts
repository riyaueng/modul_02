export class IceCreamFlavor {
  _name: string
  _price: number
  _isPopular: boolean
  _description?: string

  constructor(name: string, price: number, isPopular: boolean, description?: string | undefined) {
    this._name = name
    this._price = price
    this._isPopular = isPopular
    this._description = description
  }
  showPopularIce() {
    console.log(`Ist die Eissorte ${this._name} beliebt? ${this._isPopular}`)
  }

  getTotalPrice(numberOfScoops: number): number {
    return numberOfScoops * this._price
  }

  printInfo(): void {
    if (this._isPopular) {
      console.log(`Flavor ${this._name} is popular and costs ${this._price} Euro.`)
    } else {
      console.log(`Flavor ${this._name} isn't popular and costs ${this._price} Euro.`)
    }
  }

  getLengthOfDiscription(): void {
    if (this._description?.length === undefined) {
      console.log(`Length of the discription is: 0.`)
    } else {
      console.log(`Length of the discription is: ${this._description?.length}.`)
    }
  }
}
