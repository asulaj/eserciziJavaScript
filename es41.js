class BankAccount {
    
    #amount = 0;

    constructor(initialAmount) {
        this.#amount = initialAmount;
    }

    deposit(amount) {
        try {
            if (amount < 0) {
                throw Error('Hai inserito un importo negativo');
            } else {
                this.#amount += amount;
            }
        } catch (e) {
            console.log(e)
        }
    }

    withdraw(amount) {
        // throw an exception if amount is negative or if withdrawal amount is greater than current amount
      try{
         if (amount < 0 ||  amount > this.#amount){
            throw Error('SOLDI NO')
         }else{
            this.#amount -= amount;
         }
      }catch(a){
          console.log(a);
      }
    }

    view() {
        console.log(this.#amount);
    }
}

const bankAccount = new BankAccount(1000);
bankAccount.deposit(500);
bankAccount.deposit(200);
bankAccount.withdraw(10000); // This operation should not be possible, because you cannot withdraw more than the account balance
bankAccount.view();