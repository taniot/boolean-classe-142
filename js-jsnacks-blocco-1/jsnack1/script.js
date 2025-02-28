/*
L’utente inserisce due numeri in successione, con due prompt.
Il software stampa il maggiore.
*/

//chiedo il primo numero
const firstNum = Number(prompt('Inserisci il primo numero'));
//chiedo il secondo numero
const secondNum = Number(prompt('Inserisci il secondo numero'));

//sono numeri validi?
const validNumbers = !isNaN(firstNum) && !isNaN(secondNum);

if (validNumbers) {

  if (firstNum > secondNum) {
    console.log(`Il numero maggiore è ${firstNum}`);
  } else if (secondNum > firstNum) {
    console.log(`Il numero maggiore è ${secondNum}`);
  } else {
    console.log('I numeri sono uguali');
  }

} else {

  console.log('I numeri non sono validi');
}