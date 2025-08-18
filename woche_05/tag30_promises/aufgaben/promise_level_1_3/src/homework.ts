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

homeworkPromise1
  .then((resp: string) => {
    console.log(resp)
    const homeworkText = document.createElement("p") as HTMLParagraphElement
    homeworkText.textContent = resp
    loader.replaceWith(homeworkText)
    outputHomework.appendChild(homeworkText)
  })
  .catch((err: string) => {
    console.log(err)
  })

homeworkPromise2
  .then((resp: string) => {
    console.log(resp)
    const homeworkText = document.createElement("p") as HTMLParagraphElement
    homeworkText.innerText = resp
    outputHomework.appendChild(homeworkText)
  })
  .catch((err: string) => {
    console.log(err)
  })

homeworkPromise3
  .then((resp: string) => {
    console.log(resp)
    const homeworkText = document.createElement("p") as HTMLParagraphElement
    homeworkText.innerText = resp
    outputHomework.appendChild(homeworkText)
  })
  .catch((err: string) => {
    console.log(err)
  })
