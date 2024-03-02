"use strict";
class Pessoa {
    constructor(nome, idade, cpf) {
        if (this.validaNome(nome) && this.validaIdade(idade) && this.validaCpf(cpf)) {
            this.nome = nome;
            this.idade = idade;
            this.cpf = cpf;
        }
        else {
            throw new TypeError('Dados fornecidos inválidos ao criar uma Pessoa{}');
        }
    }
    validaNome(nome) {
        return nome.length >= 4 && !/\d/.test(nome);
    }
    validaIdade(idade) {
        return idade >= 0 && idade < 200;
    }
    validaCpf(cpf) {
        return /^\d{3}\.\d{3}\.\d{3}-\d{2}$/.test(cpf);
    }
    exibirDados() {
        console.log(`nome: ${this.nome}\nidade: ${this.idade}\ncpf: ${this.cpf}`);
    }
    getNome() {
        return this.nome;
    }
    setNome(nome) {
        if (this.validaNome(nome)) {
            this.nome = nome;
            return true;
        }
        return false;
    }
    getIdade() {
        return this.idade;
    }
    setIdade(idade) {
        if (this.validaIdade(idade)) {
            this.idade = idade;
            return true;
        }
        return false;
    }
    getCpf() {
        return this.cpf;
    }
}
