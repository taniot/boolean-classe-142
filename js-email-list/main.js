console.log('ciao');

/*
Descrizione
Attraverso l'apposita API di Boolean
https://flynn.boolean.careers/exercises/api/random/mail
generare 10 indirizzi email e stamparli in pagina all'interno di una lista.

Bonus
- Abbellire con CSS o Bootstrap
- Inserire un bottone che al click faccia il fetch altre 10 mail (sostituendo le altre)


*/

/*

APPLICATION
PROGRAMMING
INTERFACE

API DOM
createElement, innerHTML, textContent

API WINDOW
addEventListener, fetch

AJAX

*/

const emailsElement = document.getElementById('emails');
const generateEmailsElement = document.getElementById('generate-emails');
const uri = 'https://flynn.boolean.careers/exercises/api/random/mail';
const emailsNumber = 10;



//FETCH
// fetch(uri) //promessa => promise
//   .then(fabio => {
//     return fabio.json(); //promessa => promise
//   })
//   .then(melo => {
//     console.log(melo);
//   });





// let success;
// let response;
// emailsElement.innerHTML = '';
// //AXIOS
// for (let i = 0; i < 10; i++) {

//   axios.get(uri)
//     .then(risultato => {
//       const { response: email } = risultato.data;
//       emailsElement.innerHTML += `<li>${email}</li>`;
//     });

// }



generateEmails();
generateEmailsElement.addEventListener('click', generateEmails)

function generateEmails() {
  emailsElement.innerHTML = '';
  for (let i = 0; i < emailsNumber; i++) {

    axios.get(uri)
      .then(risultato => {
        const { response: email } = risultato.data;
        emailsElement.innerHTML += `<li>${email}</li>`;
      });
  }
}






// console.log(axios);
// const axios = 'sono il servizio';











// const response = {
//   data: {
//     response: 'me@gmail.com'
//   }
// }

//console.log(response);

/*

{
  data: {
    response: 'me@gmail.com'
  }
}

*/

//console.log(response.data)

/*

 {
    response: 'me@gmail.com'
  }

*/

//console.log(response.data.response)

/*
'me@gmail.com'
*/




