class BankAccount {
    #amount = 0;
  
    constructor(initialAmount) {
      this.#amount = initialAmount;
    }
  
    deposit(amount) {
      if (amount < 0) {
        throw new Error('The amount provided cannot be negative');
      }
  
      this.#amount += amount;
    }
  
    withdraw(amount) {
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
  
  // Handle errors to avoid app crash
  const bankAccount = new BankAccount(1000);
  bankAccount.deposit(500);
  bankAccount.deposit(200);
  bankAccount.withdraw(10000);
  bankAccount.view();