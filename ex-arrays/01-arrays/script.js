const teachers = [
  'Nathan',
  'Ed',
  'Fabio',
  'Phil',
  'Carlo',
  'Lewis',
  'Lewis',
  'Luca'
]; // NON MODIFICARE QUESTA VARIABILE


// 1. Utilizzando un indice sull'array teachers, cambia il valore della
// variabile fourthTeacher qui sotto in modo che sia il quarto insegnante elencato nell'array
const fourthTeacher = teachers[3];
console.log(teachers);
console.log(fourthTeacher);

// 2. Sostituisci il quinto insegnante nell'array teachers con 'Patrick'
console.log(teachers[4]);
// let myNewTeacher = teachers[4];
// myNewTeacher = 'Patrick';

teachers[4] = 'Patrick';
// teachers.splice(4, 1, 'Patrick');
console.log(teachers);


// 3. Rimuovi l'ultimo insegnante dall'array e salvalo nella variabile lastTeacher qui sotto
const lastTeacher = teachers.pop(); //Luca
console.log(lastTeacher);
console.log(teachers);

// 4. Rimuovi il primo insegnante dall'array e salvalo nella variabile firstTeacher qui sotto
const firstTeacher = teachers.shift();
console.log(firstTeacher);
console.log(teachers);

// 5. Aggiungi un insegnante di nome 'Vanessa' alla fine dell'array teachers
teachers.push('Vanessa');
console.log(teachers);

// 6. Aggiungi un insegnante di nome 'Sarah' all'inizio dell'array teachers
teachers.unshift('Sarah');
console.log(teachers);

// 7. Trova l'indice dell'insegnante 'Lewis' nell'array teachers
// e salvalo nella variabile lewisIndex
const lewisIndex = teachers.indexOf('Lewis');
console.log(teachers);
console.log(lewisIndex);


// let lewisIndex = -1;

// for (let i = 0; i < teachers.length; i++) {

//   const currentTeacher = teachers[i];

//   if (currentTeacher === 'Lewis') {
//     lewisIndex = i;
//     break;

//   }

// }

// console.log(lewisIndex);



// 8. Verifica se l'array teachers è vuoto
// e salva il risultato nella variabile isTeachersEmpty
let isTeachersEmpty = teachers.length === 0;
console.log(isTeachersEmpty);

// let isTeachersEmpty;

// if (teachers.length === 0) {
//   isTeachersEmpty = true;
// } else {
//   isTeachersEmpty = false;
// }


// console.log(isTeachersEmpty);

// console.log(teachers.length);

// 8 === 0