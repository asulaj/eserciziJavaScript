const person = {
    id: 1,
    firstName: 'Mario',
    lastName: 'Rossi',
    age: 25
  };
  
  
  const {id:id, firstName:firstName, lastName:lastName, age:age} = person;
  console.log(id, firstName, lastName, age);