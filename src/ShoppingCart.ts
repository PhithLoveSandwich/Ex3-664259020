import { Product } from "./Product";

class ShoppingCart {
    private cartId: string;
    private items: { product: Product; quantity: number }[] = [];

    constructor(cartId: string) {
        this.cartId = cartId;
    }

    public addProduct(product: Product, quantity: number): void {
        this.items.push({ product, quantity });
    }

    public removeProduct(productId: string): void {
        this.items = this.items.filter(item => item.product.getPid() !== productId);
    }

    public calculateTotal(): number {
        return this.items.reduce((total, item) => {
            return total + item.product.getSupplier().length * item.quantity; 
        }, 0);
    }

    public listItems(): string {
        return this.items
            .map(item => `${item.product.getName()} x ${item.quantity}`)
            .join(", ");
    }

    public toString(): string {
        return `ShoppingCart [ID=${this.cartId}, Items=[${this.listItems()}]]`;
    }
}

export { ShoppingCart };
