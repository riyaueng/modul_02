import "./style.css"

console.log("Yeah")

function greetUser(): void {
  try {
    let inputUserName: string | null = window.prompt("Gibt deinen Benutzernamen ein")

    if (!inputUserName) {
      throw new Error("Willkommen!")
    }
    console.log(`Willkommen ${inputUserName}!`)
  } catch (error) {
    console.log(error, "Es wurde kein Benutzername eingegeben.")
  }
}

greetUser()
