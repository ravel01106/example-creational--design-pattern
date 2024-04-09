import { Payment } from "../interfaces/Payment.js"

export class PaymentCash implements Payment {
  createPayment(): string {
    return "Processing payment with cash"
  }
}
