import { Aluno } from './Aluno';
import { Professor } from './Professor';

export class Ocorrencia {
  aluno: Aluno;
  professor: Professor;
  data: Date;
  motivo: string;

  constructor(aluno: Aluno, professor: Professor, data: Date, motivo: string) {
    this.aluno = aluno;
    this.professor = professor;
    this.data = data;
    this.motivo = motivo;
  }
}

