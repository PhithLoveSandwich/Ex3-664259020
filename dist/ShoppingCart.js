"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShoppingCart = void 0;
class ShoppingCart {
    constructor(created) {
        this.lineItem = [];
        this.created = created;
    }
    getCreated() {
        return this.created;
    }
    addLineItems(lineItem) {
        this.lineItem.push(lineItem);
    }
    getLineItems() {
        return this.lineItem;
    }
    toString() {
        return `ShoppingCardt = [Created=${this.getCreated},lineItem=${this.lineItem.toString()}]`;
    }
}
exports.ShoppingCart = ShoppingCart;
