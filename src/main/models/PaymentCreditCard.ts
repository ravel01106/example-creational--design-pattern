import { Payment } from "../interfaces/Payment.js"

export class PaymentCreditCard implements Payment {
  createPayment(): string {
    return "Processing payment with credit card"
  }
}
