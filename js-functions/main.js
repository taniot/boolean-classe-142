




// // function sumTwoNumbers(num1, num2) { //num1 e num2 sono parametri

// //   sum = num1 + num2;
// //   // //codice per il calcolo della relatività
// //   return sum;
// //   // console.log(sum);

// // }




// // console.log(sum);



// // const myFirstResult = sumTwoNumbers(5, 10); //15 //undefined
// // const mySecondResult = sumTwoNumbers(10, 20); //30 //undefined


// // const result = myFirstResult * mySecondResult; //15*30 = 450 undefined*undefined

// // console.log(result); //NaN


// // sumTwoNumbers(10, 20);
// // sumTwoNumbers(10, 20);
// // sumTwoNumbers(10, 20);
// // sumTwoNumbers(10, 20);
// // sumTwoNumbers(10, 20);
// // sumTwoNumbers(10, 20);
// // sumTwoNumbers(10, 20);
// // sumTwoNumbers(10, 20);
// // sumTwoNumbers(10, 20);
















// // //invocato



// /********
//  * FUNCTIONSSSSS
//  */

// //definizione della funzione
// //le funzioni sono soggette a hoisting



// // function ciao() {
// //   const result = 'marco';
// //   console.log('ciao1');
// //   return result;
// //   return 'ciao2';
// //   console.log('ciao3');



// // }


// //crea una funzione che restituisce la moltiplicazione di 2 valori
// //usa il risultato della funzione e moltiplicalo per 153
// //stampa il risultato in console

// // function moltiplicazione() {
// //   const m1 = null;
// //   const m2 = null;

// //   const prodotto = m1 * m2;

// //   return prodotto;

// // }

// // const m3 = moltiplicazione() * 153;

// // console.log(m3);

// // function multiply2Val(num1, num2) {
// //   let prodotto = num1 * num2;
// //   return prodotto;
// // }

// // let product2 = console.log(multiply2Val(1, 1) * 153);


// // function multiply2Val(num1, num2) {
// //   let prodotto = num1 * num2;
// //   // return prodotto;

// //   // return num1 * num2;
// //   return prodotto * 153;
// // }

// // console.log(multiply2Val(5, 10));

// // const risultato = multiply2Val(5, 10) * 153;

// // console.log(risultato);



// // let num1 = 1;
// // let num2 = 2;



// // function prova(num1, num2) {
// //   return num1 + num2;
// //   console.log('ciao');
// // }

// // prova(num1, num2); //3
// // //1 e 2 : marco, marco
// // //undefined:: willy
// // //niente: enrico, carlo, ale, simo, lorenzo...
// // //3 : giuseppe, raffaele


// // console.log(prova(num1, num2));

// // const result = prova(num1, num2);

// // console.log(result);


// // const myNumber = 3;

// // if (myNumber % 2 !== 0) {
// //   console.log('il numero è dispari');
// // }



// // if (isNumberOdd(3)) {
// //   console.log('Il numero è dispari');
// // }

// // if (isNumberOdd(10)) {
// //   console.log('Il numero è dispari');
// // }



// // if (isNumberOdd(15)) {
// //   console.log('Il numero è dispari');
// // }




// // function isNumberOdd(myNumber) {
// //   // if (myNumber % 2 !== 0) {
// //   //   return true;
// //   // }

// //   // return false;


// //   return myNumber % 2 !== 0; //=> true/false

// // }



// // if (isNumberOdd(10)){

// // }


// let myNumber = 15;

// //la funzione marco che riceve myNumber verifica se il numero è pari o dispari
// //se dispari restituisce true;
// //se pari restituisce false;
// function marco(myNumber) {
//   return myNumber % 2 !== 0
// }

// if (marco(10)) {
//   console.log('sono dispari');
// }







// function miaFunzione() {

//   var firstNumber = 0; //questa variabile si vede solo qui dentro

//   secondNumber = 10; //ma se dichiaro una variabile senza 
//   //var let o const...

// }

// miaFunzione();
// console.log(secondNumber); //...si vede anche fuori
// console.log(firstNumber); //ReferenceError: firstNumber is not defined


// //contesto globale (no blocco o funzione)
// const nome = 'Marta';


// stampaNome();
// // Marta







// const num1 = 2;

// //e qui?? no
// function stampaNome() {
//   //dentro la funzione provo a stampare una variabile che vive nel contesto globale

//   console.log(num1 + 2);
// }




// function myFunction(params) {
//   var variable = 'pippo';
//   let secondVariable = 10;
//   const constantVariable = 'constance';


// }

// // console.log(variable);
// // // Uncaught ReferenceError: variable is not defined
// // console.log(secondVariable);
// // // Uncaught ReferenceError: secondVariable is not defined
// // console.log(constantVariable);
// // // Uncaught ReferenceError: constantVariable is not defined

// console.log(myFunction());


// if (true) {
//   var variable = 'pippo';
//   let secondVariable = 10;
//   const constantVariable = 'constance';
// }

// console.log(variable);
// //'pippo'   
// console.log(secondVariable);
// // Uncaught ReferenceError: secondVariable is not defined
// console.log(constantVariable);
// // Uncaught ReferenceError: constantVariable is not defined

// for (var index = 0; index < 10; index++) {
//   console.log(index);
// }

// if (index === 10) {
//   console.log(index);
// }

//block scope

// if(){}

// for(){}
// while(){}
// if (true) {
//   const variable1 = 'prova';
//   let variable2 = 'prova';
//   var variable3 = 'prova';
// }

// console.log(variable1);
// console.log(variable2);
// console.log(variable3);

// for (var i = 0; i < 10; i++) {
//   console.log(i);
//   console.log('ciclo')
// }


// for (var i = 0; i < 10; i++) {
//   console.log(i);
//   console.log('ciclo')
// }
// console.log(i);



//function scope


//cosa stampiamo in console
//riga 12 a is 0;
//riga 14 b is 1;
//riga 15 c is ciao;

//riga 7 a is 0
//riga 8 b is buongiorno


//cosa stampiamo in console
//riga 12 a is 0;
//riga 14 b is 1;
//riga 15 c is ciao;

//riga 7 a is 0
//riga 8 b is 1

//cosa stampiamo in console

//riga 7 a is 0
//riga 8 b is buongiorno

//riga 12 a is 0;
//riga 14 b is 1;
//riga 15 c is ciao;


// a = 0;
// b = "buongiorno"
// var c = "ciao";

// saluta();

// console.log("a is " + a);
// console.log("b is " + b);

// function saluta() {
//   var d = "asd";
//   console.log("a is " + a);
//   var b = a + 1;
//   console.log("b is " + b);
//   console.log(c);
// }


// //somma 2 numeri e restituisce il risultato
// // function sum(num1, num2) {
// //   return num1 + num2;
// // }
// const nome = 'Gian';
// //arrow function
// const sum = (num1, num2) => num1 + num2;


// const stampaStringa = (num1) => {
//   return input;
// }

// // const sum = (num1, num2) => {
// //   return num1 + num2;
// // }



// // // const result = sum(1, 1);
// // console.log(result);
// console.log(nome);
// console.log(sum(1, 5));


const sum = (num1, num2) => num1 + num2;

const result = sum(1, 2);
console.log(result);

// function sum(num1, num2) {
//   return num1 + num2;
// }







