// // console.log('Objects');



// // const students = ['Ale', 'Mattia', 'David', 'Giorgia'];


// // const person = ['Gaetano', 'Frascolla', 42, 180, true, false, 'pizza'];

// /*

// Array

// [
//   0: 'Gaetano',
//   1: 'Frascolla,
// ]


// Object VS BAD

// [
//   'nome': 'Gaetano',
//   'cognome': 'Frascolla
// ]

// Object Good

// {
// nome: 'Gaetano',
// cognome: 'Frascolla'
// }


// */
// //variabile che contiene oggetto letterale Gaetano
// const person = {

//   cognome: 'Frascolla',
//   "age": 25,
//   nome: 'Gaetano',
//   animals: true,
//   friends: ['Marco', 'Paolo', 'Lucas'],
//   address: {
//     street: 'Via delle rose',
//     number: 52,
//     city: 'Vattelapesca',
//     region: 'Ciao'
//   },
//   "current-age": 42,
//   ombrello: false,


// }

// console.log('prova');
// // console.log(person.length);

// // for (let i = 0; i < person.length; i++) {
// //   console.log('ciao');
// //   console.log(person[i]);
// // }

// // console.log(Object.values(person));

// //['cognome', 'nome', 'animals']
// // for (let i = 0; i < Object.keys(person).length; i++) {

// //   const currentKey = Object.keys(person)[i];
// //   console.log(currentKey);

// //   //stampo i valori

// //   //person['cognome']
// //   //person['nome']
// //   //person['age']
// //   console.log(person[currentKey]);


// // }

// //for...in
// for (let key in person) {
//   // console.log(key);
//   //nome, cognome, age, 
//   // console.log(person[key]);

//   const result = `${key}: ${person[key]}`;
//   console.log(result);


// }










// /*
// input nome
// input cognome
// input email

// form.addEventListener('submit', function(){

//   const person = {
//     nome: valoreDiInputNome,
//     cognome:
//   }


// })

// */








// // const personArray = ['Gaetano', 'Frascolla'];




// // console.log(person.cognome);
// // // console.log(person.current - age);

// // const chiaveCheVuoiStampare = 'current-age';

// // console.log(person.chiaveCheVuoiStampare);
// // console.log(person[chiaveCheVuoiStampare]);



// //adesso aggiungi ombrello a gaetano
// // person.ombrello = true;
// // person['ombrello'] = false;

// // console.log(person.cognome);
// // person.friends.push('Marco');
// // console.log(person);

// // console.log(person.friends.length);

// // for (let i = 0; i < person.friends.length; i++) {

// //   const currentFriend = person.friends[i];

// //   console.log(currentFriend);

// // }




// // console.log(personArray);


// // const person1 = {
// //   name: 'Andrea',
// //   surname: 'Cognome'
// // }

// // const person2 = {
// //   name: 'Fabio',
// //   surname: 'Cognome'
// // }

// // const person3 = {
// //   name: 'Angela',
// //   surname: 'Cognome'
// // }




// // const students = [
// //   {
// //     name: 'Andrea',
// //     surname: 'Cognome'
// //   },
// //   {
// //     name: 'Fabio',
// //     surname: 'Cognome'
// //   }, {
// //     name: 'Angela',
// //     surname: 'Cognome'
// //   }
// // ]

// // console.log(students);










// const students = [
//   [['Gaetano', 'Frascolla'], ['David', 'Bassani'], ['Alberto', 'Cadorin']],
//   [['Simone', 'Burrai'], ['Valerio', 'Quintilio'], ['Andrea', 'Catapano']],

// ]

// //console.log(students[1][1][1].toUpperCase()); //=> stringa che vale Quintilio
// // step
// // students[1] = [['Simone', 'Burrai'], ['Valerio', 'Quintilio'], ['Andrea', 'Catapano']]

// // students[1][1] = ['Valerio', 'Quintilio']

// // students[1][1][1] = Quintilio


// const azienda = {
//   fondatori: [
//     // {
//     //   nome: 'Gaetano',
//     //   cognome: 'Frascolla'
//     // },
//     // {
//     //   nome: 'Willy', //<=====risultato
//     //   cognome: 'Mariino'
//     // },
//     // ['Gaetano', 'frascolla'],
//     // ['Willy', 'Mariino']
//   ]
// }

// // azienda.fondatori[1][0]

// // console.log(azienda[0][1][0]);

// // console.log(azienda[fondatori][nome][1]);

// // console.log(azienda.fondatori[0][1]);

// // console.log(azienda);
// // console.log(azienda.fondatori);
// // console.log(azienda['fondatori']);

// // console.log(azienda.fondatori[1].nome)






// //creazione di un oggetto
// const newObject = {};


// const secondNewObject = {
//   //chiavi: valori
//   name: 'Gaetano', //proprietà = chiave:valore //chiave nome con valore stringa Gaetano
//   surname: 'Frascolla',
//   age: 42,
//   isTeacher: true,
//   friends: [
//     {
//       nome: 'Willy'
//     },
//     {
//       nome: 'Angela'
//     },
//     { nome: 'Alberto' }

//   ],
//   address: {
//     street: 'Via delle Vie',
//     number: 10,
//     city: 'Siviglia'
//   },
//   // newProperty: 'Prova nuova proprietà'; riga 288 fa proprio questa operazione
//   // isTeacher: false,
// }



// secondNewObject.newProperty = 'Prova nuova proprietà';
// secondNewObject.isTeacher = false;

// // console.log(secondNewObject);


// /*

// Object.keys(secondNewObject) => ['name', 'surname', 'age', ...];
// Object.values(secondNewObject) => ['Gaetano', 'Frascolla', 42, ...];



// */

// //for...in

// // for (let key in secondNewObject) {
// //   console.log(key);
// //   console.log(secondNewObject[key]);
// // }


// const firstName = 'Gaetano';
// const lastName = 'Frascolla';
// const age = 42;


// // const demo = 'isTeacher';

// const person = {
//   firstName, //firstName => chiave / valore di firstName => valore
//   lastName,
//   age,
//   // [demo]: true

// }

// const newKey = prompt('aggiungi una chiave a oggetto');
// const newValue = prompt('aggiungi un valore alla chiave precedentemente aggiunta');

// person[newKey] = newValue;


// person.isTeacher = true;
// person[demo] = true;





// console.log(person);


const student = {
  name: 'Paolo',
  age: 30,
  email: 'paolo@email.it'
};

//attribuzione verbosa tradizionale di valori oggetto a variabili
// const name = student.name; //student['name'];
// const age = student.age;
// const email = student.email;

//destructuring 
const { email, age, name } = student;

// console.log(name);
console.log(age);
console.log(email);
console.log(name)



// function sum(num1, num2, num3) {
//   return num1 + num2 + num3;
// }

// sum(5, 10, 20); //=>15

function sum(num1, num2, ...num) {
  console.log(num1);
  console.log(num2);
  console.log(num);

  // let sum = 0;
  // for (let i = 0; i < num.length; i++) {
  //   sum += num[i]; //10 => 50 => 42
  // }

  // return sum;


}

console.log(sum(10, 15, 2, 5, 7, 28, 9));




const person1 = {
  nome: 'Marco',
  cognome: 'Rocco',
  prova: true
}

// const person1new = {
//   nome: person1.nome, //marco
//   cognome: person1.cognome,
//   age: 18
// }

const person1new = {
  ...person1, //dammi tutti i chiavi/valori dell'oggetto person1
  age: 18
}



console.log(person1);
console.log(person1new);


const obj1 = {
  antipasto: 'valore1',
  primo: 'valore2'
  marco: true
}

const obj2 = {
  secondo: 'valore3',
  dessert: 'valore4'
}

// const menu = {
//   key1: obj1.key1,
//   key2: obj1.key2,
//   key3: obj2.key3,
//   key4: obj2.key4,
// }

const menu = { ...obj1, ...obj2 };





