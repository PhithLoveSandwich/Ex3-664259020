class Account {
    private accountId: string;
    private accountName: string;
    private email: string;

    constructor(accountId: string, accountName: string, email: string) {
        this.accountId = accountId;
        this.accountName = accountName;
        this.email = email;
    }

    public getAccountId(): string {
        return this.accountId;
    }

    public getAccountName(): string {
        return this.accountName;
    }

    public setAccountName(accountName: string): void {
        this.accountName = accountName;
    }

    public getEmail(): string {
        return this.email;
    }

    public setEmail(email: string): void {
        this.email = email;
    }

    public toString(): string {
        return `Account [ID=${this.getAccountId()}, Name=${this.getAccountName()}, Email=${this.getEmail()}]`;
    }
}

export { Account };
