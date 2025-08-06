// * Wie ist die Schreibweise?
// Zuerst kommt das Keyword class, dann der Name des Objects und danach geschweifte Klammern

class Bauplan {
  // * interne Eigenschaften benennen wir mit einem Unterstrich davor, um sie von nach auße sichtbaren Eigenschaften zu unterscheiden
  // ! Wir stellen uns gerade vor, wie ein Haus aussehen sollte
  _owner: Owner
  _rooms: Rooms
  _color: string = "weiss"
  _basement: boolean

  // ? Das wäre wie ein paar Investoren, die meine Vorstellungen bestätigen und lasssen ,ich mein Haus aufbauen
  constructor(owner: Owner, room: Rooms, basement: boolean) {
    this._owner = owner
    this._rooms = room
    this._basement = basement
  }

  renovieren(newColor: string): void {
    this._color = newColor
    console.log(`Das Haus wurde in ${this._color} gestrichen`)
  }
}

import Owner from "./Owner"
import type Rooms from "./Rooms"
export default Bauplan
