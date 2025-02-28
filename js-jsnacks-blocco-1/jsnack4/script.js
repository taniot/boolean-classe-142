/*
Crea un array vuoto.
Chiedi per 6 volte all’utente di inserire un numero,
se è dispari inseriscilo nell’array
*/
const questions = 5; //numeri da chiedere
const oddNumbers = []; //elenco da popolare

for (let index = 1; index <= questions; index++) {

  const number = parseInt(prompt(`${index} - Inserisci un nuovo numero`));
  if (number % 2 !== 0) oddNumbers.push(number);

}
console.log('I numeri dispari che hai inserito sono:');
console.log(oddNumbers);