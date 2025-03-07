// console.log('Objects');



// const students = ['Ale', 'Mattia', 'David', 'Giorgia'];


// const person = ['Gaetano', 'Frascolla', 42, 180, true, false, 'pizza'];

/*

Array

[
  0: 'Gaetano',
  1: 'Frascolla,
]


Object VS BAD

[
  'nome': 'Gaetano',
  'cognome': 'Frascolla
]

Object Good

{
nome: 'Gaetano',
cognome: 'Frascolla'
}


*/
//variabile che contiene oggetto letterale Gaetano
const person = {

  cognome: 'Frascolla',
  "age": 25,
  nome: 'Gaetano',
  animals: true,
  friends: ['Marco', 'Paolo', 'Lucas'],
  address: {
    street: 'Via delle rose',
    number: 52,
    city: 'Vattelapesca',
    region: 'Ciao'
  },
  "current-age": 42,
  ombrello: false,


}

console.log('prova');
// console.log(person.length);

// for (let i = 0; i < person.length; i++) {
//   console.log('ciao');
//   console.log(person[i]);
// }

// console.log(Object.values(person));

//['cognome', 'nome', 'animals']
// for (let i = 0; i < Object.keys(person).length; i++) {

//   const currentKey = Object.keys(person)[i];
//   console.log(currentKey);

//   //stampo i valori

//   //person['cognome']
//   //person['nome']
//   //person['age']
//   console.log(person[currentKey]);


// }

//for...in
for (let key in person) {
  // console.log(key);
  //nome, cognome, age, 
  // console.log(person[key]);

  const result = `${key}: ${person[key]}`;
  console.log(result);


}










/*
input nome
input cognome
input email

form.addEventListener('submit', function(){

  const person = {
    nome: valoreDiInputNome,
    cognome:
  }


})

*/








// const personArray = ['Gaetano', 'Frascolla'];




// console.log(person.cognome);
// // console.log(person.current - age);

// const chiaveCheVuoiStampare = 'current-age';

// console.log(person.chiaveCheVuoiStampare);
// console.log(person[chiaveCheVuoiStampare]);



//adesso aggiungi ombrello a gaetano
// person.ombrello = true;
// person['ombrello'] = false;

// console.log(person.cognome);
// person.friends.push('Marco');
// console.log(person);

// console.log(person.friends.length);

// for (let i = 0; i < person.friends.length; i++) {

//   const currentFriend = person.friends[i];

//   console.log(currentFriend);

// }




// console.log(personArray);


// const person1 = {
//   name: 'Andrea',
//   surname: 'Cognome'
// }

// const person2 = {
//   name: 'Fabio',
//   surname: 'Cognome'
// }

// const person3 = {
//   name: 'Angela',
//   surname: 'Cognome'
// }




// const students = [
//   {
//     name: 'Andrea',
//     surname: 'Cognome'
//   },
//   {
//     name: 'Fabio',
//     surname: 'Cognome'
//   }, {
//     name: 'Angela',
//     surname: 'Cognome'
//   }
// ]

// console.log(students);










const students = [
  [['Gaetano', 'Frascolla'], ['David', 'Bassani'], ['Alberto', 'Cadorin']],
  [['Simone', 'Burrai'], ['Valerio', 'Quintilio'], ['Andrea', 'Catapano']],

]

console.log(students[1][1][1].toUpperCase()); //=> stringa che vale Quintilio
// step
// students[1] = [['Simone', 'Burrai'], ['Valerio', 'Quintilio'], ['Andrea', 'Catapano']]

// students[1][1] = ['Valerio', 'Quintilio']

// students[1][1][1] = Quintilio


const azienda = {
  fondatori: [
    // {
    //   nome: 'Gaetano',
    //   cognome: 'Frascolla'
    // },
    // {
    //   nome: 'Willy', //<=====risultato
    //   cognome: 'Mariino'
    // },
    // ['Gaetano', 'frascolla'],
    // ['Willy', 'Mariino']
  ]
}

azienda.fondatori[1][0]

// console.log(azienda[0][1][0]);

// console.log(azienda[fondatori][nome][1]);

// console.log(azienda.fondatori[0][1]);

// console.log(azienda);
// console.log(azienda.fondatori);
// console.log(azienda['fondatori']);

console.log(azienda.fondatori[1].nome)