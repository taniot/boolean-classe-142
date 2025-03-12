// /*
// Domande e Risposte
// - ciclo for - casi d'uso (funzioni e array);
// - sintassi js
// - funzioni con parametri e valori undefined (anomima, 2 o più argomenti)
// - assegnazione di funzione a variabile;
// - dom (append, appendchild)
// - scope (blocco, funzione, globale):



// //for
// istruzione di iterazione

// */


// // console.log('ciao'); //10 volte
// // console.log('ciao'); //10 volte
// // console.log('ciao'); //10 volte
// // console.log('ciao'); //10 volte
// // console.log('ciao'); //10 volte
// // console.log('ciao'); //10 volte
// // console.log('ciao'); //10 volte
// // console.log('ciao'); //10 volte


// const persona1 = 'Fabio';
// const persona2 = 'Marco';
// const persona3 = 'Michelangelo';

// // const numbers = [0:'Fabio', 1:'Marco', 2:'Michelangelo', 3:'Gaetano']; //3
// const persone = ['Fabio', 'Marco', 'Michelangelo', 'Gaetano', 'Edoardo', 'Giorgia']; //4 - 1000 - 2000

// // numbers[0]; //=> Fabio

// // console.log(people[0]);
// // console.log(people[1]);
// // console.log(people[2]);

// console.log(persone.length);


// for (let i = 0; i < persone.length; i++) {
//   //console.log(pizza); //0, 1, 2, 3
//   // console.log(people[i]); //Fabio, Marco //prendi il valore in posizione pizza nell'array people



//   // console.log(people[i].toUpperCase); //prendi il valore in posizione pizza nell'array people


//   // console.log(people[i] + ' è andato al mare');//prendi il valore in posizione pizza nell'array people

//   // //CON USO DI VARIABILE

//   const person = persone[i]; //prendi il valore in posizione pizza nell'array people => Fabio

//   console.log(person); //Fabio, Marco //prendi il valore in posizione pizza nell'array people



//   console.log(person.toUpperCase()); //prendi Fabio


//   console.log(person + ' è andato al mare');//prendi Fabio


// }


// // console.log('Fabio');
// // console.log(persona1);
// // 




// // for (let i = 1; i <= 10; i++) {
// //   console.log('ciao'); //10 volte
// // }


// // const numbers = [];

// // numbers[0] = 1;
// // numbers[1] = 2;
// // numbers[2] = 3;
// // numbers[3] = 4;
// // numbers[4] = 5;


//definizione funzione
//crea un array di 50 numeri 
// randomici compresi tra 1 e 10
//restituisce array
function andrea() {

  const result = [];

  // result[0] = Math.floor(Math.random() * 10) + 1;
  // result[1] = Math.floor(Math.random() * 10) + 1;
  // result[2] = Math.floor(Math.random() * 10) + 1;
  // result[3] = Math.floor(Math.random() * 10) + 1;
  // result[4] = Math.floor(Math.random() * 10) + 1;
  // result[5] = Math.floor(Math.random() * 10) + 1;
  // result[6] = Math.floor(Math.random() * 10) + 1;
  // result[7] = Math.floor(Math.random() * 10) + 1;
  // result[8] = Math.floor(Math.random() * 10) + 1;
  // result[9] = Math.floor(Math.random() * 10) + 1;
  // result[10] = Math.floor(Math.random() * 10) + 1;
  // result[11] = Math.floor(Math.random() * 10) + 1;
  // result[12] = Math.floor(Math.random() * 10) + 1;
  // result[13] = Math.floor(Math.random() * 10) + 1;
  // result[14] = Math.floor(Math.random() * 10) + 1;

  for (let i = 0; i < 10000; i++) {
    // result[i] = Math.floor(Math.random() * 10) + 1;
    result.push(Math.floor(Math.random() * 10) + 1)
  }


  // console.log(result);

  return result;


}
// console.log(andrea());
// console.log([1,10,5,7,2]);

const risultato = andrea();
console.log(risultato);

// for (let i = 0; i < risultato.length; i++) {
//   console.log(risultato[i]);
// }


function generateRandomNumber(min, max) {

  // console.log(min);
  // console.log(max);

  // let prova;
  // console.log(prova);

  // console.log(pippo);
  // const ciao = `benvenuto ${nome}`;
  // return Math.ceil(Math.random() * 10) + 5;
  // return Math.ceil(Math.random() * undefined) + undefined;
  // return Math.ceil(Math.random() * undefined) + undefined;

  const number = Math.ceil(Math.random() * (max - min)) + min;

  console.log(number);
  return number;
}

//genera 3 numeri random
// const num1 = Math.ceil(Math.random() * 10) + 1;
// const num2 = Math.ceil(Math.random() * 10) + 1;
// const num3 = Math.ceil(Math.random() * 10) + 1;

////genera 3 numeri random
const num1 = generateRandomNumber(5, 10); //min = 5, max = 10;
const num2 = generateRandomNumber(1, 100); //min = undefined, max = undefined;
const num3 = generateRandomNumber(100, 500); //min = undefined, max = undefined;

console.log(num1);
console.log(num2);
console.log(num3);

// console.log(testParameters());
// console.log(testParameters());
// console.log(testParameters());
// console.log(testParameters());
// console.log(testParameters());
// console.log(testParameters());
// console.log(testParameters());
// console.log(testParameters());
// console.log(testParameters());
// console.log(testParameters());










console.log(num3 + 100);







