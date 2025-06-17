export class Aluno {
  nome: string;
  numero: number;
  turma: string;
  sobrenome: string;

  constructor(nome: string, numero: number, turma: string, sobrenome: string) {
    this.nome = nome;
    this.numero = numero;
    this.turma = turma;
    this.sobrenome = sobrenome;
  }
}
