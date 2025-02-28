console.log('dadi');

/*
Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.
Bonus
Invece di generare il numero random per l'utente, chiedilo con un prompt!
*/


//genero il primo numero, per l'utente
//math floor
//const userNumber = Math.floor(Math.random() * 6) + 1;
//math round
// const userNumber = Math.round(Math.random() * 5) + 1; //1 a 6
//math ceil


// const userNumber = Math.ceil(Math.random() * 6); //1 a 6
const userNumber = parseInt(prompt('Inserisci un numero compreso tra 1 e 6'));
const cpuNumber = Math.ceil(Math.random() * 6); //1 a 6

const isNumberValid = userNumber >= 1 && userNumber <= 6 && !isNaN(userNumber);

console.log(isNumberValid);

if (isNumberValid) {
  if (userNumber > cpuNumber) {
    console.log(`Utente batte computer con punteggio di ${userNumber} vs ${cpuNumber}`);
  } else if (cpuNumber > userNumber) {
    console.log(`Computer batte Utente con punteggio di ${cpuNumber} vs ${userNumber}`);
  } else {
    console.log(`Tutti contenti, abbiamo pareggiato con punteggio ${userNumber}`);
  }

} else {
  console.log('OOOOOOOHHHHHHHHHH');
}


