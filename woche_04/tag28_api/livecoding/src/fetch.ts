// * Unser Ziel ist, dass wir uns alle Post von dieser URL `https://jsonplaceholder.typicode.com/posts` abholen wollen

// # -------- fetch Methode ----------

const API_URL = "https://jsonplaceholder.typicode.com/posts"

type TPost = {
  user: number
  title: string
  id: number
  body: string
}

fetch(API_URL)
  .then((resp: Response) => {
    console.log(resp)
    if (!resp.ok) {
      console.error("Response doesn't work.")
    }

    // ? Immer nach resp bzw. response ist der nächste Schritt: Die Response in ein echtes Javascript Obj umzuwandeln, indem man resp über json() Methode in return zurückgibt.
    return resp.json()
  })
  .then((posts: TPost[]) => {
    console.log(posts)
    posts.forEach((post: TPost) => {
      // console.log(post)
      const postObjToArray = Object.entries(post)
      // console.log(postObjToArray

      postObjToArray.forEach(([key, value]: [string, string | number]) => {
        if (key === "title" || key === "id") {
          let titleElement = document.createElement("p") as HTMLParagraphElement
          titleElement.textContent = `${key}: ${value.toString()}`
          document.body.appendChild(titleElement)
        }
      })
    })
  })
  .catch((error: Error) => {
    console.log(error)
  })
  .finally(() => {
    console.log("Done witch fetching the posts.")
  })
