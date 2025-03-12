console.log('Snack 1')

/*
Snack 1
Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare a schermo la bici con peso minore.
*/

const bikes = [

  {
    nome: 'Bike 1',
    peso: 7 //peso inferiore: 7
  },
  {
    nome: 'Bike wow',
    peso: 5 //peso inferiore 5
  },
  {
    nome: 'Bike 2',
    peso: 14 //peso inferiore: 7
  },
  {
    nome: 'Bike 4',
    peso: 20 //peso inferiore 5
  },
  {
    nome: 'Bike 5',
    peso: 5 //peso inferiore: 7
  },
  // {
  //   nome: 'Bike 6',
  //   peso: 2 //peso inferiore: 7
  // },

];
// console.log(bikes);

// [{},{},{},{}]

// console.log(bikes[2]);

//for...in che usiamo SOLO sugli oggetti
//for...of che usiamo SUGLI ARRAY
// for(let key in bikes){

// }


// //PRENDO LA BICI CON IL PESO INFERIORE - SOLUZIONE 1
// //prendo il peso minore possibile (prima bici)
// let minWeight = bikes[0]['peso']; //undefined //1000
// //salvo la prima bici come bici con peso minore
// let minBike = bikes[0];

// //itero sulle bici partendo dalla seconda
// for (let i = 1; i < bikes.length; i++) {
//   //prendo la bici corrente
//   const currentBike = bikes[i];

//   //se il peso inferiore è maggiore di quello della bici corrente
//   if (minWeight >= currentBike.peso) {
//     //il peso inferiore diventa quello della bici corrente
//     minWeight = currentBike.peso;
//     //la bici corrente diventa quella con il peso inferiore
//     minBike = currentBike;
//   }


// }

// console.log(minWeight);
// console.log(minBike);



//PRENDO LA BICI CON IL PESO INFERIORE - SOLUZIONE 2
//prendo il peso minore possibile (prima bici)
// let minWeight = Number.MAX_VALUE; //undefined //1000
// //salvo la prima bici come bici con peso minore
// let minBike;

// //itero sulle bici partendo dalla seconda
// for (let i = 0; i < bikes.length; i++) {
//   //prendo la bici corrente
//   const currentBike = bikes[i];

//   //se il peso inferiore è maggiore di quello della bici corrente
//   if (minWeight >= currentBike.peso) {
//     //il peso inferiore diventa quello della bici corrente
//     minWeight = currentBike.peso; //7
//     //la bici corrente diventa quella con il peso inferiore
//     minBike = currentBike; //{peso: 7}
//   }


// }

// if (minBike) {
//   //stampo la bici con peso inferiore
//   console.log(minWeight);
//   console.log(minBike);
// } else {
//   console.log('Non ci sono biciclette');
// }



// Math.random() => numero random
// Number.MAX_VALUE => un valore moooooooolto grande

//PRENDO LA BICI CON IL PESO INFERIORE - SOLUZIONE 3
//prendo il peso minore possibile (prima bici)
let minWeight = Number.MAX_VALUE; //undefined //1000
//salvo la prima bici come bici con peso minore
let result = [];
//itero sulle bici partendo dalla seconda
for (let i = 0; i < bikes.length; i++) {
  //prendo la bici corrente
  const currentBike = bikes[i];

  //se il peso inferiore è maggiore di quello della bici corrente
  // if (minWeight >= currentBike.peso) {
  //   //il peso inferiore diventa quello della bici corrente
  //   minWeight = currentBike.peso; //7

  //   //perchè non posso pushare la bici piu leggera qui

  //   result.push(currentBike);

  // }
  //1000 > 7 
  if (minWeight >= currentBike.peso) {
    minWeight = currentBike.peso // 7
    result = [currentBike]; //peso 2
  }
  // } else if (minWeight === currentBike.peso) {
  //   result.push(currentBike);
  // }




}

// console.log(minWeight);

// for (let i = 0; i < bikes.length; i++) {

//   const currentBike = bikes[i];

//   // console.log(currentBike);

//   if (currentBike.peso === minWeight) {
//     result.push(currentBike);
//   }

// }



if (result.length) {
  console.log(result);
} else {
  console.log('Non ci sono biciclette');
}






//prendo tutta la prima bici
/*
{
nome: 'bici 1',
peso: 5
}

*/
let heaviestBike = bikes[0];

for (let [i] in bikes) {
  if (bikes[i].peso > heaviestBike.peso) {
    heaviestBike = bikes[i];
  }

}
console.log("la bici più pesante è:", heaviestBike.marca, "con un peso di kg", heaviestBike.peso);

const bikeWeight = document.getElementById("bike-weight")

bikeWeight.textContent = "la bici più pesante è" + " " + heaviestBike.marca + " " + "con un peso di kg" + " " + heaviestBike.peso