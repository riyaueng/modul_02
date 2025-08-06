import "./style.css"
import Bauplan from "./classes/Bauplan"
import Owner from "./classes/Owner"
import Rooms from "./classes/Rooms"
import { RoomType } from "./enums/RoomType"

console.log("Guten Morgen")

// * OOP -> Objectorientierte Programmierung
// ? OOP ist ein Programierstil, bei dem die Software in Objekte unterteilt sind
// ? Diese Objekte sind Instanzen von Klassen, die als Blaupausen oder Vorlagen für die Objekte dienen. Jedes Objekt kann Daten wie Eigenschaften speichern und bestimmte Aktionen ausführen (Methoden)

// type Bauplan = {
//   _besitzer: string
//   tiefGarage: boolean
// }

// const haus_1: Bauplan = {
//   _besitzer: "Joe",
//   tiefGarage: true,
// }

// # ----- Klasse -------

// const today = new Date()

// ! -------- Aufbau ---------

const room_haus_1 = new Rooms(3, [RoomType.BEDROOM, RoomType.BATHROOM, RoomType.KITCHEN])

const besitzer_1 = new Owner("Mustermann", "46767/345345")

const haus_1 = new Bauplan(besitzer_1, room_haus_1, true)
console.log(haus_1)

haus_1.renovieren("red")

// besitzer_1._vorname = "Kim"

console.log(haus_1)
console.log(besitzer_1.nachname)

besitzer_1.nachname = "Batman"
console.log(besitzer_1.nachname)

room_haus_1.anzeigen()
besitzer_1.printInfo()

// besitzer_1._nachname = "Mustermann"
