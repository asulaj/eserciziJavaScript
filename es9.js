function getKeys(obj) {
    const keys = [];
    for (let i in obj) {
        keys.push(i);
    }
    return keys
   }
   
   const person = {
     firstName: 'John',
     lastName: 'Doe',
     age: 32,
     city: 'Rome',
     job: 'Developer',
   };
   
   const keys = getKeys(person);
   console.log(keys);