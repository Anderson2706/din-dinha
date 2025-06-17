import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

import Professor from './components/Professor';
import Ocorrencia from './components/Ocorrencia';

function App() {
  const [logado, setLogado] = useState(false);

  useEffect(() => {
    const autenticado = localStorage.getItem('logado') === 'true';
    setLogado(autenticado);
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/professor" />} />
        <Route path="/professor" element={<Professor />} />
        <Route
          path="/ocorrencia"
          element={logado ? <Ocorrencia /> : <Navigate to="/professor" />}
        />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
