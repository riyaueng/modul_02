import "./style.css"
import { Person } from "./classes/Person"
import Employee from "./classes/Employee"
import Order from "./classes/Order"
import OrderStatus from "./enums/OrderStatus"
import Pizza from "./classes/pizza"
import IPizza from "./interfaces/IPizza"

// * Bisheige Typisierung
// type TMyObj = {
//   userName: string
// }

// const myObj: TMyObj = {
//   userName: "Joe",
// }

const user1 = new Person("Andre", "Schmidt", "346456456457")
const employee_andre = new Employee("Andre", "Schmidt", "346456456457")

console.log(user1)

employee_andre.email = "andre@gmail.de"

// ! Muss in clg geschrieben werden um es zu sehen
employee_andre.getFullName()
console.log(employee_andre.getFullName())

employee_andre._isMarried = true
employee_andre.checkingFly()

const order1 = new Order(1, "Joe Doe", OrderStatus.Created)

const pizzaFunghi = new Pizza("Pizza Funghi", 2)
const pizzaTuna = new Pizza("Pizza Tuna", 2)

const pizzeriaArray = [pizzaFunghi, pizzaTuna]

// ! Das ist die einfache Variante, aber nicht real umsetzbar
// order1._status = OrderStatus.Ready

console.log(order1)
order1.updateStatus()

if (order1._status === OrderStatus.Ready) {
  pizzeriaArray.forEach((pizza: IPizza) => {
    order1._pizzen.push(pizza)
  })
}
