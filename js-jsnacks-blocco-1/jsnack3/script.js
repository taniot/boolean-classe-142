/*
Il software deve chiedere per 10 volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti.
*/

const questions = 10;
let sum = 0;


for (let index = 1; index <= questions; index++) {

  const number = parseFloat(prompt(`${index} - Inserisci un nuovo numero`));
  const validNumbers = !isNaN(number);
  if (validNumbers) {
    sum += number;
    //sum = sum + number;
  }

}

console.log('La somma dei numeri inseriti è');
console.log(sum);