import OrderStatus from "../enums/OrderStatus"
import type IPizza from "./IPizza"

interface IOrder {
  _orderNumber: number
  _customerName: string
  // * Ich kann auch ein Interface in der Type-Definition eines anderen verwenden
  _pizzen: IPizza[]
  _status: OrderStatus
  updateStatus: () => void

  // * Schreibweise (wie bei Type) -> Mehtodenname: () für Parameter -> Rückgabedatentyp
  cancle: () => boolean
}

export default IOrder
