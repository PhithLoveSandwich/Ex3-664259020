"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Order = void 0;
const OrderStatus_1 = require("./OrderStatus");
class Order {
    constructor(number, ordered, shipped, ship_to, total) {
        this.lineItems = [];
        this.number = number;
        this.ordered = ordered;
        this.shipped = shipped;
        this.ship_to = ship_to;
        this.status = OrderStatus_1.OrderStatus.NEW;
        this.total = total = 0;
    }
    calculateTotal() {
        let totalPrice = 0;
        for (let i = 0; i < this.lineItems.length; i++) {
            totalPrice += this.lineItems[1].getPrice() * this.lineItems[i].getQuantity();
        }
        return totalPrice;
    }
    getNumber() {
        return this.number;
    }
    getOrderedDate() {
        return this.ordered;
    }
    setOrderedDate(ordered) {
        this.ordered = ordered;
    }
    getShippedDate() {
        return this.shipped;
    }
    setShippedDate(shipped) {
        this.shipped = shipped;
    }
    getShip_to() {
        return this.ship_to;
    }
    setShip_to(ship_to) {
        this.ship_to = ship_to;
    }
    getStatus() {
        return this.status;
    }
    setStatus(status) {
        this.status = status;
    }
    getTotal() {
        return this.total;
    }
    setTotal(total) {
        this.total = this.total;
    }
    toString() {
        return `Order = [number = ${this.getNumber()}, ordered = ${this.getOrderedDate()}, Shipped = ${this.getShippedDate()},
        Ship_to "${this.getShip_to()}", Status = ${this.getStatus()} , Total = ${this.getTotal()}]`;
    }
}
exports.Order = Order;
