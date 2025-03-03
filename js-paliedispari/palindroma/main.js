console.log('palindromo');

/*
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma

//casi
'elle' => true
'emme' => true
'anna' => true
'Anna' => true -> false
'' => false
'a' => true
'aa' => true
'ab' => false
'aaa' => true



anna => inverso(anna) => palindromo

annna


*/

const userWord = 'Pippo';
console.log(userWord);
const isWordPalindrome = isPalindrome(userWord);

if (isWordPalindrome) {
  console.log('sono una parola palindroma');
} else {
  console.log('NON sono una parola palindroma');
}





//determina se una parola è palindroma
// function isPalindrome(input) {

//   if (input.length === 1) {
//     return true;
//   }

//   //faccio il reverse della parola e se confrontata con la parola iniziale è uguale è palindromo
//   //Anna => anna
//   const word = input.toLowerCase();

//   const reverse = word.split('').reverse().join('');
//   //gae => eag

//   // if(word === reverse){
//   //   return true;
//   // } else {
//   //   return false;
//   // }

//   return word === reverse;
// }


// function isPalindrome(input) {

//   const word = input.toLowerCase();
//   let reverse = '';
//   //stringa vuota

//   //gae
//   for (let i = word.length - 1; i >= 0; i--) {
//     reverse = reverse + word[i]; //eag
//   }

//   return word === reverse;;
// }


// function isPalindrome(input) {

//   const word = input.toLowerCase();

//   for (let i = 0; i < word.length; i++) {

//     const start = word[i]; //0
//     const end = word[word.length - 1 - i];
//     if (start !== end) {
//       return false;
//     }

//   }

//   return true;
// }

function isPalindrome(input) {
  const word = input.toLowerCase();

  let start = 0;
  let end = word.length - 1;

  while (0 < end) {

    if (word[start] !== word[end]) {
      return false;
    }

    start++;
    end--;

  }

  return true;
}














