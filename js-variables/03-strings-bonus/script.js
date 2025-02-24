const city = 'New York'; // NON MODIFICARE QUESTA RIGA
const cityName = 'City'; // NON MODIFICARE QUESTA RIGA
const shoppingList = 'mele, banane, arance, uva'; // NON MODIFICARE QUESTA RIGA
const hello = 'hello'; // NON MODIFICARE QUESTA RIGA

// 1. Cerca un carattere in una stringa
// Stampa l'INDICE con cui viene trovato
// il carattere Y nella variabile city
const cityIndex = city.indexOf('B');
let martino = city.search('Y');
console.log(cityIndex); // Output: 4
console.log(martino);
// 2. Sottostringhe 
// Stampa la sottostringa "York" dalla variabile city
const citySubstring = city.substring(4);
let michele = city.slice(4);
let marco = city.substring(4);
console.log(citySubstring); // Output: "York"
console.log(michele);
console.log(marco);

// 3. Sostituzione
// Sostituisci 'York' con 'Delhi'
const cityReplaced = city.replace("York", "Delhi");
let enrico = city.substring(0,3) + ' Delhi';
console.log(cityReplaced); // Output:  "New Delhi"
console.log(enrico);

// 4. Template literal
// Concatena due stringhe usando la sintassi `${var}`
// e rendi cityNameConcat uguale a 'New York City'
const cityNameConcat = `${city} ${cityName}`;
console.log(cityNameConcat); // Output: "New York City"

// 5. Tutto in maiscolo
// Trasforma tutto in maiscuolo la stringa della variabile hello
const upperCaseHello = hello.toUpperCase();
console.log(upperCaseHello); // Output: "HELLO"



