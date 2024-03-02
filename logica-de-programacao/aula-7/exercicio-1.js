/*
  Escreva uma função para calcular o fatorial de um número.
  Ex: n * (n-1) * (n-2) *...*1
*/

const fatorial = (n) => {
  let resposta = 1
  while (n > 0) {
    resposta *= n
    n--
  }
  return resposta
}


const fatorialRecursiva = (n) => {
  return n <= 1 ? 1 : n * fatorialRecursiva(n - 1)
}

const n = 0

console.log(fatorial(n))
console.log(fatorialRecursiva(n))
