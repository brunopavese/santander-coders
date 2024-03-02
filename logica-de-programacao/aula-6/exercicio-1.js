/*
  Crie o script de uma calculadora, usando o conceito abordado em aula de funções de alta ordem.
*/

const soma = (a, b) =>  a + b
const subtracao = (a, b) =>  a - b
const multiplicacao = (a, b) =>  a * b
const divisao = (a, b) =>  a / b

const calculadora = (operacao) => {
  return (a, b) => operacao(a, b)
}

const operacaoSoma = calculadora(soma);
const operacaoSubtracao = calculadora(subtracao);
const operacaoMultiplicacao = calculadora(multiplicacao);
const operacaoDivisao = calculadora(divisao);

console.log("Soma:", operacaoSoma(5, 3));
console.log("Subtracao:", operacaoSubtracao(5, 3));
console.log("Multiplicacao:", operacaoMultiplicacao(5, 3));
console.log("Divisao:", operacaoDivisao(5, 3));