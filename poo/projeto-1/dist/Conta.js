"use strict";
class Conta {
    constructor(nomeTitular) {
        if (this.validaNome(nomeTitular)) {
            this.nomeTitular = nomeTitular;
            this.saldo = 0;
            this.contaAtiva = true;
            Conta.titulares.push(nomeTitular);
        }
        else {
            throw new Error('O nome fornecido não é válido.');
        }
    }
    validaNome(nomeTitular) {
        return nomeTitular.length >= 4 && !/\d/.test(nomeTitular) && !Conta.titulares.includes(nomeTitular);
    }
    ativarConta() {
        if (!this.contaAtiva) {
            this.contaAtiva = true;
            return true;
        }
        return false;
    }
    inativarConta() {
        if (this.saldo === 0 && this.contaAtiva) {
            this.contaAtiva = false;
            return true;
        }
        return false;
    }
    depositar(valor) {
        if (this.contaAtiva) {
            this.saldo += valor;
            return true;
        }
        return false;
    }
    sacar(valor) {
        if (this.saldo >= valor && this.saldo > 0 && this.contaAtiva) {
            this.saldo -= valor;
            return true;
        }
        return false;
    }
    obterSaldo() {
        return this.saldo;
    }
}
Conta.titulares = [];
