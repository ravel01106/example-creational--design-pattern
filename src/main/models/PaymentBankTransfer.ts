import { Payment } from "../interfaces/Payment.js"

export class PaymentBankTransfer implements Payment {
  createPayment(): string {
    return "Processing payment with bank transfer"
  }
}
