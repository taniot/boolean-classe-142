# Calcolo biglietto del treno

Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.

Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:

il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). 


input -> computer -> output


### input
- il numero di km che passeggero vuole percorrere
- età del passeggero
- costo del biglietto al km 0.21€


### calcolo, algoritmo, programma

- il costo del biglietto senza sconti è 0.21 * numero di km inseriti dal passeggero

- lo sconto per le persone che hanno una età inferiore a 18 anni è 20%
- lo sconto per le persone che hanno una età superiore uguale a 65 anni è di 40%
- lo sconto per tutte le altre persone è uguale a 0
- calcolerò il valore dello sconto
- calcolerò il prezzo in funzione del valore dello sconto
- preparerò il prezzo in forma umana


### ouput
costo totale del biglietto


## pseudocodice

1) Chiedo all'utente i km che vuole percorrere e li salvo in una variabile e li trasformo in numero (userKm)
2) Chiedo all'utente l'età e la salvo in una variabile e la trasformo in numero (userAge)
3) Salvo in una variabile il prezzo di partenza del biglietto (priceKm)


- SE i valori forniti sono validi

4) Calcolo il prezzo di partenza (priceKm * userKm => ticketPrice)

5) Calcolo il valore dello sconto
- SE eta utente < 18
  - calcolo lo sconto al 20%
- ALTRIMENTI SE eta utente >= 65
  - calcolo lo sconto al 40%

6) Sottraggo dal prezzo di partenza il valore dello sconto (ticketPrice - sconto)

7) Formatto il prezzo (ticketPrice)

8) Stampo il prezzo (ticketPrice)

- ALTRIMENTI
 - Comunico all'utente che qualcosa è andato storto








