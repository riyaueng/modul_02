export class Owner {
  _name: string
  _address: string
  _plz: number
  _city?: string
  _birthday: Date

  constructor(name: string, address: string, plz: number, birthday: Date) {
    this._name = name
    this._address = address
    this._plz = plz
    this._birthday = birthday
  }
}
