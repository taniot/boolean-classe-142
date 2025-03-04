/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito (es. "Ciao [nome]") */

const userName = 'Mario';

// Dichiara la funzione qui.

//funzione ordinaria
// function sayHello(name) {
//   let hello = `Ciao ${name}`;
//   return hello;
// }

//arrow function
// const sayHello = (name) => {
//   const hello = `Ciao ${name}`;
//   return hello;
// }

//arrow function abbreviata
const sayHello = name => `Ciao ${name}`;

// Invoca la funzione qui e stampa il risultato in console

console.log(sayHello(userName));
console.log(sayHello('gaetano'));
// const prova = sayHello(userName);


console.log(sayHello('Gaetano'));
console.log(sayHello('Angela'));
console.log(sayHello('Fabio'));
console.log(sayHello('Carlo'));




//Risultato atteso se si passa 'Mario': // ciao Mario
