

// console.log(process.argv);

const myArray = process.argv.map(el => +el);

let num1 = myArray[2];
let num2 = myArray[3];


console.log(num1 + num2);