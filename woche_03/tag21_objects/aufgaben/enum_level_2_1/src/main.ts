enum HTMLError {
  Fehler = 200,
  OK = 300,
  Redirect = 300,
  BadRequest = 400,
  InternalServerError = 500,
}

console.log(HTMLError)

function showHtmlError(): void {
  let randomNumber = Math.floor(Math.random() * 6)
  if (randomNumber <= 2) {
    console.log(HTMLError.OK)
  } else if (randomNumber === 3) {
    console.log(HTMLError.Redirect)
  } else if (randomNumber === 4) {
    console.log(HTMLError.BadRequest)
  } else {
    console.log(HTMLError.InternalServerError)
  }
}

showHtmlError()
