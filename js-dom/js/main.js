// /* primi passi con il dom */

// //selezione di un elemento per id
// const element = document.getElementById('saluto');
// console.log(element);


// //CLASSNAME
// console.log(element.className);
// element.className = 'red';
// element.className = `${element.className} prova`;
// element.className += ' prova';

// //CLASSLIST
// element.classList.add('marco', 'prova', 'ciao');
// // element.classList.replace('prova', 'banana');


// console.log(element.classList);

// //STYLE

// console.log(element.style);
// element.style.backgroundColor = 'yellow';
// element.style.fontSize = '25px';


// //Sostituire o configurare attributi
// //selezione di un elemento per selettore css
// const memeElement = document.querySelector('.meme');
// console.log(memeElement);
// // memeElement.src = '../img/image.png';
// // memeElement.alt = 'Meme di Gaetano documentazione';

// //innerHTML o append

// // console.log(element.innerHTML);

// // element.innerHTML += '<div class="red">ciao sono nel div e sono rosso</div>';
// // //oppure
// // element.append('Elemento aggiunto con append');
// // element.prepend('Elemento aggiunto con prepend');


// // //AddEventListener
// // const elementClick = document.getElementById('test-click');
// // console.log(elementClick);

// // elementClick.addEventListener('click', function () {
// //   console.log('ho cliccato sul div');

// //   elementClick.append('Ciao Willy');
// //   elementClick.innerHTML += '<h2>Ciao a tutti</h2>';

// // })

// // elementClick.addEventListener('mouseenter', function () {
// //   console.log('sono entrato su elemento');

// //   elementClick.classList.add('red');
// //   elementClick.style.fontSize = '100px';


// // })

// // elementClick.addEventListener('mouseleave', function () {
// //   console.log('sono uscito da elemento');
// //   elementClick.classList.remove('red');
// // })

// // const demoElement = document.getElementById('demo');
// // console.log(demoElement);


// // demoElement.addEventListener('click', function () {
// //   console.log('ciao rimuovo');
// // })


// // //condizione specifica
// // demoElement.removeEventListener('click', function () {
// //   console.log('ciao rimuovo');
// // })


// // demoElement.addEventListener('click', ciao);
// // // demoElement.removeEventListener('click', ciao);

// // function ciao(input) { //input => parametro => undefined => qualcosa
// //   console.log('ciaoooooo');
// //   console.log(input); //qualcosa
// // }


// // demoElement.addEventListener('click', function () {
// //   ciao('qualcosa'); //argomento => 'qualcosa';
// // })


const students = ['Fabio', 'Angela', 'Carlo', 'Simone', 'Marco', 'David'];
console.log(students);

const listElement = document.querySelector('ul.list-group');
console.log(listElement);

let items = ''; //questo è quello che voglio inserire nell'html;

//iterazione su array students
for (let i = 0; i < students.length; i++) {

  //prendo lo studente corrente => 1 fabio, 2 angela, 3 carlo
  const student = students[i];
  items = items + `<li class="list-group-item">${student}</li>`;

}


//Create element

listElement.innerHTML = items; //5




const newItems = document.createDocumentFragment();

// <template>

// </template>


for (let i = 0; i < students.length; i++) {

  //prendo lo studente
  const student = students[i];
  //creo elemento html => li
  const liElement = document.createElement('li');
  //li => <li>Fabio</li>
  //liElement.innerText = student;
  //liElement.innerHTML = student;
  //aggiungo classe css
  liElement.classList.add('list-group-item');
  //aggiungo elemento testo student a elemento html
  liElement.append(student);
  // liElement.textContent = student;

  liElement.addEventListener('click', function () {
    console.log(student);
  })


  console.log(liElement); //'<li></li>'

  // listElement.innerHTML += liElement;
  newItems.appendChild(liElement);

  /*

<template>
<li>Fabio</>
<li>Angela</li>
</template>

  */

}

listElement.append(newItems);
// listElement.innerHTML = newItems;

console.log(newItems);


//stringa che contiene html
'<li>Prova</li>'
//innerHTML

//elemento html
document.createElement('li');
//append, appendChild






