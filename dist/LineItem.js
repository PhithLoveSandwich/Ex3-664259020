"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LineItem = void 0;
class LineItem {
    constructor(quaintity, price, product) {
        this.quaintity = quaintity;
        this.price = price;
        this.product = product;
    }
    getQuantity() {
        return this.quaintity;
    }
    setQuantity(quaintity) {
        this.quaintity = quaintity;
    }
    getPrice() {
        return this.price;
    }
    setPrice(price) {
        this.price = price;
    }
    getProduct() {
        return this.product;
    }
    setProduct(product) {
        this.product = product;
    }
    toString() {
        return `Quantity = ${this.getQuantity()}, Price = ${this.getPrice()}, Product=${this.product.toString()}`;
    }
}
exports.LineItem = LineItem;
