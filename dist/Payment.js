"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Payment = void 0;
class Payment {
    constructor(paymentId, amount, paymentDate, paymentMethod) {
        this.paymentId = paymentId;
        this.amount = amount;
        this.paymentDate = paymentDate;
        this.paymentMethod = paymentMethod;
    }
    getPaymentId() {
        return this.paymentId;
    }
    getAmount() {
        return this.amount;
    }
    setAmount(amount) {
        this.amount = amount;
    }
    getPaymentDate() {
        return this.paymentDate;
    }
    setPaymentDate(paymentDate) {
        this.paymentDate = paymentDate;
    }
    getPaymentMethod() {
        return this.paymentMethod;
    }
    setPaymentMethod(paymentMethod) {
        this.paymentMethod = paymentMethod;
    }
    toString() {
        return `Payment [ID=${this.getPaymentId()}, Amount=${this.getAmount()}, Date=${this.getPaymentDate()}, Method=${this.getPaymentMethod()}]`;
    }
}
exports.Payment = Payment;
