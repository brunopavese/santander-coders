import { Pessoa } from "./Pessoa"

export class Conta {
  readonly titular: Pessoa
  private _saldo: number
  private contaAtiva: boolean
  private static titulares: Array<string> = []

  constructor(pessoa: Pessoa) {
    if (Conta.titulares.includes(pessoa.cpf)) {
      throw new Error('Não foi possível cria uma conta: CPF já cadastrado em outra conta')
    }
    this.titular = pessoa
    this._saldo = 0
    this.contaAtiva = true
    Conta.titulares.push(pessoa.cpf)
  }

  ativarConta(): boolean {
    if (this.contaAtiva) {
      return false
    }
    this.contaAtiva = true
    return true
  }

  inativarConta(): boolean {
    if (this._saldo === 0 && this.contaAtiva) {
      this.contaAtiva = false
      return true
    }
    return false
  }

  depositar(valor: number): boolean {
    if (this.contaAtiva && valor > 0) {
      this._saldo += valor
      return true
    }
    return false
  }

  sacar(valor: number): boolean {
    if (this._saldo >= valor && valor > 0) {
      this._saldo -= valor
      return true
    }
    return false
  }

  get saldo(): number {
    return this._saldo
  }

  transferir(valor: number, contaDestino: Conta): boolean {
    if (this._saldo >= valor && valor > 0 && contaDestino.contaAtiva) {
      this._saldo -= valor
      contaDestino.depositar(valor)
      return true
    }
    return false
  }
}
