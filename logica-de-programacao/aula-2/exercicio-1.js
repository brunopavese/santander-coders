/* 
  As Organizações Tabajara resolveram dar um aumento de salário aos seus colaboradores e você foi contratado para desenvolver um script que calculará os reajustes.

  Faça um script que recebe o salário de um colaborador e o reajuste seguindo o seguinte critério, baseado no salário atual:

    salários até R$ 1500,00 (incluindo) : aumento de 20%
    salários entre R$ 1500,00 e R$ 1700,00 : aumento de 15%
    salários entre R$ 1700,00 e R$ 2000,00 : aumento de 10%
    salários de R$ 2000,00 em diante : aumento de 5% 
      
  Após o aumento ser realizado, informe na tela:
    o salário antes do reajuste;
    o percentual de aumento aplicado;
    o valor do aumento;
    o novo salário, após o aumento.
*/

let salario = '1700'
let novoSalario
let percentual

salario = Number(salario)

if (!isNaN(salario)) {
  if (salario <= 1500) {
    percentual = 0.2
  } else if (salario <= 1700) {
    percentual = 0.15
  } else if (salario < 2000) {
    percentual = 0.1
  } else {
    percentual = 0.05
  }

  novoSalario = salario + salario * percentual

  console.log(
    `\n\tSalário antes do reajuste: ${salario}
    \tPercentual de aumento aplicado: ${percentual * 100}%
    \tValor do aumento: ${novoSalario - salario}
    \tNovo salário, após o aumento: ${novoSalario}\n`
  )
}
