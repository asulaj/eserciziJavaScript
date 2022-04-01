/* Implementare le funzioni fetchPersonById e fetchJobById, le quali dato un id devono restituire rispettivamente:

La persona che ha come identificativo l'id passato come parametro
Il tipo di lavoro che ha come identificativo l'id passato come parametro
Infine implementare il codice necessario che si occupa di stampare in console la persona
 e il tipo di lavoro trovato. N.B: la stampa dei risultati deve avvenire solo nel momento in cui entrambe le Promise sono state risolte. */




const persons = [
    {
      id: 1,
      firstName: 'Mario',
      lastName: 'Rossi',
      age: 25
    },
    {
      id: 2,
      firstName: 'Maria',
      lastName: 'Verdi',
      age: 32
    },
    {
      id: 3,
      firstName: 'Giovanni',
      lastName: 'Rossi',
      age: 35
    }
  ];
  
  const jobs = [
    {
      id: 1,
      jobTitle: 'CEO'
    },
    {
      id: 2,
      jobTitle: 'Project Manager'
    },
    {
      id: 3,
      jobTitle: 'Developer'
    }
  ];
  
  // core here

  function fetchPersonById(id){   
      return new Promise ((resolve,reject)=>{
          setTimeout(() => {
              const personId = persons.find((item)=> item.id === id)
              if(personId){
                  return resolve(personId);
              }else{
                  return reject (`Doesn't exist that person with Id ${id}`)
              }
          },1000)
      })
  }
function fetchJobById(id){
    return new Promise ((resolve,reject)=>{
        setTimeout(() => {
            const job = jobs.find((item)=> item.id === id);
            if(job){
                return resolve(job)
            }else{
                return reject(`Doesn't exist that person with Id ${id}`) 
            }
        },1500)
    })
}
Promise.all([fetchPersonById(2),fetchJobById(3)])
.then(ok => console.log(ok))
.catch(err => console.log(err))

