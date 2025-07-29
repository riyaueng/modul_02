import "./style.css"

function showHero(heroName: string, heroPower: string, heroEnemy: string): void {
  let nameOutput = `Mein Lieblingsheld ist: ${heroName}.`
  let powerOutput = `Er hat die Fähigkeit: ${heroPower}.`
  let enemyOutput = `Sein größter Gegner:in ist: ${heroEnemy}.`

  console.log(nameOutput, powerOutput, enemyOutput)
}

showHero("Nightcrawler", "Teleportation", "Er selbst")
