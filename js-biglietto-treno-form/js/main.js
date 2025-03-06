
/*

Descrizione:
Scrivere un programma che chieda all’utente:
- Il numero di chilometri da percorrere
- Età del passeggero

Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
- il prezzo del biglietto è definito in base ai km (0.21 € al km)
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65.


MILESTONE 1:
Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente due input e un bottone (non stilizzati), realizziamo le specifiche scritte sopra. La risposta finale (o output) sarà anch’essa da scrivere in console.

MILESTONE 2:
Solo una volta che il milestone 1 sarà completo e funzionante allora realizzeremo un form in pagina in cui l’utente potrà inserire i dati e visualizzare il calcolo finale con il prezzo.
Il recap dei dati e l'output del prezzo finale, andranno quindi stampati in pagina (il prezzo dovrà essere formattato con massimo due decimali, per indicare i centesimi sul prezzo). Questo richiederà un minimo di ricerca.
*/

//form di generazione
const generateTicket = document.getElementById('generate-ticket');
//campo km utente
const kmUserElement = document.getElementById('km-user');
//campo age utente
const ageUserElement = document.getElementById('age-user');


//info
//info km in pagina
const kmInfoElement = document.getElementById('km-info');
//info age in pagina
const ageInfoElement = document.getElementById('age-info');
//info price in pagina
const priceInfoElement = document.getElementById('price-info');
//info price in pagina
const discountInfoElement = document.getElementById('discount-info');



console.log(kmInfoElement);
console.log(ageInfoElement);
console.log(priceInfoElement);



generateTicket.addEventListener('submit', function (e) {

  e.preventDefault();

  // console.log(typeof kmUser.value);
  // console.log(typeof ageUser.value);

  //default info
  const ticketPriceKm = 0.21;
  const discountUnder = 20;
  const discounOver = 40;

  //input
  const kmUser = parseFloat(kmUserElement.value);
  const ageUser = parseInt(ageUserElement.value);

  let ticketPrice = ticketPriceKm * kmUser;

  // - il prezzo del biglietto è definito in base ai km(0.21 € al km)
  //   - va applicato uno sconto del 20 % per i minorenni
  //     - va applicato uno sconto del 40 % per gli over 65.

  let discount = 0;

  if (ageUser < 18) {

    discount = (ticketPrice * discountUnder) / 100;

  } else if (ageUser >= 65) {
    discount = (ticketPrice * discounOver) / 100;

  }

  ticketPrice = ticketPrice - discount;
  //ticketPrice -= discount;

  console.log(ticketPrice);


  const ticketPriceFormatted = ticketPrice.toFixed(2);


  console.log(`Il prezzo del biglietto è ${ticketPriceFormatted}€`);


  //output in pagina

  kmInfoElement.innerText = kmUser;
  ageInfoElement.innerText = ageUser;
  priceInfoElement.innerText = ticketPriceFormatted;
  discountInfoElement.innerText = `Sconto applicato: ${discount}`;



})




