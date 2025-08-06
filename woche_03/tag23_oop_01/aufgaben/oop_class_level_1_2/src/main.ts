import "./style.css"
import { SchoolClass } from "./SchoolClass"

const schoolClass1 = new SchoolClass(1, "Agate Giffhorn")

// * Anzeigen lassen der optionalen Eigenschaft

const schoolClass2 = new SchoolClass(1, "Ebert Meyerhoffer")
schoolClass2.setEndDate("21.04.2030")

const schoolClass3 = new SchoolClass(1, "Miriam Eddinger")

// * Änderung der Namen

schoolClass1.changeName("Hildegard Burgunder")
schoolClass2.changeName("Rita Kammhut")
schoolClass3.changeName("Bernd Hefergarten")

console.log(schoolClass1)
console.log(schoolClass2)
console.log(schoolClass3)
