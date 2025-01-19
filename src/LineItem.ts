import {Product} from  "./Product"
export class LineItem{
    private quaintity: number;
    private price: number;
    private product: Product;

    constructor(quaintity:number,price:number,product:Product){
        this.quaintity = quaintity;
        this.price = price;
        this.product = product;
    }

    public getQuantity():number{
        return this.quaintity
    }

    public setQuantity(quaintity:number):void{
        this.quaintity = quaintity;
    }

    public getPrice():number{
        return this.price
    }

    public setPrice(price:number):void{
        this.price = price
    }

    public getProduct():Product{
        return this.product
    }

    public setProduct(product:Product):void{
        this.product = product;
    }

    public toString():string{
        return `Quantity = ${this.getQuantity()}, Price = ${this.getPrice()}, Product=${this.product.toString()}`
    }

}