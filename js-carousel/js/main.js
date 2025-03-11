
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


let currentIndex = 0;

renderHTML(sliderContainerElement, sliderElements);

const prevElement = document.querySelector('.prev');
const nextElement = document.querySelector('.next');

const slideElements = document.querySelectorAll('.slide');

nextElement.addEventListener('click', function () {

  console.log('next');

  slideElements[currentIndex].classList.remove('active');

  currentIndex++;

  slideElements[currentIndex].classList.add('active');

})

prevElement.addEventListener('click', function () {

  console.log('prev');

  slideElements[currentIndex].classList.remove('active');

  currentIndex--;

  slideElements[currentIndex].classList.add('active');

})




function renderHTML(parent, elements) {

  let items = parent.innerHTML;
  for (let i = 0; i < elements.length; i++) {

    const currentElement = elements[i];
    items += createHTMLElement(currentElement, i);
  }
  //metterò nell'innerHTML del parent il risultato prodotto
  parent.innerHTML = items;

}


function createHTMLElement(obj, index) {


  let activeClass = '';

  if (index === currentIndex) {
    activeClass = 'active';
  }


  return `<figure class="slide ${activeClass}">
        <img src="img/${obj.img}" alt="${obj.title}">
        <figcaption class="caption">
          <h2>${obj.title}</h2>
          <p>${obj.description}</p>
        </figcaption>
      </figure>`;

  //versione wow con createElement
}

