import { Payment } from "../interfaces/Payment.js"

export class PaymentDebitCard implements Payment {
  createPayment(): string {
    return "Processing payment with debit card"
  }
}
