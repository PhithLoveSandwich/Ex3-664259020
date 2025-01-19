"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
class Product {
    constructor(P_id, name, supplier) {
        this.P_id = P_id;
        this.name = name;
        this.supplier = supplier;
    }
    getPid() {
        return this.P_id;
    }
    getName() {
        return this.name;
    }
    setName(name) {
        this.name = name;
    }
    getSupplier() {
        return this.supplier;
    }
    setSupplier(supplier) {
        this.supplier = supplier;
    }
    toString() {
        return `Product = [P_id = ${this.getPid()}, Name = ${this.getName()}, Supplier = ${this.getSupplier()}]`;
    }
}
exports.Product = Product;
