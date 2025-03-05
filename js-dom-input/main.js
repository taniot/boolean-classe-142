/*


      <a href="#" class="list-group-item list-group-item-action" aria-current="true">
        The current link item
      </a>
      <a href="#" class="list-group-item list-group-item-action">A second link item</a>
      <a href="#" class="list-group-item list-group-item-action">A third link item</a>
      <a href="#" class="list-group-item list-group-item-action">A fourth link item</a>
      <a class="list-group-item list-group-item-action disabled" aria-disabled="true">A disabled link item</a>

      */


const tasks = ['Fare la spesa', 'Studiare Js', 'Guardare e i meme di Linda e Angela', 'Bocciare Linda e Angela'];

const parentElement = document.querySelector('.list-group');


//creazione con createElement

const element = document.createDocumentFragment(); //elemento html in memoria

for (let i = 0; i < tasks.length; i++) {

  const task = tasks[i];
  console.log(task);

  const childElement = document.createElement('a');

  childElement.href = '#';
  childElement.classList.add('list-group-item', 'list-group-item-action');


  // childElement.innerText = task;
  // childElement.textContent = task;
  // childElement.innerHTML = task;
  childElement.append(task);
  // childElement.appendChild(task);
  console.log(childElement);

  element.appendChild(childElement);


}

console.log(element);
parentElement.append(element);



//creazione con innerHTML


// console.log(tasks);

// let items = '';

// for (let i = 0; i < tasks.length; i++) {

//   const task = tasks[i];
//   console.log(task);

//   // items = items + '<a href="#" class="list-group-item list-group-item-action" aria-current="true">The current link item</a>';

//   items = items + `<a href="#" class="list-group-item list-group-item-action" aria-current="true">${task}</a>`;



// }

// console.log(items);
// parentElement.innerHTML = items;


const newTaskElement = document.getElementById('new-task');
const newAgeElement = document.getElementById('new-age');
const sendTaskElement = document.getElementById('send-task');
const formElement = document.getElementById('my-form');



console.log(newTaskElement);
console.log(sendTaskElement);
console.log(formElement);
// console.log(newTaskElement.value);


// sendTaskElement.addEventListener('click', function (event) {

//   event.preventDefault();

//   console.log('ho cliccato sul bottone');

//   console.log(newTaskElement.value);


// })

formElement.addEventListener('submit', function (event) {

  event.preventDefault();

  console.log('il form è stato inviato');

  console.log(newTaskElement.value);

  const userKm = parseInt(newTaskElement.value);
  console.log(userKm);
  const userAge = parseInt(newAgeElement.value);
  console.log(userAge);


  //calcoli dello sconto e del prezzo



  console.log('il prezzo è risultato');





})