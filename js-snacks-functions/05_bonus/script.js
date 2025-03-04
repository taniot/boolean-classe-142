/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito. 
Il saluto deve essere :
buongiorno se è mattina (fino alle 13), 
buon pomeriggio se è pomeriggio (fino alle 17) 
e buonasera se è sera (oltre le 17)
*/

const name = 'Mario';


const date = new Date();
const hour = date.getHours();

// Dichiara la funzione qui.

function sayHello(input, currentHour) {

  // const date = new Date();
  // const hour = date.getHours();

  let greetings;

  if (currentHour <= 13) {
    greetings = 'buongiorno';
  } else if (currentHour <= 17) {
    greetings = 'buon pomeriggio';
  } else {
    greetings = 'buonasera';
  }

  return `${greetings} ${input}`;

}



// Invoca la funzione qui e stampa il risultato in console

console.log(sayHello(name, hour));
console.log(sayHello(name, 15));
console.log(sayHello(name, 17));
console.log(sayHello(name, 21));


//Risultato atteso se si passa 'Mario' alle 18: // Buonasera Mario.