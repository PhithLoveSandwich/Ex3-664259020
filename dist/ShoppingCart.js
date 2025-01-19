"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShoppingCart = void 0;
class ShoppingCart {
    constructor(cartId) {
        this.items = [];
        this.cartId = cartId;
    }
    addProduct(product, quantity) {
        this.items.push({ product, quantity });
    }
    removeProduct(productId) {
        this.items = this.items.filter(item => item.product.getPid() !== productId);
    }
    calculateTotal() {
        return this.items.reduce((total, item) => {
            return total + item.product.getSupplier().length * item.quantity;
        }, 0);
    }
    listItems() {
        return this.items
            .map(item => `${item.product.getName()} x ${item.quantity}`)
            .join(", ");
    }
    toString() {
        return `ShoppingCart [ID=${this.cartId}, Items=[${this.listItems()}]]`;
    }
}
exports.ShoppingCart = ShoppingCart;
