import { OrderStatus } from "./OrderStatus";
import { LineItem } from "./LineItem";
class Order{
    private number:string;
    private ordered:string;
    private shipped:string;
    private ship_to:string;
    private status:OrderStatus;
    private total: number;
    private lineItems:LineItem[]=[];

    constructor(number:string,ordered:string,shipped:string,ship_to:string,total:number){
        this.number = number;
        this.ordered = ordered;
        this.shipped = shipped;
        this.ship_to = ship_to;
        this.status = OrderStatus.NEW;
        this.total = total = 0;
    }

    public calculateTotal():number{
        let totalPrice = 0;
        for (let i = 0 ; i < this.lineItems.length; i++){
            totalPrice += this.lineItems[1].getPrice() * this.lineItems[i].getQuantity();
        }
        return totalPrice;
    }

    public getNumber():string{
        return this.number;
    }

    public getOrderedDate():string{
        return this.ordered;
    }

    public setOrderedDate(ordered:string):void{
        this.ordered = ordered;
    }

    public getShippedDate():string{
        return this.shipped
    }

    public setShippedDate(shipped:string):void{
        this.shipped = shipped;
    }

    public getShip_to():string{
        return this.ship_to;
    }

    public setShip_to(ship_to:string):void{
        this.ship_to = ship_to;
    }

    public getStatus():OrderStatus{
        return this.status;
    }

    public setStatus(status:OrderStatus):void{
        this.status = status;
    }

    public getTotal():number{
        return this.total;
    }

    public setTotal(total:number):void{
        this.total = this.total;
    }

    public toString():string{
        return `Order = [number = ${this.getNumber()}, ordered = ${this.getOrderedDate()}, Shipped = ${this.getShippedDate()},
        Ship_to "${this.getShip_to()}", Status = ${this.getStatus()} , Total = ${this.getTotal()}]`
    }
}

export{Order}