/*
  Seja n o enésimo termo da sequência de Fibonacci, ele é calculado como:
  
  F(n) = F(n-1) + F(n-2)

  Ou seja, cada elemento da sequência é a soma dos dois anteriores, onde:
  
  F(1) = 0
  F(2) = 1

  Crie um script que pede ao usuário um termo qualquer da série de Fibonacci e ele exiba tal termo.

  5
  Ex: 0, 1, 1, 2, 3, 5
*/

const fibonacci = (n) => {
  let sequencia = [0, 1]

  if (n < 2) {
    return sequencia.slice(0, n).join(', ')
  }

  for (let i = 1; i < n - 1; i++) {
    sequencia.push(sequencia[i] + sequencia[i - 1])
  }
  return sequencia.join(', ')
}

const fibonacciRecursiva = (n) => {
  return n <= 1 ? 0 : n * fibonacciRecursival(n++)
}

const n = 5

console.log(fibonacci(n))
console.log(fibonacciRecursiva(n))