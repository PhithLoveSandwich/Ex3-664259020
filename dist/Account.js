"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Account = void 0;
class Account {
    constructor(accountId, accountName, email) {
        this.accountId = accountId;
        this.accountName = accountName;
        this.email = email;
    }
    getAccountId() {
        return this.accountId;
    }
    getAccountName() {
        return this.accountName;
    }
    setAccountName(accountName) {
        this.accountName = accountName;
    }
    getEmail() {
        return this.email;
    }
    setEmail(email) {
        this.email = email;
    }
    toString() {
        return `Account [ID=${this.getAccountId()}, Name=${this.getAccountName()}, Email=${this.getEmail()}]`;
    }
}
exports.Account = Account;
