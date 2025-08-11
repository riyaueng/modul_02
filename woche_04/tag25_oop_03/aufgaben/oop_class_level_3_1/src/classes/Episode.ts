import Actors from "./Actor"

class Episode {
  _title: string
  _description: string
  _length: number
  _actors: Actors[]

  constructor(title: string, length: number, description: string, actors: Actors[]) {
    this._title = title
    this._length = length
    this._description = description
    this._actors = actors
  }
}

export default Episode
