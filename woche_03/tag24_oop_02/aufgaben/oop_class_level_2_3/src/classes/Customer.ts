export class Customer {
  private _name: string = ""
  private _email: string = ""
  private _address: string = ""
  private _postalCode: string = ""
  private _city: string = ""

  public get costumerName(): string {
    return this._name
  }

  public get costumerEmail(): string {
    return this._email
  }
  public get costumerAddress(): string {
    return this._address
  }

  public get costumerPostalCode(): string {
    return this._postalCode
  }

  public get costumerCity(): string {
    return this._city
  }

  public set checkName(nameValue: string) {
    if (nameValue.length <= 30) {
      this._name = nameValue
    } else {
      console.error("Costumer name is too long.")
    }
  }

  public set checkEmail(emailValue: string) {
    if (emailValue.includes("@") && emailValue.includes(".")) {
      this._email = emailValue
    }
    console.error("Please insert @ in your email.")
  }

  public set checkPostelCode(postelCodeValue: string) {
    if (postelCodeValue.length === 5 && Number(postelCodeValue) >= 0 && Number(postelCodeValue) <= 99999) {
      this._name = postelCodeValue
    } else {
      console.error("This is not a valid postel code.")
    }
  }

  constructor(name: string, email: string, address: string, postalCode: string, city: string) {
    this._name = name
    this._email = email
    this._address = address
    this._postalCode = postalCode
    this._city = city
  }
}
