console.log('Benvenuti alla prima lezione su JS da File JS');

//dichiarazione di variabili //const
const myFirstName = 'Gaetano'; //String

//dichiarazione di variabili //let
//dichiariazione e assegnazione

let mySecondName = 'Frascolla';

console.log(mySecondName);

let myFirstTest; //undefined

console.log(myFirstTest);

myFirstTest = 'Il mio primo test'; //string
myFirstTest = "Il mio secondo test"; //string
console.log(myFirstTest);

//VAR

console.log(nonLaDevoUsare); //con let e const ottengo un errore, con var no
//var => hoisting
var nonLaDevoUsare = 'Prova con var';
console.log(nonLaDevoUsare);

//debolmente tipizzato

let count = 0; //number
console.log(count);

count = count + 1;

console.log(count);

//gaetano è impazzito

count = 'ahahahahah'; //string

console.log(count);


///10000 righe dopo

count = count + 1;

console.log(count);

const firstNumber = 25;
const secondNumber = 30;
const result = firstNumber + secondNumber; //55

console.log(result);


console.log(result+1); //=> result 55 => 55+1 => 56

//concatenazione

//+ = nelle stringhe concatena

// console.log('io sono'+''+'gaetano');

const firstString = "Testo1";
const secondString = "Testo2";

console.log(firstString +' '+ secondString);

//L'albero
//Azzurro

const stringAlbero = "L'albero";
const stringColoreAlbero = 'Azzurro';
console.log(stringAlbero + stringColoreAlbero);
console.log(`${stringAlbero}${stringColoreAlbero}`)


//interpolazione

const color = 'Rosso'; //string
const time = '12:38'; //string

console.log('Alle ' + time +' '+'il cielo diventa sempre'+' '+ color);

console.log(`
   
    Alle ${time} il cielo  
  diventa sempre ${color}
  
  
  `);


//proprietà dei dati


let myNumber = 5;

console.log(myNumber.toFixed(2)); // '5.00'
console.log(myNumber.toFixed());

let myString = 'Gaetano';

console.log(myString.length);




















