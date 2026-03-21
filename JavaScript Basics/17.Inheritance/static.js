class AccountHolder {
  constructor(name) {
    this.name = name;
    this.accountBalance = 0;
  }

  static rateOfInterest = 4;

  static getRateOfInterest() {
    console.log(`Rate of interest is:${this.rateOfInterest}%`);
  }

  credit(amount) {
    console.log(`${this.name}'s account is credit with amount:${amount}`);
    this.accountBalance += amount;
   
  }

  debit(amount) {
    console.log(`${amount} is deducted from ${this.name}'s account`);
    this.accountBalance -= amount;
  }

  getAccountBalance() {
    console.log(`the account balance is ${this.accountBalance}`);
  }
}

let smriti = new AccountHolder("Smriti");
smriti.getAccountBalance();
smriti.credit(1000);
smriti.debit(100);
smriti.getAccountBalance();
AccountHolder.getRateOfInterest();
// smriti.getRateOfInterest();// in js static method can not called on object , it only call on class directly without creating object.
