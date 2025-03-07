/*

Descrizione:
Visualizzare in pagina 5 numeri casuali.


Da lì parte un timer di 30 secondi.
Dopo 30 secondi i numeri scompaiono e appaiono invece 5 input in cui l'utente deve inserire i numeri che ha visto precedentemente, nell'ordine che preferisce.
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
NOTA: non è importante l'ordine con cui l'utente inserisce i numeri, basta che ne indovini il più possibile.



//generare N numeri casuali => salvare i numeri in un array => mostro in pagina
//setInterval che modificherà un valore contatore
//ogni secondo per 30 secondi
//evento sul form answers-form submit
//-verifico se i numeri inseriti sono tra i numeri generati

*/

//valore minimo numero da generare
const min = 1;
//valore max numero da generare
const max = 50;
//numeri da generare
const totNumbers = 5;
//valore iniziale contatore
let time = 5;

//elementi html
const numbersListElement = document.getElementById('numbers-list');
console.log(numbersListElement);

const countdownElement = document.getElementById('countdown');
console.log(countdownElement);

const answerFormElement = document.getElementById('answers-form');
console.log(answerFormElement);

const instructionsElement = document.getElementById('instructions');
console.log(instructionsElement);

const inputFieldsElement = document.querySelectorAll('#answers-form .form-control');
console.log(inputFieldsElement);

const messageElement = document.getElementById('message');

//genero i numeri con cui giocare
const numbers = generateRandomNumbers(min, max, totNumbers);
console.log(numbers);

//cosa ne faccio? li pubblico in pagina

let items = '';

for (let i = 0; i < totNumbers; i++) {

  const currentNumber = numbers[i];

  items += `<li>${currentNumber}</li>`;
}

numbersListElement.innerHTML = items;

//contatore e decremento con setInterval

countdownElement.innerText = time;

//intervallo
const countDownId = setInterval(function () {

  countdownElement.innerText = --time;

  if (time === 0) {
    clearInterval(countDownId);

    //nascondo i numeri;
    numbersListElement.classList.add('d-none');
    //numbersListElement.className = 'd-none';
    //mostro i campi del form
    answerFormElement.classList.remove('d-none');
    //answerFormElement.className = '';

    //nascondo il countDown
    countdownElement.classList.add('d-none');

    //cambio il testo del messaggio
    instructionsElement.innerText = 'Inserisci i numeri';

  }


}, 1000)


//gestione inserimento numeri

answerFormElement.addEventListener('submit', confirm);


function confirm(event) {
  event.preventDefault();
  console.log('invio del form');

  const userGuesses = [];

  for (let i = 0; i < inputFieldsElement.length; i++) {

    const currentElement = inputFieldsElement[i];
    // console.log(currentElement);

    const currentValue = parseInt(currentElement.value);
    // console.log(currentValue);

    // userGuesses.push(currentValue);

    //deve essere maggiore di min (1) e minore di max(50)
    //deve essere un numero
    //non deve gia essere incluso nella risposta 5

    //validazione
    if (currentValue >= min && currentValue <= max && !isNaN(currentValue) && !userGuesses.includes(currentValue)) {
      userGuesses.push(currentValue);
    }

  }

  //esito della validazione
  if (userGuesses.length !== totNumbers) {
    console.log('non puoi giocare');

    messageElement.classList.remove('text-success');
    messageElement.classList.add('text-danger');

    messageElement.innerText = 'Hai inserito risposte non valide';
    return;
  }

  //controllo elementi corretti
  const correctAnswers = [];

  for (let i = 0; i < userGuesses.length; i++) {

    const currentGuess = userGuesses[i];

    if (numbers.includes(currentGuess)) correctAnswers.push(currentGuess);

  }

  //gestione della stampa del messaggio
  if (correctAnswers.length > 0) {
    messageElement.classList.remove('text-danger');
    messageElement.classList.add('text-success');

    messageElement.innerText = `Hai indovinato ${correctAnswers.length} numeri; ${correctAnswers}`;
  } else {

    messageElement.classList.remove('text-success');
    messageElement.classList.add('text-danger');
    messageElement.innerText = `Non hai indovinato`;
  }

}

//restituisce un array contenente tot numeri 
// con un valore compreso tra min e max
function generateRandomNumbers(min, max, tot) {
  const result = [];

  //5 numeri random che possono ripetersi
  // for (let i = 0; i < tot; i++) {
  //   const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  //   result.push(randomNumber);
  // }

  //5 numeri random unici
  while (result.length < tot) {
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    if (!result.includes(randomNumber)) {
      result.push(randomNumber);
    }
  }

  return result;

}


