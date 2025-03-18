console.log('sono main js');
//al click su qualunque immagine o card in pagina
//attivo overlay


// console.log(document.querySelector('body'));
// console.log(document.body);
/*

axios(uri)
  .then(response => {
    
    //creo html;
    //.addEventListener
    //querySelectorAll
    
    
    })




*/





//accedi a tutti gli elementi con la classe .card in pagina => crea una nodeList di elementi .card
const cardsElement = document.querySelectorAll('.card');
//accedi all'element con la classe .overlay => ottiene SOLO il primo elemento in pagina
const overlayElement = document.querySelector('.overlay');


//[img1, img2, img3]

//iteriamo su cardsElement
cardsElement.forEach((element, index, array) => {

  //per ogni elemento di cardElement (card) aggiungo un listener click e scateno una funzione
  element.addEventListener('click', function (event) {


    //seleziona l'immagine all'interno dell'elemento cliccato
    const currentImg = element.querySelector('img');
    //seleziona la descrizione all'interno dell'elemento cliccato
    const currentDescription = element.querySelector('p');

    //seleziono immagine all'interno di overlay
    const overlayImg = overlayElement.querySelector('img');
    //seleziono descrizione all'interno di overlay
    const overlayDescription = overlayElement.querySelector('p');

    //imposto attributo src dell'immagine in overlay con src di immagine cliccata
    overlayImg.src = currentImg.src;
    //imposto attributo alt dell'immagine in overlay con alt di immagine cliccata
    overlayImg.alt = currentImg.alt;

    //imposto il contenuto (inner) della descrizione in overlay con contenuto (inner) del immagine / paragrafo cliccata
    overlayDescription.innerText = currentDescription.textContent;

    //visualizzo overlay
    overlayElement.classList.remove('hidden');

    //disabilito scroll del body
    document.body.classList.add('overflow');


  })


})


//aggiungo listener al bottone dentro overlay
overlayElement.querySelector('button').addEventListener('click', function () {
  //nascondo overlay
  document.body.classList.remove('overflow');
  overlayElement.classList.add('hidden');

})









//al click sul botton in overlay: chiudo overlay




/*

div -> elemento che ha un eventListener
--- img
--- p

div.container-cards -> eventListener
--- card
--- card
--- card
--- card
--- card
--- card






*/

// document.getElementById('prova'); //id="prova";

// document.querySelector('#prova .pippo'); 

/*

<p id="ciao" class="pippo">
.... n elementi
<p id="prova" class="pippo">





*/