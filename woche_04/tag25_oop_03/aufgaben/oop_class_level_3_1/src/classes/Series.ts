import type Actors from "./Actor"
import Episode from "./Episode"

class Series extends Episode {
  _title: string
  _description: string
  _startYear: number
  _endYear: number
  //  _episodes: Episode[];

  constructor(
    episodeTitle: string,
    episodeLength: number,
    episodeDescription: string,
    actors: Actors[],
    title: string,
    description: string,
    startYear: number,
    endYear: number
    // episodes: Episode[]
  ) {
    super(episodeTitle, episodeLength, episodeDescription, actors)
    this._title = title
    this._description = description
    this._startYear = startYear
    this._endYear = endYear
  }

  printSeriesInfo(): string {
    let actorValue = ""
    this._actors.forEach((actor) => {
      actorValue += `
      - ${actor._firstName} ${actor._lastName} 
      - Birthday: ${actor._birthday} 
      - Gender: ${actor._gender}`
    })

    return `Titel: ${this._title}
    Description: ${this._description}
    Start Year: ${this._startYear}
    End Year: ${this._endYear}
    Number of Episodes: ${this._length}
    \n
    Actors: ${actorValue}`
  }
}

export default Series
