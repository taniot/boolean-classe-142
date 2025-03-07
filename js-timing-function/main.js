
// const button = document.querySelector('button');
// console.log(button);



// //1) eseguo e stampo in console prima ciao;
// console.log('prima ciao');



// //2) eseguo e metto da parte per l'esecuzione 
// // tra 5 secondi della funzione //1,2...
// // setTimeout(sayHello, 4000);

// // setTimeout(function () {
// //   console.log('setTimeout con funzione anonima');
// // }, 2000);


// // const intervalId = setInterval(sayHello, 2 * 1000);
// // console.log(intervalId);

// // button.addEventListener('click', function () {
// //   clearInterval(intervalId);
// // })




// // const duration = 13;



// // setTimeout(function () {
// //   clearInterval(intervalId);
// // }, duration * 1000)




// //3) eseguo e stampo in console dopo ciao;
// console.log('dopo ciao');


// //100000 di loc

// //..4..5.. (secondi)

// //4) eseguo la funzione sayHello
// //stampo in console ciao


// function sayHello() {
//   // alert('ciao');
//   console.log('ciao');
// }


// //prima ciao
// //dopo ciao
// //setTimeout con funzione anonima
// //ciao

// function logTime() {

//   const resultElement = document.getElementById('result');


//   const now = new Date();
//   const hours = now.getHours();

//   let minutes = now.getMinutes();

//   if (minutes < 10) {
//     minutes = '0' + minutes;
//   }

//   let seconds = now.getSeconds();

//   if (seconds < 10) {
//     seconds = '0' + seconds;
//   }
//   // const minutes = now.getMinutes();

//   const result = `${hours}:${minutes}:${seconds}`;
//   console.log(result);
//   resultElement.innerHTML = result;

//   // console.log(hours);
//   // console.log(minutes);
//   // console.log(seconds);


// }

// // console.log(logTime());

// const intervalId = setInterval(logTime, 1000);


// button.addEventListener('click', function () {
//   clearInterval(intervalId);


//   const resultElement = document.getElementById('result');
//   resultElement.innerHTML += ' - il tempo si è fermato';


// })



/*

Scrivere un programma che faccia il conto alla rovescia per 10 secondi e poi 
auguri buon anno.

ipotesi 1:
uso un array come contenitore dei "secondi" e uso un ciclo for stampando ogni valore, quando finito stampo auguri;
//contro
1. difficile gestire altre casistiche
2. ciclo for troppo veloce rispetto al tempo (secondi)

ipotesi 2:
imposto un valore iniziale 10
decremento il valore iniziale ogni secondo (setInterval)
quando arrivo a 0 stampo buon anno 
stoppo il decremento

*/

// setTimeout(function () {
//   console.log('buon anno');
// }, 10_000);

// let count = 11;

// setInterval(function () {

//   count--;
//   console.log(count);


// }, 1000);

// let count = 10;
// let countDown = setInterval(sayBuonAnno, 1000);

// function sayBuonAnno() {

//   console.log(count);
//   count--;

//   if (count === 0) {
//     console.log('buon anno');
//     clearInterval(countDown);
//   }

// }

// //crea un contatore che parte da 0
//quando l'utente pigia start inizia a contare
//quando l'utente pigia stop si ferma

//prendo i due bottoni
const countStartElement = document.getElementById('count-start');
const countStopElement = document.getElementById('count-stop');

//prendo il count value
const countValueElement = document.getElementById('count-value');


let count = 0;

countStartElement.addEventListener('click', function () {
  console.log('ho startato il contatore');

  countStartElement.disabled = true; //disabilito start
  countStopElement.disabled = false; //abilito stop

})

countStopElement.addEventListener('click', function () {
  console.log('ho stoppato il contatore');

  countStartElement.disabled = false; //disabilito start
  countStopElement.disabled = true; //abilito stop
})
