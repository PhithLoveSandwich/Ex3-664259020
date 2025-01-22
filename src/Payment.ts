export class Payment{
    private id:string
    private paid:string
    private total:string
    private detail:string

    constructor(id:string,paid:string,total:string,detail:string){
        this.id = id
        this.paid = paid
        this.total = total
        this.detail = detail
    }

    public getID():string{
        return this.id
    }
    public getPaid():string{
        return this.paid
    }
    public setPaid(paid:string):void{
        this.paid = this.paid
    }
    public getTotal():string{
        return this.total
    }
    public setTotal(total:string):void{
        this.total =this.total
    }
    public getDetail():string{
        return this.detail
    }
    public setDetail(detail:string):void{
        this.detail =this.detail
    }
    public toString():string{
        return `Payment = [id="${this.getID()}",paid="${this.getPaid()}",total="${this.getTotal()}",detail="${this.getDetail()}"]`
    }
}
