import "./style.css"
import { Car } from "./Car"
import { Driver } from "./Driver"
import { CarType } from "./enums/CarType"

const car1 = new Car("Volvo", 2007, 234, CarType.COUPE)
const car2 = new Car("Hyundai", 2012, 40, CarType.SEDAN)
const car3 = new Car("BYD", 2024, 80, CarType.HATCHBACK)
const car4 = new Car("Bugatti", 2018, 150, CarType.SUV)

console.log(car1)
console.log(car2)
console.log(car3)
console.log(car4)

const driver1 = new Driver("Gustav", "Haubenkampf", 36, car1, 2012)
const driver2 = new Driver("Tamy", "Bremsenhüpfer", 28, car2, 2018)
const driver3 = new Driver("Steffen", "Techiecki", 45, car3, 2001)
const driver4 = new Driver("Berta", "Bisanschlag", 32, car4, 2013)

driver1.introduceDriver()
driver2.introduceDriver()
driver3.introduceDriver()
driver4.introduceDriver()

// * -------- Aufgabe Class Level 1_13 --------

console.log(car1.constructionYear)
car1.getSpeedInfo()
car2.getSpeedInfo()
car3.getSpeedInfo()
car4.getSpeedInfo()

console.log(driver1.license)
console.log(driver2.license)

console.log(driver3.getCarType())
console.log(driver4.getCarType())
