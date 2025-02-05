const bankingSystem = function() {
    class BankAccount {
        constructor(accountNumber, accountHolder, initialBalance = 0) {
            this.accountNumber = accountNumber;
            this.accountHolder = accountHolder;
            this.balance = initialBalance;
        }

        deposit(amount) {
            if (amount <= 0) throw new Error("Deposit amount must be greater than zero.");
            this.balance += amount;
            return 'Deposited $${amount} into account ${this.accountNumber}. New balance: $${this.balance}';
        }

        withdraw(amount) {
            if (amount <= 0) throw new Error("Withdrawal amount must be greater than zero.");
            if (amount > this.balance) throw new Error("Insufficient funds.");
            this.balance -= amount;
            return 'Withdrew $${amount} from account ${this.accountNumber}. New balance: $${this.balance}';
        }

        checkBalance() {
            return 'Account ${this.accountNumber} balance: $${this.balance}';
        }

        transfer(amount, recipientAccount) {
            if (amount <= 0) throw new Error("Transfer amount must be greater than zero.");
            if (amount > this.balance) throw new Error("Insufficient funds for transfer.");
            this.withdraw(amount);
            recipientAccount.deposit(amount);
            return 'Transferred $${amount} from account ${this.accountNumber} to account ${recipientAccount.accountNumber}';
        }
    }

    const account1 = new BankAccount(101, "Alice", 1000);
    const account2 = new BankAccount(102, "Bob", 500);

    return {
        deposit: account1.deposit(500),
        withdraw: account1.withdraw(200),
        checkBalance: account1.checkBalance(),
        transfer: account1.transfer(300, account2),
        recipientBalance: account2.checkBalance()
    };
};

console.log(bankingSystem());

// Do not edit below this line
module.exports = bankingSystem;
