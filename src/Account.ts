import { ShoppingCart } from "./ShoppingCart";
import { Order } from "./Order";
import { Payment } from "./Payment";

class Account{
    private shoppingCart:ShoppingCart;
    private payment:Payment[] = [];
    private order:Order[] = [];
    private id :string;
    private billing_address: string;
    private is_closed :boolean;
    private open :string
    private closed :string

    constructor(
        id: string,
        billing_address: string,
        is_closed: boolean,
        open: string,
        closed: string
    ) {
        this.shoppingCart = new ShoppingCart(`22-01-2024`);
        this.id = id;
        this.billing_address = billing_address;
        this.is_closed = is_closed;
        this.open = open;
        this.closed = closed;
    }
    
    public getid():string{
        return this.id;
    }

    public getBilling():string{
        return this.billing_address
    }

    public setBilling(billing_address:string):void{
        this.billing_address = billing_address;
    }

    public getISClosed():boolean{
        return this.is_closed
    }

    public setISClosed(is_closed:boolean):void{
        this.is_closed = is_closed;
    }

    public getOpen():string{
        return this.open
    }

    public setOpen(open:string):void{
        this.open = open;
    }

    public getClose():string{
        return this.closed
    }

    public setClose(closed:string):void{
        this.closed = closed;
    }

    public addOrder(order:Order):void{
        this.order.push(order);
    }

    public addPayment(payment:Payment):void{
        this.payment.push(payment);
    }

    public getPayments():Payment[]{
        return this.payment
    }

    public getOrders():Order[]{
        return this.order
    }

    public toString():string{
        return `Account = [id = "${this.getid()}", billing_address = "${this.getBilling()}",
         is_closed = "${this.getISClosed()}", open = "${this.getOpen()}", closed = "${this.getClose()}"]`
    }
}

export { Account };
