// * Primitive Werte:
const item1: string = "Tomatensuppe"
const item2: string = "Zwiebelsuppe"

// * Arrays sind Listen aus anderen Werten. Sie werden mit [] gebildet, die einzelnen Werte werden durch Kommas getrennt.
// * Aus Javascript-Sicht dürfen die Werte unterschiedliche Typen haben
const einkaufsListe: string[] = ["Tomatensuppe", "Zwiebelsuppe", "Gemüsebrühe", "Pilzsuppe"]
// * Andere mögliche Notation für den Typ: Array<string> (Array aus strings)

// * Mit .length können wir auf die Zahl der Elemente im Array zurückgreifen
einkaufsListe.length // -> 4

// * Mit .push können wir neue Einträge aus dem Ende des Arrays anfügen. Der alte Array selbst wird dabei verändert!
// * Als Rückgabewert erhalten wir die neue Länge des Arrays.
einkaufsListe.push("Erbsenseintopf", "Kartoffelsuppe")
console.log(einkaufsListe)
console.log(einkaufsListe.length)

// * Mit .pop können wir den letzten Eintrag des Arrays "platzen lassen"
// * Wir bekommen seinen Inhalt als Rückgabewert und er wir aus dem Array entfernt
einkaufsListe.pop()
const lastItem = einkaufsListe.pop()
console.log(einkaufsListe)

// * .shift entspricht .pop, agiert aber auf das erste Element des Arrays und entfernt es (und gibt es zurück)
// * .unshift entspricht .push und fügt ein Element zum Anfang des Arrays hinzu
// * Wie auch .push gibt es die neue Länge des Arrays hinzu

einkaufsListe.unshift("Tofu")
console.log(einkaufsListe)

// * Mit [] und den gewünschten Index könne wir auch ebliebige Elemente des Arrays zugreifen

console.log(einkaufsListe[2]) // -> Element mit Index 2, "Zwiebelsuppe"

// * Wir könne diese Syntax auch nutzen um den Array zu verändern
einkaufsListe[1] = "Knoblauchsuppe" // Das Element mit dem Index 2 ist von un an "Knoblauchsuppe"

// * .slice
const animals = ["ant", "bison", "camel", "duck", "elephant"]

console.log(animals.slice(2))
// Expected output: Array ["camel", "duck", "elephant"]

console.log(animals.slice(2, 4))
// Expected output: Array ["camel", "duck"]

console.log(animals.slice(1, 5))
// Expected output: Array ["bison", "camel", "duck", "elephant"]

console.log(animals.slice(-2))
// Expected output: Array ["duck", "elephant"]

console.log(animals.slice(2, -1))
// Expected output: Array ["camel", "duck"]

console.log(animals.slice())
// Expected output: Array ["ant", "bison", "camel", "duck", "elephant"]

console.log(einkaufsListe)

// * splice
// * Mit .splice können wir an beliebigen Stellen im Array Elemente hinzufügen und/oder überschreiben oder löschen
// splice(start, deleteCount, neuesitem1, neuesitem2, /* …, */ neuesitemN)

const months = ["Jan", "MArch", "4pril", "May", "Jun5"]
months.splice(1, 2, "March", "April") // -> ["Jan", "MArch", "4pril", "May", "June"]

months.splice(4, 1, "June", "July", "August") // -> ["Jan", "MArch", "4pril", "May", "June", "July", "August"]
console.log(months)

// * .reversed -> Überraschung, der Array wird umgedreht
// ! Obacht, auch hier wird Array mutiert
const numbers: number[] = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]
numbers.reverse()
console.log(numbers)

// * Um .reversed auf einen string anwenden zu können, müssen wir diesen erst zu einem Array umwandeln bzw. aufspalten, umdrehen und dann wieder zusammenführen
const string = "nafetS"
const characters = string.split("")
// Argumente hier ist das Zeichen entlang getrennt werden soll. "" -> Jeder Buchstabe wird getrennt
characters.reverse()
const reversedString = characters.join(",") // Argument hier analog zum Trennzeichen
console.log(characters)

// * .sort
// sort sortiert Arrays und mutiert diese dabei
// Wir können sort eine custom Sortierfunktion übergeben, ansonsten wird alphabetisch sortiert, auch bei Zahlen

const monthsAgaib = ["March", "Jan", "Feb", "Dec"]
months.sort() // -> ["Dec", "Feb", "Jan", "March" ]

// ! Aber

const numbersAgain = [11, 2, 1, 0, 9]
numbersAgain.sort() // -> [0, 1, 11, 2, 9]
// ! Badle lernen wir, wie wir das Sortierverhalten konfigurieren können

//  * Arrays kombinieren
const obst = ["Blaubeeren", "Birnen", "Melone", "Mango", "Himberren"]
const gemuese = ["Brokkoli", "Lauch", "Möhren", "Spinat"]

// * .concat kombiniert Arrays (beliebig viele nach Bedarf)
const combinedArray = obst.concat(gemuese)
console.log({ combinedArray })

// * ... können wir Arrays "auspacken" (quasi als würden wir die Klammern entfernen) und sie z. B. gemeinsam in einem neuen Array ablegen
const combinedArray2 = [...obst, ...gemuese]
console.log({ combinedArray2 })

// Das hier ist keine echte Kopie, beide Variablen verweisen auf den gleichen Speicher
// d. h. wenn ich naiveObstKopie verändere, ändert sich auch der Wert hinter obst
const naiveObstKopie = obst

//  das hier ist eine echte Kopie, kann getrennt vom Original mutiert werden
const obstKopie1 = [...obst]
// andere Möglichkeit:
const obstKopie3 = obst.concat()

// * Higher Ordeer Functions

// * .forEach
// Wir können forEach auf jedem Array aufrufen und ihm eine Funktion als Argument übergeben
// Diese Funktion wird dann für jedes Element im Array aufgerufen

combinedArray.forEach(function (element, index) {
  console.log(element, index)
})
