import { describe, it, expect } from "vitest"
import { PaymentFactory } from "../main/factory/PaymentFactory.js"
import { PaymentTypes } from "../main/models/PaymentTypes.js"

describe("PaymentFactory should ", () => {
  it("create a paypal payment", () => {
    const paymentFactory = new PaymentFactory()
    const payment = paymentFactory.obtainPayment(PaymentTypes.PAYPAL)

    expect(payment.createPayment()).toBe("Processing payment with paypal")
  })

  it("create a cash payment", () => {
    const paymentFactory = new PaymentFactory()
    const payment = paymentFactory.obtainPayment(PaymentTypes.CASH)
    expect(payment.createPayment()).toBe("Processing payment with cash")
  })

  it("create a debit card payment", () => {
    const paymentFactory = new PaymentFactory()
    const payment = paymentFactory.obtainPayment(PaymentTypes.DEBIT_CARD)

    expect(payment.createPayment()).toBe("Processing payment with debit card")
  })

  it("create a credit card payment", () => {
    const paymentFactory = new PaymentFactory()
    const payment = paymentFactory.obtainPayment(PaymentTypes.CREDIT_CARD)
    expect(payment.createPayment()).toBe("Processing payment with credit card")
  })

  it("create a bank transfer payment", () => {
    const paymentFactory = new PaymentFactory()
    const payment = paymentFactory.obtainPayment(PaymentTypes.BANK_TRANSFER)
    expect(payment.createPayment()).toBe("Processing payment with bank transfer")
  })
})
