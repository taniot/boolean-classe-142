console.log('Email')

/*
Mail
Crea una lista di email di invitati ad una festa.
Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull’esito del controllo, utilizzando un ciclo for.
Non è consentito usare nessun metodo proprio degli array (come includes, per esempio).
Si può fare? Certo che si basta ragionare un po’.
Nota:
Non è necessario provvedere alla validazione delle email
*/

//Crea una lista di email di invitati ad una festa.
const emails = [

  'you@gmail.com',
  'them@gmail.com',
  'me@gmail.com',
];

// console.log(emails);


//Chiedi all’utente la sua email
const userEmail = prompt('Inserisci la tua email'); //qualunque dato fornito da utente è sempre stringa

// //controlla che sia nella lista di chi può accedere

const isEmailValid = userEmail !== '' && userEmail.indexOf('@') >= 0;

// console.log(isEmailValid);

// console.log(userEmail);




// for (let index = 0; index < emails.length; index++) {
//   //operazioni all'interno delle parentesi
//   if (emails[index] === userEmail) {
//     console.log(`Ho trovato la mail ${userEmail} in posizione ${index}`);
//     userFound = true;
//     break;
//   }

// }

let index = 0;

let userFound = false;
// while (index < emails.length && userFound === false) {
//   //il mio codice
//   if (emails[index] === userEmail) {
//     console.log(`Ho trovato la mail ${userEmail} in posizione ${index}`);
//     userFound = true;
//   }
//   index++;
// }

console.log(index);
console.log(userFound);


do {
  // console.log('sono alla prima iterazione');
  if (emails[index] === userEmail) {
    console.log(`Ho trovato la mail ${userEmail} in posizione ${index}`);
    userFound = true;
  }


  index++;
} while (index < emails.length && userFound === false);















