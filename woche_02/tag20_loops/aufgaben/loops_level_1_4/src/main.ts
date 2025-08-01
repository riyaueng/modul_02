const friendNames: string[] = ["Georg", "Anass", "Elaine", "Hakan", "Eric", "Kim", "Sergio"]

for (let index = 0; index < friendNames.length; index++) {
  const indexName = friendNames[index]
  console.log({ indexName })
}

for (const name of friendNames) {
  console.log({ name })
}
