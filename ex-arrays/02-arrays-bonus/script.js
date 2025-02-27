const teachers = [
  'Nathan',
  'Ed',
  'Fabio',
  'Phil',
  'Carlo',
  'Lewis',
  'Luca'
]; // NON MODIFICARE QUESTA VARIABILE

// 1. Inverti l'ordine degli insegnanti nell'array teachers
// e salva il risultato nella variabile reversedTeachers

// const reversedTeachers = teachers.reverse();
// console.log(teachers);
// console.log(reversedTeachers);

let reversedTeachers;

for (let i = teachers.length - 1; i >= 0; i--) {

  const currentTeacher = teachers[i];

  if (reversedTeachers === undefined) {
    reversedTeachers = [];
  }
  reversedTeachers.push(currentTeacher);


}
console.log(teachers);
console.log(reversedTeachers);


// 2. Crea un nuovo array chiamato 'longNames' che contenga solo gli insegnanti
// con un nome di lunghezza maggiore o uguale a 5 caratteri
// const longNames = teachers.filter(teacher => teacher.length >= 5);

const longNames = [];

// teachers[0].length >= 5
// teachers[1].length >= 5
// teachers[2].length >= 5
// teachers[3].length >= 5

//scorro gli elementi della lista
for (let i = 0; i < teachers.length; i++) {
  //prendo l'elemento corrente
  const currentTeacher = teachers[i]; //insegnante o nome
  //Verifico se l'elemento è lungo 5
  if (currentTeacher.length >= 5) {
    //SE è lungo 5
    //- lo copio nella nuova lista
    longNames.push(currentTeacher);
  }
}

console.log(longNames);


// console.log(longNames);

// 3. Rimuovi 'Ed' dall'array teachers

const cosaVuoiCancellare = 'Ed';
const elementToRemoveIndex = teachers.indexOf(cosaVuoiCancellare);
if (elementToRemoveIndex >= 0) {
  teachers.splice(elementToRemoveIndex, 1);
}
console.log(teachers);


// 4. Verifica se 'Fabio' è presente nell'array teachers
// e salva il risultato nella variabile isFabioPresent
// const isFabioPresent = teachers.includes('Fabio');
// console.log(isFabioPresent);

// const isFabioPresent = teachers.indexOf('Fabio') >= 0; //true - false
// console.log(isFabioPresent);


let isFabioPresent = false;

for (let i = 0; i < teachers.length; i++) {

  const currentTeacher = teachers[i];

  if (currentTeacher === 'Fabio') {
    isFabioPresent = true;
    break;
  }


}

console.log(isFabioPresent);




// 5. Unisci tutti gli insegnanti nell'array teachers in una stringa  separata da virgole e salvala nella variabile teachersString
// const teachersString = teachers.join(', ');

// console.log(teachersString);

let teachersString = ''; //stringa vuota

for (let i = 0; i < teachers.length; i++) {

  const currentTeacher = teachers[i];
  let element = ',';
  if (i === teachers.length - 1) {
    element = '.';
  }
  teachersString += currentTeacher + element;
}

console.log(teachersString);