export class Professor {
  nome: string;
  matricula: number;
  disciplina: string;
  sobrenome: string;

  constructor(nome: string, matricula: number, disciplina: string, sobrenome: string) {
    this.nome = nome;
    this.matricula = matricula;
    this.disciplina = disciplina;
    this.sobrenome = sobrenome;
  }
}
