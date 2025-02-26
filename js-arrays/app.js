

let myVar = 'Gaetano'; //String, Number, Boolean
// console.log(myVar);




// array vuoto
// console.log(classe);
// console.log(classe.length);
// // console.log(classe[1]);

// classe.push('Angela', 'Melo', 'Denise');
//indice di partenza: 0;
// console.log(classe[0]);
// console.log(classe[1]);
// console.log(classe[2]);
// console.log(classe[3]);
// console.log(classe[4]);
// console.log(classe[5]);
//indice di arrivo: 5;

//tutti i valori
// console.log(classe);

// for(let i = 0; classe.length;)

const classe = ['Fabio', 'Edoardo', 'Marco', 'Enrico', 'Esteban', 'Raffaele']; //

// console.log(classe.length); //6


//parte del programma
classe.push('Andrea');
classe.push('Andrea');
classe.push('Andrea');
classe.push('Andrea');
classe.push('Andrea');
classe.push('Andrea');

//stampa tutti i valori dal primo all'ultimo
// for (let i = 0; i < classe.length; i++) {

//   //i=0;
//   console.log(i);
//   console.log(classe[i]); //stampa classe in posizione 0 => Fabio
//   //i++ => i=1;
// }

//stampa tutti i valori dall'ultimo al primo;

// console.log(classe);


// let i = 5;

// console.log(classe.length);
// console.log(classe.length - 1);

// for (let i = classe.length - 1; i >= 0; i--) {
//   console.log(classe[i]);
// }



//david
// for (let i = 0; i < classe.length; i++) {

//   //i=0;
//   console.log(i);
//   console.log(classe[classe.length - 1 - i]); //stampa classe in posizione 0 => Fabio
//   //i++ => i=1;
// }
















// classe.push('Angela');
// classe.push('Angela');
// classe.push('Angela');
// classe.push('Angela');
// classe.push('Angela');
// classe.push('Angela');
// classe.push('Angela');
// classe.push('Angela');

// console.log(classe);
// console.log(classe.length);



//1000 loc dopo....
// classe = 10;

// console.log(classe[3]);

// const marco = ['willy'];
// console.log(marco[0]);

// const numbers = [1, 2, 3, 4, 5, 150, 200, 73];
// console.log(numbers);

// const values = [true, false, false, true, false];
// console.log(values);

// const numbers = [10, 15, 2, 33, 20, 22];
// console.log(numbers);
//Stampare solo i numeri dispari

// for (let i = 0; i < 6; i++) {
//   const pari = i % 2 === 0;

//   if (pari) {
//     console.log(numbers[i]);
//   }
// }

// for (let i = 0; i < numbers.length; i++) {
//   const dispari = !(i % 2 === 0);

//   if (dispari) {
//     console.log(numbers[i]);
//   }
// }

// for (let i = 0; i < numbers.length; i++) {
//   const dispari = i % 2 !== 0;

//   if (dispari) {
//     console.log(numbers[i]);
//   }
// }

// for (let i = 0; i <= 6; i++) {
//   const pari = i % 2 === 0;

//   if (pari) {
//     console.log(numbers[i]);
//   }
// }


const numbers = [10, 15, 2, 33, 20, 22];
console.log(numbers);

for (let i = 0; i < numbers.length; i++) {


  // console.log(i);
  // console.log(numbers[i]);

  const currentNumber = numbers[i];
  // console.log(currentNumber);

  if (currentNumber % 2 !== 0) {
    console.log(currentNumber);
  }


  // if (numbers[i] % 2 !== 0) {
  //   console.log(numbers[i]);
  // }

}


const cities = ['London', 'Shanghai', 'New York', 'Delhi', 'Kuala Lumpur']
const names = []
const myNumbers = [1, 2, 3]
const colours = ['Red', 'Blue', 'Yellow']
const keys = ['q', 'w', 'e', 'r', 't', 'y']
const countries = ['Bolivia', 'Jordan', 'Greenland']
const fruits = ['Apple', 'Orange', 'Pear']

// 1. Aggiungi Fred all'array names
names.push('Fred');
console.log(names);

// 2. Aggiungi 4 alla fine dell'array numbers
myNumbers.push(4);
console.log(myNumbers);

// 3. Aggiungi Rio all'inizio dell'array cities
// cities.push('Rio'[0]);
// cities.push('Rio');
cities.unshift('Rio');
console.log(cities);

//const colours = ['Red', 'Blue', 'Yellow']
// 4. Rimuovi il primo colore dall'array colours
const removedValue = colours.shift();
console.log(removedValue);
console.log(colours);

//const keys = ['q', 'w', 'e', 'r', 't', 'y']
// 5. Rimuovi l'ultimo elemento dall'array keys
const removedKey = keys.pop();
console.log(removedKey);
console.log(keys);