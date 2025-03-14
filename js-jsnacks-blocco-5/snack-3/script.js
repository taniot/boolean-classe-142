const numbers = [2, 8, 4, 7, 2, 87];

// Crea un nuovo array in cui tutti 
// i numeri siano incrementati di 1
// Risultato: [3, 9, 5, 8, 3, 88]

let result = [];

for (let i = 0; i < numbers.length; i++) {

  const currentNumber = numbers[i] + 1;
  result.push(currentNumber);

}

console.log(numbers);
console.log(result);

//map

const resultMap = numbers.map(number => {
  return number + 1
});

console.log(resultMap);
