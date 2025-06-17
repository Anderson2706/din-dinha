import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Professor.css';
import logoCeara from '../assets/ceara.png'; // 👈 Importação correta da imagem

const campos = [
  { name: 'nome', label: 'Nome', type: 'text' },
  { name: 'sobrenome', label: 'Sobrenome', type: 'text' },
  { name: 'matricula', label: 'Matrícula', type: 'number' },
];

export default function ProfessorLogin() {
  const [form, setForm] = useState({ nome: '', sobrenome: '', matricula: '' });
  const [erro, setErro] = useState('');
  const navigate = useNavigate();

  function mudou({ target }) {
    setForm({ ...form, [target.name]: target.value });
    if (erro) setErro('');
  }

  function entrar(e) {
    e.preventDefault();

    if (!form.nome || !form.sobrenome || !form.matricula) {
      setErro('Preencha todos os campos.');
      return;
    }

    localStorage.setItem('logado', 'true');
    localStorage.setItem('professorNome', `${form.nome} ${form.sobrenome}`);
    localStorage.setItem('professorDisciplina', 'Desconhecida');

    navigate('/ocorrencia');
  }

  return (
    <div className="login-container">
      <img src={logoCeara} alt="Brasão do Ceará" className="logo-ceara" />
      <h1>Login Professor</h1>
      <form onSubmit={entrar} className="login-form">
        {campos.map(({ name, label, type }) => (
          <div className="campo" key={name}>
            <label htmlFor={name}>{label}:</label>
            <input
              id={name}
              name={name}
              type={type}
              value={form[name]}
              onChange={mudou}
              required
              className={name === 'matricula' ? 'no-spinner' : ''}
            />
          </div>
        ))}

        {erro && <p className="erro">{erro}</p>}

        <button className="botao" type="submit">Entrar</button>
      </form>
    </div>
  );
}