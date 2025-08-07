import "./style.css"

console.log("Test")

enum ClothingColor {
  Gelb = "#E4D00A",
  Orange = "#F28C28",
  Pink = "#FFB6C1",
  Blau = "#1434A4",
  Lila = "#CF9FFF",
  Grau = "#D3D3D3",
}

const allColors: ClothingColor[] = [
  ClothingColor.Gelb,
  ClothingColor.Orange,
  ClothingColor.Pink,
  ClothingColor.Blau,
  ClothingColor.Lila,
  ClothingColor.Grau,
]
console.log(allColors)

const btnColors1 = document.querySelectorAll<HTMLButtonElement>(".btns_color1")

btnColors1.forEach((btn, i) => {
  btn.style.backgroundColor = allColors[i]
})

// * --------- Object.keys und Object.value ---------

// Object.keys(ClothingColor)
// console.log(Object.keys(ClothingColor))

// Object.values(ClothingColor)
// console.log(Object.values(ClothingColor))

// const btnColors2 = document.querySelectorAll<HTMLButtonElement>(".btns_colors2")

// btnColors2.forEach((btn, i) => {
//   btn.style.backgroundColor = Object.keys(ClothingColor)[i]
// })

// Object.values(ClothingColor).forEach((color) => {
//   color.style.backgroundColor = btnColors2
// })
