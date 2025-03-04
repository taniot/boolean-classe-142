/* Scrivi una funzione che accetti un array di nomi e restituisca
 nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];


// Dichiara la funzione qui.

// function getFirstChar(elements) {

//   const result = []; //salvo un array vuoto [] nella variable result
//   //const test = 1; //salvo un numero nella variable test
//   for (let i = 0; i < elements.length; i++) {

//     const element = elements[i]; //Anna
//     // const firstLetter = element[0];
//     const firstLetter = element.charAt(0); //A
//     // const firstLetter = element.substring(0, 1);

//     // console.log(firstLetter);
//     result.push(firstLetter);

//   }
//   return result;
// }

// const getFirstChar = elements => {
//   const result = []; //salvo un array vuoto [] nella variable result
//   //const test = 1; //salvo un numero nella variable test
//   for (let i = 0; i < elements.length; i++) {

//     const element = elements[i]; //Anna
//     // const firstLetter = element[0];
//     const firstLetter = element.charAt(0); //A
//     // const firstLetter = element.substring(0, 1);

//     // console.log(firstLetter);
//     result.push(firstLetter);

//   }
//   return result;
// }

// function getFirstChar(elements) {

//   console.log(elements);

//   // elements.map(fn)

//   const result = elements.map((element) => {

//     return element[0];
//   });


//   //aggiungere elementi in un array 
//   // elements.push()

//   return result;

// }


// function getFirstChar(elements) {


//   return elements.map((element) => element[0]);

// }


const getFirstChar = (elements) => elements.map(element => element[0]);



// Invoca la funzione qui e stampa il risultato in console

console.log(getFirstChar(names));


//Risultato atteso: ["A", "L", "M", "A", "G", "A"]