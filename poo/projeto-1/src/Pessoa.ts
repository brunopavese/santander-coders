export class Pessoa {
  private nome: string
  private idade: number
  private cpf: string
  private static cpfCadastrados: Array<string> = []

  constructor(nome: string, idade: number, cpf: string) {
    if (this.validaNome(nome) && this.validaIdade(idade) && this.validaCpf(cpf)) {
      this.nome = nome.toUpperCase()
      this.idade = idade
      this.cpf = cpf
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
    console.log(`nome: ${this.nome}\nidade: ${this.idade}\ncpf: ${this.cpf}`)
  }

  getNome(): string {
    return this.nome
  }

  setNome(nome: string): boolean {
    if (this.validaNome(nome)) {
      this.nome = nome
      return true
    }
    return false
  }

  getIdade(): number {
    return this.idade
  }

  setIdade(idade: number): boolean {
    if (this.validaIdade(idade)) {
      this.idade = idade
      return true
    }
    return false
  }

  getCpf(): string {
    return this.cpf
  }
}
