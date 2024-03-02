const prompt = require('prompt-sync')();

var resposta

while (resposta !== 'sair') {
  resposta = prompt('Qual seu nome? ')
  if (resposta === 'sair') break
  console.log("Olá", resposta);
}