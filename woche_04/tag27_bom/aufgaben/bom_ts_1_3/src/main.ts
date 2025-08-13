import "./style.css"

const infoContainer = document.querySelector(".info_container") as HTMLDivElement
const btnElement = document.querySelector("#btn") as HTMLButtonElement

let operatingSystem: string = window.navigator.platform
let browserVersion: string = window.navigator.userAgent

let screenHeight: number = window.screen.height
let screenWidth: number = window.screen.width

let browserHeight: number = window.innerHeight
let browserWidth: number = window.innerWidth

let colorDepth: number = window.screen.colorDepth
let pixelDepth: number = window.screen.pixelDepth

let getBrowserName = (): string => {
  const userAgent: string = navigator.userAgent
  let browserName: string = ""

  if (userAgent.search("Chrome")) {
    browserName = "Chrome"
  } else if (userAgent.search("Firefox")) {
    browserName = "Firefox"
  } else if (userAgent.search("Safari")) {
    browserName = "Safari"
  } else if (userAgent.search("Edge")) {
    browserName = "Edge"
  } else if (userAgent.search("Opera")) {
    browserName = "Opera"
  } else {
    browserName = "Unbekannt"
  }
  return browserName
}

console.log(getBrowserName())

function displayData(): void {
  const outputName = document.createElement("p") as HTMLParagraphElement
  outputName.innerHTML = `<span>Browsername:</span> ${getBrowserName()}`
  infoContainer.appendChild(outputName)

  const outputOperator = document.createElement("p") as HTMLParagraphElement
  outputOperator.innerHTML = `<span>Betriebssystem-Architektur:</span> ${operatingSystem}`
  infoContainer.appendChild(outputOperator)

  const outputVersion = document.createElement("p") as HTMLParagraphElement
  outputVersion.innerHTML = `<span>Betriebssystem-Architektur:</span> ${browserVersion}`
  infoContainer.appendChild(outputVersion)

  const outputScreenResolution = document.createElement("p") as HTMLParagraphElement
  outputScreenResolution.innerHTML = `<span>Window-Auflösung:</span> ${screenWidth} x ${screenHeight}`
  infoContainer.appendChild(outputScreenResolution)

  const outputInnerResolution = document.createElement("p") as HTMLParagraphElement
  outputInnerResolution.innerHTML = `<span>Innere Größe:</span> ${browserWidth} x ${browserHeight}`
  infoContainer.appendChild(outputInnerResolution)

  const outputColorDepth = document.createElement("p") as HTMLParagraphElement
  outputColorDepth.innerHTML = `<span>Farbtiefe:</span> ${colorDepth}`
  infoContainer.appendChild(outputColorDepth)

  const outputPixelDepth = document.createElement("p") as HTMLParagraphElement
  outputPixelDepth.innerHTML = `<span>Pixeltiefe:</span> ${pixelDepth}`
  infoContainer.appendChild(outputPixelDepth)
}

btnElement.addEventListener("click", () => {
  displayData()
})
