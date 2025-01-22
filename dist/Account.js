"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Account = void 0;
const ShoppingCart_1 = require("./ShoppingCart");
class Account {
    constructor(id, billing_address, is_closed, open, closed) {
        this.payment = [];
        this.order = [];
        this.shoppingCart = new ShoppingCart_1.ShoppingCart(`22-01-2024`);
        this.id = id;
        this.billing_address = billing_address;
        this.is_closed = is_closed;
        this.open = open;
        this.closed = closed;
    }
    getid() {
        return this.id;
    }
    getBilling() {
        return this.billing_address;
    }
    setBilling(billing_address) {
        this.billing_address = billing_address;
    }
    getISClosed() {
        return this.is_closed;
    }
    setISClosed(is_closed) {
        this.is_closed = is_closed;
    }
    getOpen() {
        return this.open;
    }
    setOpen(open) {
        this.open = open;
    }
    getClose() {
        return this.closed;
    }
    setClose(closed) {
        this.closed = closed;
    }
    addOrder(order) {
        this.order.push(order);
    }
    addPayment(payment) {
        this.payment.push(payment);
    }
    getPayments() {
        return this.payment;
    }
    getOrders() {
        return this.order;
    }
    toString() {
        return `Account = [id = "${this.getid()}", billing_address = "${this.getBilling()}",
         is_closed = "${this.getISClosed()}", open = "${this.getOpen()}", closed = "${this.getClose()}"]`;
    }
}
exports.Account = Account;
