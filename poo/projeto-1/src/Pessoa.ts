export class Pessoa {
  private _nome: string
  private _idade: number
  private _cpf: string
  private static cpfCadastrados: Array<string> = []

  constructor(nome: string, idade: number, cpf: string) {
    if (this.validaNome(nome) && this.validaIdade(idade) && this.validaCpf(cpf)) {
      this._nome = nome.toUpperCase()
      this._idade = idade
      this._cpf = cpf
      Pessoa.cpfCadastrados.push(cpf)
    } else {
      throw new TypeError('Dados fornecidos inválidos ao criar uma Pessoa{}')
    }
  }

  private validaNome(nome: string): boolean {
    return nome.length >= 4 && /^[a-zA-ZÀ-ú]+(?: [a-zA-ZÀ-ú]+)*$/.test(nome)
  }

  private validaIdade(idade: number): boolean {
    return idade >= 0 && idade < 200
  }

  private validaCpf(cpf: string): boolean {
    return /^\d{3}\.\d{3}\.\d{3}-\d{2}$/.test(cpf) && !Pessoa.cpfCadastrados.includes(cpf)
  }

  exibirDados(): void {
    console.log(`nome: ${this._nome}\nidade: ${this.idade}\ncpf: ${this.cpf}`)
  }

  get nome(): string {
    return this._nome
  }

  set nome(nome: string) {
    if (this.validaNome(nome)) {
      this._nome = nome
    }
  }

  get idade(): number {
    return this._idade
  }

  set idade(idade: number) {
    if (this.validaIdade(idade)) {
      this._idade = idade
    }
  }

  get cpf(): string {
    return this._cpf
  }
}
