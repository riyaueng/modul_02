import "./style.css"
import { eightiesHits } from "./eighties_hits"

// * Loops

// Wir möchten 5+ Hello World in der Console ausgeben
// console.log("Hello World")
// console.log("Hello World")
// console.log("Hello World")
// console.log("Hello World")
// console.log("Hello World")
;[1, 44, 3, 4, 5].forEach((value, index) => {
  console.log("Hello World " + index)
})

// * while
// Der Codeblock in while wird ausgeführt, solange die Bedingung wahr ist.
// Quasi wie ein sich wiederholendes "if"
// Das kann auch unendlich lang gehen

// let i = 0
// while (i < 5) {
//   console.log("Hello World")
//   i++
// }

while (Math.random() < 0.9) {
  console.log("Hello World")
}

// Alle Elemente eines Arrays ausgeben:

// let j = 0
// const arraylength = eightiesHits.length
// while (j < arraylength) {
//   const currentHit = eightiesHits[j]
//   console.log(currentHit)
//   j++
// }

// * for

let i = 0
for (let i = 0; i < eightiesHits.length; i++) {
  const currentHit = eightiesHits[i]
  console.log(currentHit)
}

// Alle Zahlen von 30 bis 0 durchzählen und alle ausgeben die durch 3 teilbar sind

for (let i = 30; i >= 0; i--) {
  if (i % 3 === 0) {
    console.log(i)
  }
}

// Wir wollen die Summer aller Zalen von 0 bis einschließlich 100 bilden

let sum = 0
for (let i = 0; i <= 100; i++) {
  sum += i
}
console.log("Summer aller von 0 bis 100", sum)

// Wir wollen einen von 0 in 7er Schritten hochzählen, und aus den Schritten einen Aray bilden, der 100 Elemente haben soll

const arrayWithSevenMultiples: number[] = []
for (let i = 0; arrayWithSevenMultiples.length < 100; i += 7) {
  arrayWithSevenMultiples.push(i)
}
console.log(arrayWithSevenMultiples)

// * i++ vs ++i
//  bei i++ ist der Rückgabewert der Wert vor der Imkrementierung, bei ++i der Nachher-Wert

// * for...of Loop
// Fühlt sich an wie ein Zwischending aus For- und Array-Methode
// Geht nicht nur bei Arrays sondern bei allen Iterables (also auch z. B. String, Set, Map etc.)

for (const hit of eightiesHits) {
  console.log(hit.toUpperCase())
}

for (const character of "Hello Kurs") {
  console.log(character, "🎊")
}

// Wir wollen rausfinden, ob es im EightiesHits Array einen Titel gibt der "Enjoy" enthält

eightiesHits.forEach((hit) => {
  console.log(hit)
  if (hit.includes("Enjoy")) {
    console.log("Hurra, gefunden!")
  }
  // return in forEach verhält sich ähnlich wie continue in for Loops
})

// ? break -> Mit dem Break-Statement können wir die Ausführung eines Loops in dem wir sind beenden/abbrechen
//  ? continue -> Mit Mit continue brechen wir den aktuellen Durchlauf des Loops ab und gehen zum nächsten

for (const hit of eightiesHits) {
  console.log(hit)
  if (hit.charAt(0) !== "E") {
    console.log("Doesnt start with E")
    continue
  }
  console.log("Checking for 'Enjoay' …")
  if (hit.includes("Enjoy")) {
    console.log("Hurra, gefunden!")
    break
  }
}

// * Do… while
// Bei do-while steht die Bedingung a Fuß der Struktur
// do-while Schleifen werden in jedem Fall mindestens einmal ausgeführt, da die Bedingung hier erst am Ende gecheckt wird

let index = 10
do {
  console.log("Hey")
  index++
} while (index < 10)

// while (index < 10) {
//   console.log("Hey")
//   index++
// }
