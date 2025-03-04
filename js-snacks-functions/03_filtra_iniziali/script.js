/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];


// Dichiara la funzione qui.

// function filterByFirstLetter(elements, search) {

//   const result = [];

//   //logica

//   for (let i = 0; i < elements.length; i++) {

//     const element = elements[i];
//     const firstLetter = element[0]; //element.charAt(0);

//     if (firstLetter === search) {
//       result.push(element);
//     }
//   }

//   return result;

// }



//arrow

// filterByFirstLetter(elements, search)

const filterByFirstLetter = (elements, search) => elements.filter((element) => {
  const firstLetter = element[0];
  if (firstLetter === search) {
    return true;
  }
})



// Invoca la funzione qui e stampa il risultato in console

console.log(filterByFirstLetter(names, 'A'));

//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]


// if (names[i].charAt(0).toLowerCase() === letters.toLowerCase()) {
//   initials.push(names[i]); // aggiunge il nome all'array risultato
// }
// return initials