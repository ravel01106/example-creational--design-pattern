import { Payment } from "../interfaces/Payment.js"

export class PaymentPaypal implements Payment {
  createPayment(): string {
    return "Processing payment with paypal"
  }
}
