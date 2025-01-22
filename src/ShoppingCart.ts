import { LineItem } from "./LineItem"
export class ShoppingCart{
    private lineItem: LineItem[] =[];
    private created:string
    constructor(created:string){
        this.created = created
    }

    public getCreated():string{
        return this.created
    }

    public addLineItems(lineItem:LineItem):void{
        this.lineItem.push(lineItem)
    }

    public getLineItems():LineItem[]{
        return this.lineItem
    }

    public toString():string{
        return `ShoppingCardt = [Created=${this.getCreated},lineItem=${this.lineItem.toString()}]`
    }
}
