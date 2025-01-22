"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Customer = void 0;
class Customer {
    constructor(account, id, address, phone, email, webUser) {
        this.account = account;
        this.webUser = webUser;
        this.id = id;
        this.address = address;
        this.phone = phone;
        this.email = email;
    }
    getId() {
        return this.id;
    }
    getAddress() {
        return this.address;
    }
    setAddress(address) {
        this.address = address;
    }
    getPhone() {
        return this.phone;
    }
    setPhone(phone) {
        this.phone = phone;
    }
    getEmail() {
        return this.email;
    }
    setEmail(email) {
        this.email = email;
    }
    toString() {
        return `Customer: [ID = ${this.getId()}, Address = ${this.getAddress()}, Phone = ${this.getPhone()}, Email = ${this.getEmail()}][${this.webUser.toString()}]`;
    }
}
exports.Customer = Customer;
