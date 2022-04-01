class BankAccount{
    constructor(accDisp){
        this._accDisp=accDisp;
    }
    deposit(moneyMore){

        this._accDisp += moneyMore;
    }
    withdraw(moneyLess){
        this._accDisp -= moneyLess
    }
    view(){
        console.log(this._accDisp)
        
    }
}

const bankAccount = new BankAccount(1000);
bankAccount.deposit(500);
bankAccount.deposit(200);
bankAccount.withdraw(800);
bankAccount.view();