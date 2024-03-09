"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Conta = void 0;
class Conta {
    constructor(pessoa) {
        if (Conta.titulares.includes(pessoa.cpf)) {
            throw new Error('Não foi possível cria uma conta: CPF já cadastrado em outra conta');
        }
        this.titular = pessoa;
        this._saldo = 0;
        this.contaAtiva = true;
        Conta.titulares.push(pessoa.cpf);
    }
    ativarConta() {
        if (this.contaAtiva) {
            return false;
        }
        this.contaAtiva = true;
        return true;
    }
    inativarConta() {
        if (this._saldo === 0 && this.contaAtiva) {
            this.contaAtiva = false;
            return true;
        }
        return false;
    }
    depositar(valor) {
        if (this.contaAtiva && valor > 0) {
            this._saldo += valor;
            return true;
        }
        return false;
    }
    sacar(valor) {
        if (this._saldo >= valor && valor > 0) {
            this._saldo -= valor;
            return true;
        }
        return false;
    }
    get saldo() {
        return this._saldo;
    }
    transferir(valor, contaDestino) {
        if (this._saldo >= valor && valor > 0 && contaDestino.contaAtiva) {
            this._saldo -= valor;
            contaDestino.depositar(valor);
            return true;
        }
        return false;
    }
}
exports.Conta = Conta;
Conta.titulares = [];
