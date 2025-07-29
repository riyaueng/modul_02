import "./style.css"

function introduceMyself(surename: string, name: string, birthPlace: string, age: number, address: string) {
  console.log(
    `Mein Name ist ${surename} ${name}. Ich bin in ${birthPlace} geboren. Ich lerne SuperCode. Ich bin ${age} Jahre alt. Ich wohne in ${address}`
  )

  console.log(
    `Mein Name ist ${surename} ${name}.\n Ich bin in ${birthPlace} geboren.\n Ich lerne SuperCode.\n Ich bin ${age} Jahre alt.\n Ich wohne in ${address}`
  )
}

const introduction = introduceMyself("Kethariya", "Krause", "der Milchstraße", 32, "Bad Bevensen")
