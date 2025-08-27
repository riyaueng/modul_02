import "./style.css"

const marvelArray: string[] = ["Iron Man", "Captain Amerika", "Thor", "Hulk", "Black Widow", "Spider Man"]

marvelArray.push("Iron Man")
marvelArray.push("Thor")

console.log(marvelArray)

const marvelSet = new Set(marvelArray)

console.log(marvelSet)

// ? Set wandelt das Array in ein Objekt um und löscht doppelte Einträge
