/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'gaetano';


// Dichiara la funzione qui.

// function countVowels(input) {
//   //aeiouAEIOU

//   let count = 0;

//   for (let i = 0; i < input.length; i++) {

//     const currentLetter = input[i];

//     if (currentLetter === 'a') {
//       count++;
//     } else if (currentLetter === 'e') {
//       count++;
//     } else if (currentLetter === 'i') {
//       count++;
//     } else if (currentLetter === 'o') {
//       count++;
//     } else if (currentLetter === 'u') {
//       count++;
//     } else if (currentLetter === 'A') {
//       count++;
//     } else if (currentLetter === 'E') {
//       count++;
//     } else if (currentLetter === 'I') {
//       count++;
//     } else if (currentLetter === 'O') {
//       count++;
//     } else if (currentLetter === 'U') {
//       count++;
//     }
//   }

//   return count;
// }

function countVowels(input) {

  const vowels = 'aeiouAEIOU';
  // let count = 0;
  let result = [];

  for (let i = 0; i < input.length; i++) {

    const currentLetter = input[i];

    if (vowels.indexOf(currentLetter) >= 0) {
      // count++;
      result.push(currentLetter);
    }

  }

  console.log(result);

  return result.length;


}


// Invoca la funzione qui e stampa il risultato in console

console.log(countVowels(word));


//Risultato atteso se si passa 'javascript': 3 (a, a, i)

