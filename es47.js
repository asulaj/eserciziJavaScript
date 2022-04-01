/*const person = {
    id: 1,
    firstName: 'Mario',
    lastName: 'Rossi',
    age: 25
};

for (let item of Object.entries(person)) {
    console.log(([a, b] = item).join(': '));
}
*/




const person = {
    id: 1,
    firstName: 'Mario',
    lastName: 'Rossi',
    age: 25
};

for (let [a , b] of Object.entries(person)) {
    console.log(`${a}:${b}`);
}