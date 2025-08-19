// ? In TS gibt es sogenannte "Utility Types", die uns helfen bestehende Types zu modifizieren ohne diese direkt zu verändern

// * Partial
// * Required
// * Readonly
// * Pick
// * Omit
// * Record

// # ---- Partial<T> ----
// ! Wandelt alle Eigenschaften eines Types in optionale Eigenschaften um

type Person = {
  name: string
  age: number
  address?: string
}

const person1: Person = {
  name: "Joe",
  age: 20,
}

// * Diese Zeile ist Optional
// type PartialPerson = Partial<Person>

const person2: Partial<Person> = {
  name: "Alice",
}

// # ---- Required<T> ----
// ! Macht alle Eigenschaften eines Types zu Pflichtfeldern

type RequiredPerson = Required<Person>

const person3: RequiredPerson = {
  name: "Bob",
  age: 20,
  address: "Musterstraße",
}

// # ---- Readonly<T> ----
// ! Macht alle Eigenschaften eines Types unveränderlich

type Product = {
  id: number
  name: string
  desc: string
  price: number
}

type readOnlyProduct = Readonly<Product>

const product1: readOnlyProduct = {
  id: 1,
  name: "PC",
  desc: "Gaming PC",
  price: 5000,
}

// ! Eine Zuweisung für "id" ist nicht mehr möglich, weil es sich um eine schreibgeschützte Eigenschaft handelt
// product1.id = 2

// # ---- Pick<T, Eigenschaft> ----
// ! Es erlaubt uns, nur bestimmte Eigenschaften eines Types auszuwählen oder zu extrahieren

type PickProduct = Pick<Product, "id" | "name">

const product2: PickProduct = {
  id: 3,
  name: "Laptop",
}

// # ---- Omit<T, Eigenschaft> ----
// ! Das ist genau das Gegenteil von Pick, es enfternt bestimmte Eigenschaften aus einem Type

type ProductWithoutDescAndPrice = Omit<Product, "desc" | "price">

const product3: ProductWithoutDescAndPrice = {
  id: 4,
  name: "Handy",
}

// # ---- Record<T> ----
// ! Erstellt ein neuen Type, der ein Obj mit Schlüsseln vom Type Kund werden vom Type T beschrieben

type PermissionLevel = "admin" | "editor" | "viewer"

type Persmission = Record<PermissionLevel, string[]>

const userPermissionObj: Persmission = {
  admin: ["create", "delete", "update"],
  editor: ["update", "view"],
  viewer: ["view"],
}

type Profil = {
  gehalt: number
  urlaub: boolean
}

type PersmissionWithAnotherType = Record<PermissionLevel, Profil>

const employee: PersmissionWithAnotherType = {
  admin: {
    gehalt: 5000,
    urlaub: true,
  },
  editor: {
    gehalt: 1000,
    urlaub: false,
  },
  viewer: {
    gehalt: 0,
    urlaub: false,
  },
}

type newPermission = Partial<PersmissionWithAnotherType>

if (userPermissionObj.admin) {
  // * An dieser Stelle kann man sowohl filter- als auch find-Methoden benutzen
  userPermissionObj.admin.filter((role: string) => {
    if (role === "create") {
      console.log("Du kannst was erstellen")
    }
  })
}

type CatName = "miffy" | "boris" | "mordred"

interface CatInfo {
  age: number
  breed: string
}

const cats: Record<CatName, CatInfo> = {
  miffy: { age: 10, breed: "Persian" },
  boris: { age: 5, breed: "Maine Coon" },
  mordred: { age: 16, breed: "British Shorthair" },
}
