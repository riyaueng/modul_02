export class Animal {
  _species: string = ""
  private _age: number = 0
  _color: string = ""

  get animalSpecies(): string {
    return this._species
  }

  get animalAge(): number {
    return this._age
  }

  get animaColor(): string {
    return this._color
  }

  set animalSpecies(value: string) {
    if (value === "Cat") {
      this._species = value
      console.log("Happy cat owner!")
    } else {
      this._species = value
      console.log("Nice pet.")
    }
  }

  set validAnimalAge(value: number) {
    if (value < 0 || value > 30) {
      console.error(`Please write a valid age number.`)
    } else {
      this._age = value
      console.log(value)
    }
  }

  set animalColor(value: string) {
    this._color = value
  }

  constructor(species: string, age: number, color: string) {
    this._species = species
    this._age = age
    this._color = color
  }
}
