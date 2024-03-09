"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pessoa = void 0;
class Pessoa {
    constructor(nome, idade, cpf) {
        if (this.validaNome(nome) && this.validaIdade(idade) && this.validaCpf(cpf)) {
            this._nome = nome.toUpperCase();
            this._idade = idade;
            this._cpf = cpf;
            Pessoa.cpfCadastrados.push(cpf);
        }
        else {
            throw new TypeError('Dados fornecidos inválidos ao criar uma Pessoa{}');
        }
    }
    validaNome(nome) {
        return nome.length >= 4 && /^[a-zA-ZÀ-ú]+(?: [a-zA-ZÀ-ú]+)*$/.test(nome);
    }
    validaIdade(idade) {
        return idade >= 0 && idade < 200;
    }
    validaCpf(cpf) {
        return /^\d{3}\.\d{3}\.\d{3}-\d{2}$/.test(cpf) && !Pessoa.cpfCadastrados.includes(cpf);
    }
    exibirDados() {
        console.log(`nome: ${this._nome}\nidade: ${this.idade}\ncpf: ${this.cpf}`);
    }
    get nome() {
        return this._nome;
    }
    set nome(nome) {
        if (this.validaNome(nome)) {
            this._nome = nome;
        }
    }
    get idade() {
        return this._idade;
    }
    set idade(idade) {
        if (this.validaIdade(idade)) {
            this._idade = idade;
        }
    }
    get cpf() {
        return this._cpf;
    }
}
exports.Pessoa = Pessoa;
Pessoa.cpfCadastrados = [];
