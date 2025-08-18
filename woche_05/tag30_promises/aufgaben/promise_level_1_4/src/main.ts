console.log("Hello!")

let homeworkPromise1 = new Promise<string>((resolve) => {
  setTimeout(() => {
    resolve("Exercise 1 done.")
  }, 20000)
})

let homeworkPromise2 = new Promise<string>((resolve) => {
  setTimeout(() => {
    resolve("Exercise 2 done.")
  }, 30000)
})

let homeworkPromise3 = new Promise<string>((resolve) => {
  setTimeout(() => {
    resolve("Exercise 3 done.")
  }, 40000)
})

const outputHomework = document.querySelector(".output_homework") as HTMLDivElement
const loader = document.querySelector(".loader") as HTMLParagraphElement

Promise.all([homeworkPromise1, homeworkPromise2, homeworkPromise3])
  .then((resp: [string, string, string]) => {
    console.log(resp)
    resp.forEach((homework: string) => {
      const homeworkText = document.createElement("p") as HTMLParagraphElement
      loader.style.display = "none"
      homeworkText.textContent = homework
      outputHomework.appendChild(homeworkText)
    })
    const homeworkResult = document.createElement("p") as HTMLParagraphElement
    homeworkResult.textContent = "Homework done"
    outputHomework.appendChild(homeworkResult)
  })
  .catch((err: string) => {
    console.log(err)
  })
