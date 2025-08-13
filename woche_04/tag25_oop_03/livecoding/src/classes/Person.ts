export class Person {
  // *  ------ private / protected / public ------

  // ! Protected -> Ich erlaube die Kindklasse, die Werte meiner Eigenschaften nachträglich zu ändern und nicht von außen

  protected _firstName: string = ""
  protected _lastName: string = ""
  protected _handyNummer?: string = ""

  constructor(firstname: string, lastname: string, handynummer?: string) {
    this._firstName = firstname
    this._lastName = lastname
    this._handyNummer = handynummer
  }

  protected checkPassport(): void {
    console.log(`${this._firstName} is allowed to fly`)
  }
}
