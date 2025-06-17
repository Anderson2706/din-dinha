import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Ocorrencia.css';

export default function Ocorrencia() {
  const [alunoNome, setAlunoNome] = useState('');
  const [alunoSobrenome, setAlunoSobrenome] = useState('');
  const [alunoMatricula, setAlunoMatricula] = useState('');
  const [disciplina, setDisciplina] = useState('');
  const [data, setData] = useState('');
  const [motivo, setMotivo] = useState('');
  const [erro, setErro] = useState('');
  const [ocorrencias, setOcorrencias] = useState([]);

  const navigate = useNavigate();
  const professorNome = localStorage.getItem('professorNome') || 'Desconhecido';

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!alunoNome || !alunoSobrenome || !alunoMatricula || !disciplina || !data || !motivo) {
      setErro('Preencha todos os campos.');
      return;
    }

    const aluno = {
      nome: alunoNome,
      sobrenome: alunoSobrenome,
      matricula: Number(alunoMatricula),
    };

    const novaOcorrencia = {
      aluno,
      professor: professorNome,
      disciplina,
      data,
      motivo,
    };

    setOcorrencias(prev => [...prev, novaOcorrencia]);

    alert('📋 Ocorrência registrada com sucesso!');
    setAlunoNome('');
    setAlunoSobrenome('');
    setAlunoMatricula('');
    setDisciplina('');
    setData('');
    setMotivo('');
    setErro('');
  };

  return (
    <div className="ocorrencia-page">
      <div className="ocorrencia-container">
        <h1>📄 Registrar Ocorrência</h1>
        <p className="professor-info">👤 Professor: {professorNome}</p>

        <form className="ocorrencia-form" onSubmit={handleSubmit}>
          <div className="campo">
            <label>Nome do Aluno:</label>
            <input type="text" value={alunoNome} onChange={(e) => setAlunoNome(e.target.value)} required />
          </div>

          <div className="campo">
            <label>Sobrenome do Aluno:</label>
            <input type="text" value={alunoSobrenome} onChange={(e) => setAlunoSobrenome(e.target.value)} required />
          </div>

          <div className="campo">
            <label>Matrícula do Aluno:</label>
            <input type="number" value={alunoMatricula} onChange={(e) => setAlunoMatricula(e.target.value)} required />
          </div>

          <div className="campo">
            <label>Disciplina:</label>
            <input type="text" value={disciplina} onChange={(e) => setDisciplina(e.target.value)} required />
          </div>

          <div className="campo">
            <label>Data:</label>
            <input type="date" value={data} onChange={(e) => setData(e.target.value)} required />
          </div>

          <div className="campo">
            <label>Motivo:</label>
            <textarea value={motivo} onChange={(e) => setMotivo(e.target.value)} rows="4" required />
          </div>

          {erro && <p className="erro">{erro}</p>}
          <button className="botao">Registrar 📝</button>
        </form>
      </div>

      <div className="ocorrencias-lista">
        <h2>🏛️ Ocorrências Registradas</h2>
        {ocorrencias.length === 0 ? (
          <p>Nenhuma ocorrência registrada ainda.</p>
        ) : (
          <table>
            <thead>
              <tr>
                <th>Aluno</th>
                <th>Matrícula</th>
                <th>Disciplina</th>
                <th>Data</th>
                <th>Motivo</th>
                <th>Professor</th>
              </tr>
            </thead>
            <tbody>
              {ocorrencias.map((ocorrencia, index) => (
                <tr key={index}>
                  <td>{ocorrencia.aluno.nome} {ocorrencia.aluno.sobrenome}</td>
                  <td>{ocorrencia.aluno.matricula}</td>
                  <td>{ocorrencia.disciplina}</td>
                  <td>{new Date(ocorrencia.data).toLocaleDateString('pt-BR')}</td>
                  <td>{ocorrencia.motivo}</td>
                  <td>{ocorrencia.professor}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
        <div className="rodape-imagem">
  <img src="Captura de tela 2025-06-16 163513.jpg" alt="Rodapé institucional" />
</div>

      </div>
    </div>
  );
}
