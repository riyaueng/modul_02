// * Das ist ein string Array

const cocktails: string[] = ["Pina Colada", "Mojito", "Long Island Ice Tea", "Mojito", "Cuba Libre", "Pina Colada"]

console.log(cocktails.length)

// ! ----- Set Methode -----
//  set verhält sich wie Array, lässt aber nur eindeutige Werte zu
//  Dazu kommen einige Methoden und zwar add, size usw. …

const cocktailWithSet = new Set<string>()

// * add
cocktailWithSet.add("Pina Colada")
cocktailWithSet.add("Mojito")
cocktailWithSet.add("Long Island Ice Tea")

// ! Kein Index-Zugriff möglich
// console.log((cocktailWithSet[0]));

// * size
console.log(cocktailWithSet.size)

// * has

if (cocktailWithSet.has("Mojito")) {
  console.log("Es gibt Mojito auf der Karte")
}

const kostenMitSetMethode = new Set<number>()
kostenMitSetMethode.add(100)
kostenMitSetMethode.add(22)
kostenMitSetMethode.add(4)
kostenMitSetMethode.add(320)

console.log(kostenMitSetMethode)

// Es gibt eine kleien Gemeinsamkeit zwischen Array und Set Methode -> forEach()

kostenMitSetMethode.forEach((number: number) => {
  console.log(number)
})

const setA = new Set([1, 2, 3, 7])
const setB = new Set([3, 6, 9])

const union = new Set([...setA, ...setB])

// ! ------ Set ------
// ist eine super Möglichkeit, um doppelte Werte in einem Array zu entfernen

console.log(union)

const clearCocktailVariable = new Set(cocktails)
console.log(cocktails)

// ! V1
const meinArrayVomCocktailSet = [...clearCocktailVariable]
// console.log(meinArrayVomCocktailSet)

// ! V2
const meinArrayVomCocktailSet2 = Array.from(clearCocktailVariable)
console.log(meinArrayVomCocktailSet)

// * Map Methode -> ist ein spezielles object, das sman wie ein Nachschlagewerk oder Lexikon sehen kann
// Wenn ich mit Map arbeite dann soll ich deren Methode dementsprechend benutzen
// # -> set, get

// * Beispiel mit set
const germanEnglishDictionary = new Map<string, string>()
// *                        key      value
germanEnglishDictionary.set("Tier", "animal")
germanEnglishDictionary.set("Froh", "happy")
germanEnglishDictionary.set("Montag", "monday")

console.log(germanEnglishDictionary)

germanEnglishDictionary.forEach((value, key) => {
  console.log(`${value} heiß übersetzt ${key}`)
})

// * Beispiel mit get
// mit get kann ich mir einen Wert aus der Variable herausholen
console.log(germanEnglishDictionary.get("Tier"))

// ! Beispiel 2

const italianMenu = new Map<number, string>()

italianMenu.set(20.0, "Pizza Margehrita")
italianMenu.set(14.0, "Pizza Funghi")
italianMenu.set(7.0, "Bruscetta")

console.log(italianMenu)
console.log(italianMenu.get(14.0))

// ! Beispiel 3

const iceMenu = new Map<number, string>()
iceMenu.set(10, "Himbeere")
iceMenu.set(11, "Erdbeere")
iceMenu.set(12, "Mandel")

console.log(iceMenu)

// ! Beispiel 3

const iceMenu2 = new Map<number, string>()
const flavors = ["Himbeere", "Erdbeere", "Mandel"]

flavors.forEach((flavor, index) => {
  iceMenu2.set(index, flavor)
})

console.log(iceMenu2)

// * Tuple -> Eingeschränktes Array mit verschiedenen Datentypen

const customer5: [string, number, number] = ["Annie", 22, 1.73]

customer5[0] = "Lisa"
customer5[1] = 21314

type TsimplePerson = {
  name: string
  age: number
  height: number
}

const person: TsimplePerson = {
  name: "Annie",
  age: 22,
  height: 1.73,
}

console.log(person)
