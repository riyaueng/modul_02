import OrderStatus from "../enums/OrderStatus"
import IOrder from "../interfaces/IOrder"
import IPizza from "../interfaces/IPizza"

class Order implements IOrder {
  _orderNumber: number
  _customerName: string
  _pizzen: IPizza[] = []
  _status: OrderStatus

  updateStatus(): void {
    if (this._status === OrderStatus.Created) {
      this._status = OrderStatus.Ready
    }
  }

  cancle(): boolean {
    if (OrderStatus.Created) {
      return false
    } else {
      this._status = OrderStatus.Canceled
      return true
    }
  }

  constructor(orderNumber: number, customerName: string, status: OrderStatus) {
    this._orderNumber = orderNumber
    this._customerName = customerName
    this._status = status
  }
}

export default Order
