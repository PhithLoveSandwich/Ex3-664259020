import { WebUser } from "./WebUser";

class Customer {
    private id: string;
    private address: string;
    private phone: string;
    private email: string;
    private webUser: WebUser;

    constructor(id: string, address: string, phone: string, email: string,webUser:WebUser) {
        this.webUser = webUser;
        this.id = id;
        this.address = address;
        this.phone = phone;
        this.email = email;
    }

    public getId(): string {
        return this.id;
    }

    public getAddress(): string {
        return this.address; 
    }

    public setAddress(address: string): void {
        this.address = address;
    }

    public getPhone(): string {
        return this.phone;
    }

    public setPhone(phone: string): void {
        this.phone = phone;
    }

    public getEmail(): string {
        return this.email;
    }

    public setEmail(email: string): void {
        this.email = email;
    }

    public toString(): string {
        return `Customer: [ID = ${this.getId()}, Address = ${this.getAddress()}, Phone = ${this.getPhone()}, Email = ${this.getEmail()}][${this.webUser.toString()}]`;
    }
}

export { Customer };