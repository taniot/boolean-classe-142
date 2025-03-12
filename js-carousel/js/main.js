
/* 
struttura dati di partenza: array di oggetti immagine

proprietà dell'oggetto
{
img
title
description
}

*/
const sliderElements = [
  {
    img: '01.jpg',
    title: 'Titolo',
    description: 'Descrizione'
  },
  {
    img: '02.jpg',
    title: 'Titolo',
    description: 'Descrizione'
  },
  {
    img: '03.jpg',
    title: 'Titolo',
    description: 'Descrizione'
  },
  {
    img: '04.jpg',
    title: 'Ballerine di Flamenco in Piazza di Spagna',
    description: 'Descrizione'
  },
];

/* creazioni elementi */
/* todo: verificare al click se modificare gestione innerHTML */

const sliderContainerElement = document.querySelector('.slider-container');
let currentIndex = 0; //navigazione

//genero html
renderHTML(sliderContainerElement, sliderElements); //elemento html  <div class="slider-container"></div> - array di oggetti immagine

//accedo e salvo in variabile gli elementi di navigazione
const prevElement = document.querySelector('.prev');
const nextElement = document.querySelector('.next');

const slideElements = document.querySelectorAll('.slide');
console.log(slideElements);

//todo: interrompere incremento o ricominciare da capo
nextElement.addEventListener('click', function () {






  //v1: stoppo il carosello alla fine del nodeList

  // if (currentIndex >= slideElements.length - 1) {
  //   return;
  // }

  // slideElements[currentIndex].classList.remove('active');
  // currentIndex++;
  // slideElements[currentIndex].classList.add('active');


  //v2: carosello INFINITO


  // //Currentindex = 3
  // slideElements[currentIndex].classList.remove('active');

  // if (currentIndex >= slideElements.length - 1) {
  //   currentIndex = -1;
  // }


  // currentIndex++;
  // slideElements[currentIndex].classList.add('active');


  //Currentindex = 3


  // if (currentIndex >= slideElements.length - 1) {
  //   slideElements[slideElements.length - 1].classList.remove('active');
  //   currentIndex = 0;
  // }

  // slideElements[currentIndex].classList.remove('active');
  // currentIndex++;
  // slideElements[currentIndex].classList.add('active');





  if (currentIndex >= slideElements.length - 1) {
    slideElements[currentIndex].classList.remove('active');
    currentIndex = 0;
    slideElements[currentIndex].classList.add('active');
  } else {
    slideElements[currentIndex].classList.remove('active');
    currentIndex++;
    slideElements[currentIndex].classList.add('active');
  }






})

//todo: interrompere decremento o ricominciare da capo
prevElement.addEventListener('click', function () {

  slideElements[currentIndex].classList.remove('active');

  currentIndex--;

  slideElements[currentIndex].classList.add('active');

})


/**
 * renderHTML: funzione per il rendering dell'html
 *
 * @param {string} parent elemento al quale voglio appendere il risultato
 * @param {obj[]} elements elementi sulla base dei quali voglio creare html
 */

function renderHTML(parent, elements) {

  let items = parent.innerHTML;

  // const currentElement = elements[0];
  // items += createHTMLElement(currentElement, 0);

  // const currentElement = elements[1];
  // items += createHTMLElement(currentElement, 1);

  // const currentElement = elements[2];
  // items += createHTMLElement(currentElement, 2);

  // const currentElement = elements[3];
  // items += createHTMLElement(currentElement, 3);


  for (let i = 0; i < elements.length; i++) {

    const currentElement = elements[i];


    /*
    currentElement
      {
        img: '01.jpg',
        title: 'Titolo',
        description: 'Descrizione'
      },
      */

    items += createHTMLElement(currentElement, i);

    /*

    items = items + '<div>HTML</div>';



    */




  }
  //metterò nell'innerHTML del parent il risultato prodotto
  parent.innerHTML = items;

}


/**
 * createHTMLElement
 *
 * @param {*} obj 
 * @param {*} index 
 * @returns {string} 
 */
function createHTMLElement(obj, index) {


  let activeClass = '';

  if (index === currentIndex) {
    activeClass = 'active';
  }

  const element = `<figure class="slide ${activeClass}">
        <img src="img/${obj.img}" alt="${obj.title}">
        <figcaption class="caption">
          <h2>${obj.title}</h2>
          <p>${obj.description}</p>
        </figcaption>
      </figure>`;


  return element;



  //versione wow con createElement
}

