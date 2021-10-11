const BankAccount = class {
  constructor(balance) {
    this.balance = balance;
  }

  deposit(amount) {
    this.balance += amount;
  }

  withdraw(amount) {
    this.balance -= amount;
    return this.balance;
  }

  toString(){
    return `balance=${this.balance}`
  }

}

const transfer = (acct1, acct2, amount) => {
  acct1.withdraw(amount);
  acct2.deposit(amount);
}

export default BankAccount;
export {transfer};
