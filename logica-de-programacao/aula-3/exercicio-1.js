const array = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const pares = []
const impares = []

for (let index = 0; index < array.length; index++) {
  array[index] % 2 === 0 ? pares.push(array[index]) : impares.push(array[index])
} 

console.log(pares);
console.log(impares);
