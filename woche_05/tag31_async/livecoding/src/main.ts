import "./style.css"

interface User {
  id: number
  name: string
  username: string
  email: string
}

interface Post {
  userId: number
  id: number
  title: string
  body: string
}

// function myFetchFunc(): Promise<string> {
//   return new Promise((resolve, reject)=>{

//   })
// }

async function fetchJson<T>(url: string): Promise<T> {
  const resp = await fetch(url)
  console.log(resp)
  if (!resp.ok) {
    throw new Error(`HTTP-Error: ${resp.statusText}`)
  }
  return resp.json() as Promise<T>
}

const BASE_URL = `https://jsonplaceholder.typicode.com/`
const USER_URL = `${BASE_URL}/users`
const POST_URL = `${BASE_URL}/posts`

async function getUsers(): Promise<User[]> {
  const users = await fetchJson<User[]>(USER_URL)
  return users
}

async function getPosts(): Promise<Post[]> {
  const posts = await fetchJson<Post[]>(POST_URL)
  return posts
}

async function getPostsbyUsers(userId: number, posts: Post[]): Promise<Post[]> {
  return posts.filter((post: Post) => post.userId === userId)
}

async function giveMePostAndUsers(): Promise<void> {
  try {
    // * Hier werfen wir alle unsere promise function in einem Array, damit wir die einzelnen Promise nicht hängen lassen
    const usersAndPosts = await Promise.all([getPosts(), getUsers()])

    console.log(usersAndPosts)

    // ! Variante 1
    // const  posts = usersAndPosts[0]
    // const users = usersAndPosts[1]

    //  ! Variante 2 (Gängige Praxis)
    const [posts, users] = usersAndPosts

    users.forEach(async (user: User) => {
      console.log(user)
      const myResult = await getPostsbyUsers(user.id, posts)
      console.log(myResult)
    })
  } catch (error) {
    console.log(error)
  }
}

async function doTasks(name: string, duration: number): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Task wurde durch ${name} nach ${duration} erfüllt.`)
    }, duration)
  })
}

doTasks("john", 2000)

async function runParallelTask(): Promise<void> {
  const tasks = [doTasks("Joe", 1000), doTasks("Alice", 2000), doTasks("Andre", 3000)]

  const taskArray = await Promise.all(tasks)
  taskArray.forEach((task) => console.log(task))
}

async function mainFunction(): Promise<void> {
  await giveMePostAndUsers()
  await runParallelTask()
}

mainFunction()
