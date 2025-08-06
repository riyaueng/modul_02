import type { RoomType } from "../enums/RoomType"

class Rooms {
  _roomCount: number
  _roomType: RoomType[]

  constructor(roomCount: number, roomType: RoomType[]) {
    this._roomCount = roomCount
    this._roomType = roomType
  }

  // ? join() wandelt das Array in string um und wir können in der runden Klammer mit Komma arbeiten, es die Index voneinander trennt

  anzeigen(): void {
    console.log(`Das Haus hat ${this._roomCount} die Räume sind ${this._roomType.join(", ")}`)
  }
}

export default Rooms
