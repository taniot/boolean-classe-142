console.log('Ciao Gaetano');

/*
## Pseudocodice

- scrivo un ciclo for che parte da 1 e arriva a 100 (index === indice)
- per ogni valore dell'indice eseguo condizioni specifiche
- SE indice è divisibile per 3
  - stampo fizz
- ALTRIMENTI SE indice è divisibile per 5
  - stampo buzz
- ALTRIMENTI SE indice è divisibile per 3 e per 5
  - stampo fizzbuzz
- ALTRIMENTI 
  - stampo indice

*/

for (let index = 1; index <= 100; index++) {

  //punto di partenza
  // let result = '';

  // if (index % 3 === 0) {
  //   result = result + 'Fizz'; //''+'Fizz' => 'Fizz';
  // } 

  // if (index % 5 === 0) {
  //   result = result + 'Buzz'; //Fizz + 'Buzz' => 'FizzBuzz'
  // }

  // if (result === '') {
  //   console.log(index);
  // } else {
  //   console.log(result);
  // }

  let result = '';
  if (index % 3 === 0) result += 'Fizz';
  if (index % 5 === 0) result += 'Buzz';
  console.log(result || index);

  // == confronta solo il valore
  // === confronta il valore e il tipo


  /*
  1
  2
Fizz
  */



  //punto di arrivo
  // console.log(result);





  //eseguo il codice tra parentesi
  //incremento index => index++
  // console.log(index);

  // if (index % 3 === 0) {
  //   //il numero è divisibile per 3
  //   // console.log('sono divisibile x 3', index);
  //   console.log('Fizz');
  // } else if (index % 5 === 0) {
  //   console.log('Buzz');
  // } else if (index % 3 === 0 && index % 5 === 0) {
  //   console.log('FizzBuzz');
  // }



  // if (index % 3 === 0 && index % 5 === 0) {
  //   console.log('FizzBuzz');
  // } else if (index % 3 === 0) {
  //   console.log('Fizz');
  // } else if (index % 5 === 0) {
  //   console.log('Buzz');
  // } else {
  //   console.log(index);
  // }


  // if (index % 15 === 0) {
  //   console.log('FizzBuzz');
  // } else if (index % 3 === 0) {
  //   console.log('Fizz');
  // } else if (index % 5 === 0) {
  //   console.log('Buzz');
  // } else {
  //   console.log(index);
  // }

  for (let index = 1; index <= 100; index++) {

    // const isDivByFifteen = index % 5 === 0 && index % 3 === 0;
    const isDivByFive = index % 5 === 0; //true or false
    const isDivByThree = index % 3 === 0;  //true or false

    if (isDivByFive && isDivByThree) {
      console.log('FizzBuzz');
    } else if (isDivByFive) {
      console.log('Fizz');
    } else if (isDivByThree) {
      console.log('Buzz');
    } else {
      console.log(index);
    }

  }






}

