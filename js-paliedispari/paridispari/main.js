console.log('pari e dispari');

/*
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.
*/



//chiedo pari o dispari all'utente con un prompt e lo salvo in una variabile
// const userChoice = 'pari'; //pari/dispari
const userChoice = prompt('Scegli tra pari e dispari'); //pari/dispari
console.log({ userChoice });

if (userChoice === 'pari' || userChoice === 'dispari') {

  //chiedo il numero all'utente e lo salvo in una variabile
  const userNumber = parseInt(prompt('Inserisci un numero tra 1 e 5')); //compreso tra 1 e 5;

  if (userNumber >= 1 && userNumber <= 5) {
    console.log({ userNumber });
    //genero un numero random tra 1 e 5 (funzione) e lo salvo in una variabile
    const cpuNumber = getRndInteger(1, 5);
    console.log({ cpuNumber });

    const sum = userNumber + cpuNumber;
    console.log({ sum });

    // const isSumEvenOrOdd = sum % 2 === 0 //true / false
    const result = isEvenOrOdd(sum) //'pari' 'dispari'
    console.log({ result });


    if (userChoice === result) {
      console.log('vince utente');
    } else {
      console.log('vince computer');
    }

  } else {
    console.log('il numero deve essere compreso tra 1 e 5');
    alert('il numero deve essere compreso tra 1 e 5');
  }

} else {
  console.log(`Hai scelto ${userChoice}, ma il valore deve essere pari o dispari`);
  alert(`Hai scelto ${userChoice}, ma il valore deve essere pari o dispari`);
}


































/*********
 FUNCTIONS
 *********/

//restituisce true or false
function isEvenOrOdd(number) {
  //DRY = Dont Repeat Yourself
  if (number % 2 === 0) {
    return 'pari'; //Pari !== pari
  } else {
    return 'dispari';
  }
}

//genera un numero random tra min e max sempre inclusi
function getRndInteger(min, max) {
  //interrompe il codice della funzione e restituisce un valore;
  return Math.floor(Math.random() * (max - min + 1)) + min;
}









