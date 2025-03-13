// const students = ['Paolo', 'Giulia', 'Marco'];

// for (let i = 0; i < students.length; i++) {
//   const element = students[i];
//   console.log(element);
// }

// console.log('---');

// students.forEach(stampaElementi);

// function stampaElementi(element) {

//   console.log(element);

// }

// students.forEach((element, _, array) => {

//   console.log(element);
//   console.log(array);

// });

// function stampaElementi(element) {
//   console.log(element);
// }


// const cats = [
//   { name: 'Jerry', color: 'Gray' },
//   { name: 'Felix', color: 'Black and White' },
//   { name: 'Garfield', color: 'Orange' },
// ];

// for (let i = 0; i < cats.length; i++) {
//   const element = cats[i];

//   console.log(`${element.name}'s color is ${element.color}`);
// }

// console.log('---');


// cats.forEach((element) => {
//   console.log(`${element['name']}'s color is ${element.color}`);
// });

const numbers = [1, 2, 3, 4, 5];

//non restituisce niente
const resultForeach = numbers.forEach(element => {
  console.log(element);
})

console.log(numbers);
//ci restituisce un NUOVO array della stessa lunghezza dell'array di partenza
const resultMap = numbers.map((element, index, array) => {
  // console.log(element);
  // console.log(index);
  // console.log(array);

  return element + 10;
})

console.log('---');

console.log(resultForeach);
console.log(resultMap);




const cats = [
  { name: 'Jerry', color: 'Gray' },
  { name: 'Felix', color: 'Black and White' },
  { name: 'Garfield', color: 'Orange' },
];
// let listaColori = [];
//ciclo foreach - stampare tutti i colori dei gatti
cats.forEach((element) => {
  // console.log(`${element['color']}`);
  console.log(element.color);

  return element.color;
  // listaColori.push(element.color);
})
// console.log(listaColori);


// const result = [];




// return result;


//map: creare un nuovo array che contiene solo i colori dei gatti
const colorCats = cats.map((cat) => {
  return cat.color;
})

console.log(colorCats);

//map: creare un nuovo array che contiene solo i nomi dei gatti
const nameCats = cats.map((cat) => {
  return cat.name;
})

console.log(nameCats);

//map: creare un nuovo array che contiene oggetti con il nome del gatto e un numero random per l'età del gatto
const newCats = cats.map((cat) => {

  const age = Math.floor(Math.random() * 10) + 1;

  return {
    name: cat.name,
    age
  }

})

console.log(newCats);

console.log('---- RETURN IN FOREACH ----')

cats.forEach((element, index) => {
  // console.log(`${element['color']}`);

  // throw new Error('ahia');

  console.log(element.color);


  // listaColori.push(element.color);
});

console.log('---- FILTER ----')

// const numeri = [1, 2, 3, 4, 5];
// const pari = numeri.filter((element, index, array) => {
//   // console.log(element);
//   // console.log(index);
//   // console.log(array);

//   // if(element % 2 === 0){
//   //   return true;
//   // }

//   return element % 2 === 0; //true o false




// });

// const pari = numeri.filter((element) => {
//   return element % 2 === 0
// });



// console.log(pari); // [2, 4]


const catsFilter = [
  {
    name: 'Jerry', color: 'Gray', age: 7,
    characteristics: {
      food: 'fish',
      razza: 'nomerazza',
      qi: '180'
    }
  },
  {
    name: 'Felix', color: 'Black and White', age: 2,
    characteristics: {
      food: 'fish',
      razza: 'nomerazza',
      qi: '180'
    }
  },
  {
    name: 'Garfield', color: 'Orange', age: 10,
    characteristics: {
      food: 'fish',
      razza: 'nomerazza',
      qi: '180'
    }
  },
];


//restituisci un nuovo array che contiene solo i gatti con età superiore a 5 anni

const result = [];

for (let i = 0; i < catsFilter.length; i++) {

  const currentCat = catsFilter[i];

  if (currentCat.age > 5) {
    result.push(currentCat);
  }

}

console.log(result);


const oldCats = catsFilter.filter(cat => cat.age > 5);

console.log(oldCats);


console.log('---- FIND ----')

const numeri = [1, 2, 3, 4, 5];
const primoNumeroPari = numeri.find((element, index, array) => element % 2 === 0);
console.log(primoNumeroPari); // 2






