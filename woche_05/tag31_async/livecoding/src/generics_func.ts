function reveresAndPrintString(myArr: string[] | number[]): void {
  const reverseArray = myArr.reverse()
  reverseArray.forEach((element: string | number) => console.log(element))
}

reveresAndPrintString(["Andre", "John", "Riya", "Rebecca"])

// reveresAndPrintString([22, 44, 100, 200])

// reveresAndPrintString([false, true, true, false])

// #  ----- Generics -----
// * Die Funktion braucht die spitze Klammern <> und T steht für jeden beliebigen Datentyp
// * "T" muss ich dann überall innerhalb der Funktion statt konkreten Types wie string oder number etc. verwenden
// * <T> ist eine Konvention bzw. eine Abmachung für generische Types. Wenn es um mehrere Types geht, davor gibt es U, V usw.

function reveresAndPrintStringWithGenerics<T>(array: T[]): void {
  const reverseArray = array.reverse()
  reverseArray.forEach((el: T) => console.log(el))
}

reveresAndPrintStringWithGenerics<string | number>(["Andre", "John", "Riya", "Rebecca", 231, 345])

reveresAndPrintStringWithGenerics<number>([22, 44, 100, 200])

reveresAndPrintStringWithGenerics<boolean>([false, true, true, false])
