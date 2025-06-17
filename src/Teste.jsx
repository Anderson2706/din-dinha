import { Aluno } from './model/Aluno';
import { Professor } from './model/Professor';
import { Ocorrencia } from './model/Ocorrencia';
import { Disciplina } from './model/Disciplina';

// Criando alunos
const aluno1 = new Aluno("Maria Silva", 101, "3A");
const aluno2 = new Aluno("João Santos", 102, "3A");

// Criando professores
const professor1 = new Professor("Carlos Pereira", 2001, Disciplina.Portugues);
const professor2 = new Professor("Ana Souza", 2002, Disciplina.Matematica);

// Criando ocorrências
const ocorrencia1 = new Ocorrencia(
  aluno1,
  professor1,
  new Date("2025-06-01"),
  "Falta de tarefa de português"
);

const ocorrencia2 = new Ocorrencia(
  aluno2,
  professor2,
  new Date("2025-06-02"),
  "Chegou atrasado na aula de matemática"
);

// Lista de ocorrências
export const ocorrencias = [ocorrencia1, ocorrencia2];

// Logs só pra conferência
console.log(ocorrencia1);
console.log(ocorrencia2);
