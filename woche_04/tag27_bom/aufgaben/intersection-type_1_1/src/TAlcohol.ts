type TAlcohol = {
  name: string
  percentage: number
  type: string
}

type TMixer = {
  name: string
  type: string
  carbonated: boolean
}

export type TCocktail = TAlcohol & TMixer
