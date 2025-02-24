console.log('Ciao Gaetano');

//istruzioni condizionali

// const firstName = 'Gaetano';
const lastName = 'Frascolla';
let age = 17;


// if(condizione => true/false) {
//   //true = codice eseguito
// }

//condizione senza else
// if(false){
//   console.log('Sono entrato a riga 16 perchè la condizione si è verificata');
// }

// const valoreDiPartenza = false;

// //condizione con else
// if (!valoreDiPartenza) {
//   console.log('condizione verificata');
// } else {
//   console.log('condizione non verificata');
//   console.log(firstName);
//   console.log(lastName);
//   console.log(age);
// }


//condizione con else/else if/else

if (age === 41) {
  console.log('gaetano ha 41 anni');
} else if (age === 50) {
  console.log('gaetano ha 50 anni');
} else if (age > 50 && age < 60) {
  console.log('gaetano ha tra 50 anni e 60 anni', age)
} else if ((age > 60 && age < 65) || (age > 10 && age < 20)) {
  console.log(`Gaetano ha ${age} anni, compresi tra ....`);
} else {
  console.log(`Gaetano ha ${age} anni`);
}


age = 50;
//monoriga


/*
ciao
sono
un commento
*/


/*
== (uguaglianza)vs === (identicità)

50 => 50 valore, number è tipo
'50' => 50 valore, string è tipo

50  == '50' ======> true; sto confrontando solo il valore

50 === '50' ======> false; sto confrontando valore E tipo


*/

// alert(true);
// alert('ciao');
// alert(9);
// alert('prova');




// //sviluppare un programma che date due parole le confronta e determina quale parola è la parola più lunga

// //chiedo all'utente la prima parola e la salvo in una variabile
// const firstWord = prompt('Inserisci la prima parola');
// console.log(firstWord);
// //chiedo all'utente la seconda parola e la salvo in una variabile
// const secondWord = prompt('Inserisci la seconda parola');
// console.log(secondWord);
// //calcolo la lunghezza della prima parola
// const firstWordLength = firstWord.length;
// console.log(firstWordLength);
// //calcolo la lunghezza della seconda parola
// const secondWordLength = secondWord.length;
// console.log(secondWordLength);
// //confronto la lunghezza delle due parole

// //se la prima parola è piu lunga della seconda 
// if (firstWordLength > secondWordLength) {
//   //stampo il messaggio: la parola piu lunga è parola1
//   console.log(`La parola più lunga è ${firstWord}`);
//   //altrimenti se la seconda parola è piu lunga della prima
// } else if (secondWordLength > firstWordLength) {
//   //stampo il messaggio: la parola piu lunga è parola2
//   console.log(`La parola più lunga è ${secondWord}`);
//   //altrimenti
// } else {
//   //stampo il messaggio: le parole sono lunghe uguali
//   console.log(`La parola ${firstWord} e ${secondWord} hanno la stessa lunghezza: ${firstWordLength}`);
// }





// //contesto globale
// const mioNome = 'Melo';

// if (true) {
//   //contesto di blocco
//   const suoNome = 'Valerio';

//   console.log(mioNome);
//   console.log(suoNome);
// }

// console.log(mioNome);
// console.log(suoNome);

// let count = 0;

// if (true) {
//   //qui è stata definita la variabile count?;
//   count = count + 1;
// }


// console.log(count);

let count = 1;
let myAge = 42;

if (true) {
  //guardo qui
  let count = 7;
  if (true) {
    count = 12;
  }

}


const demo = prompt('Inserisci la tua età');

console.log(demo);
console.log(parseInt(demo));


