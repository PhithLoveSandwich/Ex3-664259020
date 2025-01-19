class Payment {
    private paymentId: string;
    private amount: number;
    private paymentDate: string;
    private paymentMethod: string;

    constructor(paymentId: string, amount: number, paymentDate: string, paymentMethod: string) {
        this.paymentId = paymentId;
        this.amount = amount;
        this.paymentDate = paymentDate;
        this.paymentMethod = paymentMethod;
    }

    public getPaymentId(): string {
        return this.paymentId;
    }

    public getAmount(): number {
        return this.amount;
    }

    public setAmount(amount: number): void {
        this.amount = amount;
    }

    public getPaymentDate(): string {
        return this.paymentDate;
    }

    public setPaymentDate(paymentDate: string): void {
        this.paymentDate = paymentDate;
    }

    public getPaymentMethod(): string {
        return this.paymentMethod;
    }

    public setPaymentMethod(paymentMethod: string): void {
        this.paymentMethod = paymentMethod;
    }

    public toString(): string {
        return `Payment [ID=${this.getPaymentId()}, Amount=${this.getAmount()}, Date=${this.getPaymentDate()}, Method=${this.getPaymentMethod()}]`;
    }
}

export { Payment };
