class Product {
    private P_id:string;
    private name:string;
    private supplier:string

    constructor(P_id:string,name:string,supplier:string){
        this.P_id = P_id;
        this.name = name;
        this.supplier = supplier;
    }
    public getPid():string{
        return this.P_id;
    }
    public getName():string{
        return this.name
    }
    public setName(name:string):void{
        this.name = name;
    }
    public getSupplier():string{
        return this.supplier;
    }
    public setSupplier(supplier:string):void{
        this.supplier = supplier;
    }
    public toString():string{
        return `Product = [P_id = ${this.getPid()}, Name = ${this.getName()}, Supplier = ${this.getSupplier()}]`
    }
}

export {Product}