"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Payment = void 0;
class Payment {
    constructor(id, paid, total, detail) {
        this.id = id;
        this.paid = paid;
        this.total = total;
        this.detail = detail;
    }
    getID() {
        return this.id;
    }
    getPaid() {
        return this.paid;
    }
    setPaid(paid) {
        this.paid = this.paid;
    }
    getTotal() {
        return this.total;
    }
    setTotal(total) {
        this.total = this.total;
    }
    getDetail() {
        return this.detail;
    }
    setDetail(detail) {
        this.detail = this.detail;
    }
    toString() {
        return `Payment = [id="${this.getID()}",paid="${this.getPaid()}",total="${this.getTotal()}",detail="${this.getDetail()}"]`;
    }
}
exports.Payment = Payment;
