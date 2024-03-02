import { Pessoa } from "./Pessoa"

export class Conta {
  readonly titular: Pessoa
  private saldo: number
  private contaAtiva: boolean
  private static titulares: Array<string> = []

  constructor(pessoa: Pessoa) {
    if (Conta.titulares.includes(pessoa.getCpf())) {
      throw new Error('Não foi possível cria uma conta: CPF já cadastrado em outra conta')
    }
    this.titular = pessoa
    this.saldo = 0
    this.contaAtiva = true
    Conta.titulares.push(pessoa.getCpf())
  }

  ativarConta(): boolean {
    if (!this.contaAtiva) {
      this.contaAtiva = true
      return true
    }
    return false
  }

  inativarConta(): boolean {
    if (this.saldo === 0 && this.contaAtiva) {
      this.contaAtiva = false
      return true
    }
    return false
  }

  depositar(valor: number): boolean {
    if (this.contaAtiva && valor > 0) {
      this.saldo += valor
      return true
    }
    return false
  }

  sacar(valor: number): boolean {
    if (this.saldo >= valor && valor > 0) {
      this.saldo -= valor
      return true
    }
    return false
  }

  obterSaldo(): number {
    return this.saldo
  }

  transferir(valor: number, contaDestino: Conta): boolean {
    if (this.saldo >= valor && valor > 0 && contaDestino.contaAtiva) {
      this.saldo -= valor
      contaDestino.depositar(valor)
      return true
    }
    return false
  }
}
