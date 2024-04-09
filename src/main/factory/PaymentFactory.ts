import { Payment } from "../interfaces/Payment.js"
import { PaymentBankTransfer } from "../models/PaymentBankTransfer.js"
import { PaymentCash } from "../models/PaymentCash.js"
import { PaymentCreditCard } from "../models/PaymentCreditCard.js"
import { PaymentDebitCard } from "../models/PaymentDebitCard.js"
import { PaymentPaypal } from "../models/PaymentPaypal.js"
import { PaymentTypes } from "../models/PaymentTypes.js"

export class PaymentFactory {
  obtainPayment(paymentType: PaymentTypes): Payment {
    switch (paymentType) {
      case PaymentTypes.PAYPAL:
        return new PaymentPaypal()
      case PaymentTypes.CASH:
        return new PaymentCash()
      case PaymentTypes.CREDIT_CARD:
        return new PaymentCreditCard()
      case PaymentTypes.DEBIT_CARD:
        return new PaymentDebitCard()
      case PaymentTypes.BANK_TRANSFER:
        return new PaymentBankTransfer()
      default:
        throw new Error("Error")
    }
  }
}
