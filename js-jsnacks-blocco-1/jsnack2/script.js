/*
L’utente inserisce due parole in successione, con due prompt.
Il software stampa prima la parola più corta, poi la parola più lunga.
*/

//chiedo la prima parola
const firstWord = prompt('Inserisci la prima parola');
//chiedo la seconda parola
const secondWord = prompt('Inserisci la seconda parola');

//determino la lunghezza della prima parola
const firstWordLength = firstWord.length;

//determino la lunghezza della seconda parola
const secondWordLength = secondWord.length;


if (firstWordLength < secondWordLength) {
  console.log(`La parola più corta è ${firstWord}`);
  console.log(`La parola più lunga è ${secondWord}`);

} else if (secondWordLength < firstWordLength) {
  console.log(`La parola più corta è ${secondWord}`);
  console.log(`La parola più lunga è ${firstWord}`);

} else {
  console.log('Le parole hanno la stessa lunghezza');
}

