const person = {
    id: 1,
    firstName: 'Mario',
    lastName: 'Rossi',
    age: 25,
};

const asArray = Object.entries(person);

const filtered = asArray.filter(([key, value]) => typeof value === 'number');

const justNumbers = Object.fromEntries(filtered);

console.log(justNumbers)

const json = JSON.stringify(justNumbers);

console.log(json); // Should return: { id: 1, age: 25 } 