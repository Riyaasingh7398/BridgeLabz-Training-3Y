class BankAccount {
    #balance;

    constructor(balance) {
        this.#balance = balance;
    }

    deposit(amount) {
        if (amount <= 0) {
            throw new Error("Deposit amount must be greater than zero.");
        }

        this.#balance += amount;
        console.log("Deposited:", amount);
    }

    withdraw(amount) {
        if (amount <= 0) {
            throw new Error("Withdrawal amount must be greater than zero.");
        }

        if (amount > this.#balance) {
            throw new Error("Insufficient balance.");
        }

        this.#balance -= amount;
        console.log("Withdrawn:", amount);
    }

    getBalance() {
        return this.#balance;
    }
}

const account = new BankAccount(5000);

try {
    account.deposit(2000);
    console.log("Balance:", account.getBalance());

    account.withdraw(1000);
    console.log("Balance:", account.getBalance());

    account.withdraw(10000);
} catch (error) {
    console.log("Transaction Error:", error.message);
}

console.log("Final Balance:", account.getBalance());
