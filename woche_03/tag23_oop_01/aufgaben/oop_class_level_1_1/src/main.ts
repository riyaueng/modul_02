import "./style.css"
import { IceCreamFlavor } from "./classes/Ice"

const icecream1 = new IceCreamFlavor("Chocolate", 2, true)
console.log(icecream1)

const icecream2 = new IceCreamFlavor("Mango", 4, true)
console.log(icecream2)

const icecream3 = new IceCreamFlavor("Stracciatella", 3, false, "Classic Italian")
console.log(icecream3)

const icecream4 = new IceCreamFlavor("Mint", 2, false, "Fresh taste")
console.log(icecream4)

const icecreamArray: IceCreamFlavor[] = [icecream1, icecream2, icecream3, icecream4]
console.log(icecreamArray)

for (const ice of icecreamArray) {
  ice.showPopularIce()
}
