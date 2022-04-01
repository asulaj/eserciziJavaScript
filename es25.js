const person = {
    set firstName(value) {
        this._firstName = value;
    },
    get firstName() {
        return this._firstName;
    },
    set lastName(value) {
        this._lastName = value;
    },
    get lastName() {
        return this._lastName;
    },
    fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}

const john = Object.create(person);
john._firstName = 'John';
john._lastName = 'Doe';

const simon = Object.create(person);
simon._firstName = 'Simon';
simon._lastName = 'Collins';

console.log(john.fullName());   // John Doe
console.log(simon.fullName());  // Simon Collins