console.log('Ciao Gaetano');

/*
Inseriamo in pagina l’immagine della lampadina spenta che trovate in allegato e accanto un bottone con la scritta “Accendi”.
Al click del bottone, la lampadina dovrà accendersi (dovremo quindi utilizzare l’immagine della lampadina accesa, sempre in allegato)

*/

//immagine
const bulbElement = document.getElementById('bulb');
console.log(bulbElement);

//bottone
const buttonElement = document.getElementById('switch');
console.log(buttonElement);

buttonElement.addEventListener('click', function () {
  // console.log('ho cliccato sul bottone');

  // console.log(bulbElement.src);
  // console.log(bulbElement.id);
  // console.log(bulbElement.alt);

  bulbElement.src = 'img/yellow_lamp.png';
  bulbElement.alt = 'Lampadina accesa';


});