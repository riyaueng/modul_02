import "./style.css"
console.log("Go")

const timerContainer = document.querySelector(".zeit") as HTMLDivElement
const timerBtn = document.querySelector("#btn") as HTMLButtonElement
let timer = 100

function countdownTimer() {
  const countingTimer = setInterval(() => {
    switch (true) {
      case timer > 0:
        timer--
        timerContainer.textContent = `${timer.toString()} %`
        console.log("Timer läuft:", timer)
        break
      case timer < 1:
        clearInterval(countingTimer)
        console.log("Timer gestoppt:", timer)
        break
    }
  }, 100)
}

timerBtn.addEventListener("click", () => {
  countdownTimer()
})
