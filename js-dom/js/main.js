/* primi passi con il dom */

//selezione di un elemento per id
const element = document.getElementById('saluto');
console.log(element);


//CLASSNAME
console.log(element.className);
element.className = 'red';
element.className = `${element.className} prova`;
element.className += ' prova';

//CLASSLIST
element.classList.add('marco', 'prova', 'ciao');
// element.classList.replace('prova', 'banana');


console.log(element.classList);

//STYLE

console.log(element.style);
element.style.backgroundColor = 'yellow';
element.style.fontSize = '25px';


//Sostituire o configurare attributi
//selezione di un elemento per selettore css
const memeElement = document.querySelector('.meme');
console.log(memeElement);
memeElement.src = '../img/image.png';
memeElement.alt = 'Meme di Gaetano documentazione';

//innerHTML o append

console.log(element.innerHTML);

element.innerHTML += '<div class="red">ciao sono nel div e sono rosso</div>';
//oppure
element.append('Elemento aggiunto con append');
element.prepend('Elemento aggiunto con prepend');


//AddEventListener
const elementClick = document.getElementById('test-click');
console.log(elementClick);

elementClick.addEventListener('click', function () {
  console.log('ho cliccato sul div');

  elementClick.append('Ciao Willy');
  elementClick.innerHTML += '<h2>Ciao a tutti</h2>';

})

elementClick.addEventListener('mouseenter', function () {
  console.log('sono entrato su elemento');

  elementClick.classList.add('red');
  elementClick.style.fontSize = '100px';


})

elementClick.addEventListener('mouseleave', function () {
  console.log('sono uscito da elemento');
  elementClick.classList.remove('red');
})
