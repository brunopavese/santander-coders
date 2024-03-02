import { Conta } from "./Conta"
import { Pessoa } from "./Pessoa"

const pessoa1 = new Pessoa('beatriz', 22, '123.456.789-10')
const pessoa2 = new Pessoa('joão paulo', 29, '123.456.789-11')

const conta1 = new Conta(pessoa1)
const conta2 = new Conta(pessoa2)

console.log(conta1)
console.log(conta2)
console.log('Depositar:', conta1.depositar(20))
console.log('Sacar:', conta1.sacar(2))
console.log('Transferir:', conta1.transferir(10, conta2))
console.log(conta1)
console.log(conta2)
