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
}
