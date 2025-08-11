import type Actors from "./Actor"
import Episode from "./Episode"

class Series extends Episode {
  _title: string
  _description: string
  _startYear: number
  _endYear: number

  constructor(
    episodeTitle: string,
    episodeLength: number,
    episodeDescription: string,
    actors: Actors[],
    title: string,
    description: string,
    startYear: number,
    endYear: number
  ) {
    super(episodeTitle, episodeLength, episodeDescription, actors)
    this._title = title
    this._description = description
    this._startYear = startYear
    this._endYear = endYear
  }

  printSeriesInfo(): string {
    return `Titel: ${this._title}
    Description: ${this._description}
    Start Year: ${this._startYear}
    End Year: ${this._endYear}
    Number of Episodes: ${this._length}
    \n
    Actors: ${this._actors.forEach((actor) => console.log(actor))}
    - Birthday: 
    – Gender: `
  }
}

export default Series
