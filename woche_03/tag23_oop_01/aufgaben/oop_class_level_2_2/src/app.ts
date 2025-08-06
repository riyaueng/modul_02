import "./style.css"
import { Car } from "./Car"
import { Driver } from "./Driver"

const car1 = new Car("Volvo", 2007, 234)
const car2 = new Car("Hyundai", 2012, 187)
const car3 = new Car("BYD", 2024, 204)
const car4 = new Car("Bugatti", 2018, 269)

console.log(car1)
console.log(car2)
console.log(car3)
console.log(car4)

const driver1 = new Driver("Gustav", "Haubenkampf", 36, car1)
const driver2 = new Driver("Tamy", "Bremsenhüpfer", 28, car2)
const driver3 = new Driver("Steffen", "Techiecki", 45, car3)
const driver4 = new Driver("Berta", "Bisanschlag", 32, car4)

driver1.introduceDriver()
driver2.introduceDriver()
driver3.introduceDriver()
driver4.introduceDriver()
