import type { Owner } from "./Owner"

export class Dog {
  _owner: Owner
  _breed: string | undefined = ""
  _favoriteFood?: string = ""
  private _birthday: string
  private _numberOfMeals: number = 0
  private _name: string | undefined = ""
  private _age: number = 0

  get age(): number {
    return this._age
  }

  set age(value: number) {
    if (value < 0 || value > 40) {
      console.log("Invalid value for dog age. MUst be between 0 and 40.")
    } else {
      this._age = value
    }
  }

  get dogInGerman(): string {
    return "Hund"
  }

  get name(): string | undefined {
    return this._name
  }

  set name(value: string) {
    this._name = value
  }

  constructor(name: string, age: number, owner: Owner, birthday: string) {
    this._name = name
    this._birthday = birthday

    // ! Variante 1 um Bedingungen für das Alter festzulegen
    // if (value < 0 || value > 40) {
    //   throw new Error("Invalid value for dog age. MUst be between 0 and 40.")
    // }

    // ! Variante 2 um Bedingungen für das Alter festzulegen
    // Das erste age wurde mit set und get definiert als Eigenschaft und das zweite ist das nach auße gegeben wird!
    this.age = age
    // ! Wir rufen den setter auf und nicht direkt _age

    this._age = age
    this._owner = owner
    console.log("Dog was created")
  }

  // ? METHODEN
  // Ist eine Art von function

  sleep(): void {
    console.log(`${this._name} is sleeping`)
  }

  bark(sound: string): void {
    console.log(`${this._name} says ${sound}`)
  }

  eat(): void {
    this._numberOfMeals++
    console.log(`Current number of meals: ${this._numberOfMeals} `)
    if (this._numberOfMeals > 4) {
      this.sleep()
    }
  }

  isHungry(): string {
    if (this._numberOfMeals < 4) {
      return `${this._name} is hungry` // ! mit return gegeben wir einen string aus
    } else {
      return `${this._name} is not hungry at Moment`
    }
  }
}
