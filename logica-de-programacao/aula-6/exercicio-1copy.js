/*
  Crie o script de uma calculadora, usando o conceito abordado em aula de funções de alta ordem.
*/

const soma = (a, b) =>  a + b
const subtracao = (a, b) =>  a - b
const multiplicacao = (a, b) =>  a * b
const divisao = (a, b) =>  a / b

const calculadora = (a, b) => {
  return (operacao) => operacao(a, b) 
}

const calculadora2 = (operacao) => {
  return (a, b) => operacao(a, b) 
}

console.log(calculadora(5, 3)(soma));
console.log(calculadora2(soma)(5, 3));