import "./style.css"

type Apple = {
  color: string
  size: string
  isSweet: boolean
}

const redApple: Apple = {
  color: "red",
  size: "big",
  isSweet: true,
}

const greenApple: Apple = {
  color: "green",
  size: "small",
  isSweet: false,
}

const yellowApple: Apple = {
  color: "yellow",
  size: "big",
  isSweet: true,
}

const apples: Apple[] = [redApple, greenApple, yellowApple]

apples.forEach((apple: Apple) => {
  console.log(apple.color)
})

console.log(`Anzahl der Äpfel: ${apples.length}`)

const pinkApple: Apple = {
  color: "pink",
  size: "medium",
  isSweet: true,
}

apples.push(pinkApple)
console.log(apples)
