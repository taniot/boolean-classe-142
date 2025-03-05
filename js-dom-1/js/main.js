console.log('Ciao Gaetano');

/*
Inseriamo in pagina l’immagine della lampadina spenta che trovate in allegato e accanto un bottone con la scritta “Accendi”.
Al click del bottone, la lampadina dovrà accendersi (dovremo quindi utilizzare l’immagine della lampadina accesa, sempre in allegato)


Facciamo accendi e spegni:
- Al primo click la lampadina si accende e nel bottone compare la scritta "Spegni"
- Al secondo click la lampadina si spegne e nel bottone compare la scritta "Accendi"
- E così via...


*/

//immagine
// const bulbElement = document.getElementById('bulb');
// console.log(bulbElement);

// //bottone
// const buttonElement = document.getElementById('switch');
// console.log(buttonElement);

//Esercizio Default
// buttonElement.addEventListener('click', function () {
//   // console.log('ho cliccato sul bottone');

//   // console.log(bulbElement.src);
//   // console.log(bulbElement.id);
//   // console.log(bulbElement.alt);

//   bulbElement.src = 'img/yellow_lamp.png';
//   bulbElement.alt = 'Lampadina accesa';


// });

//Esercizio Bonus
// buttonElement.addEventListener('click', function () {
//   console.log('click sul bottone');

//   console.log(bulbElement.classList);
//   console.log(bulbElement.src);
//   console.log(bulbElement.alt);

//   //Se classlist contiene off accendo la lampadina
//   if (bulbElement.classList.contains('off')) {

//     console.log('lampadina accendo la lampadina');
//     // bulbElement.classList.remove('off');

//     bulbElement.src = 'img/yellow_lamp.png';
//     bulbElement.alt = 'Lampadina accesa';
//     buttonElement.innerText = 'Spegni';

//   } else {
//     //altrimenti spengo la lampadina

//     console.log('lampadina spengo la lampadina');
//     // bulbElement.classList.add('off');

//     bulbElement.src = 'img/white_lamp.png';
//     bulbElement.alt = 'Lampadina Spenta';
//     buttonElement.innerText = 'Accendi';
//   }

//   bulbElement.classList.toggle('off');



// })


//built-in javascript
// function addEventLister(event, fn) {

//   if (event === 'click') {
//     fn();
//   } else if (event === 'mouseenter') {
//     fn();
//   }


// }




// buttonElement.addEventListener('click', scriviQualcosa);


// function scriviQualcosa() {
//   console.log('sono una altra funzione');
// }


/***
 * programma
 */


document.getElementById('switch').addEventListener('click', accendiLampadina);


/****
 * FUNCTION
 */


function accendiLampadina() {
  console.log('accendi lampadina');
  const bulbElement = document.getElementById('bulb');
  console.log(bulbElement);

  //bottone
  const buttonElement = document.getElementById('switch');
  console.log(buttonElement);


  bulbElement.src = 'img/yellow_lamp.png';
  bulbElement.alt = 'Lampadina accesa';
  buttonElement.innerText = 'Spegni';

  buttonElement.removeEventListener('click', accendiLampadina);
  buttonElement.addEventListener('click', spegniLampadina);


}

function spegniLampadina() {

  const bulbElement = document.getElementById('bulb');
  console.log(bulbElement);

  //bottone
  const buttonElement = document.getElementById('switch');
  console.log(buttonElement);

  bulbElement.src = 'img/white_lamp.png';
  bulbElement.alt = 'Lampadina Spenta';
  buttonElement.innerText = 'Accendi';


  console.log('spegni lampadina');

  buttonElement.removeEventListener('click', spegniLampadina);
  buttonElement.addEventListener('click', accendiLampadina);
}



