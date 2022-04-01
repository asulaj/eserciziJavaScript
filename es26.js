function Person(firstName,lastName){
    this.firstName = firstName;
    this.lastName = lastName;
    this.fullName = function(){
        return `${this.firstName} ${lastName}`;
    } 
}

let john = new Person("John","Doe");
let simon = new Person("Simon","Collins");

console.log(john.fullName());
console.log(simon.fullName());