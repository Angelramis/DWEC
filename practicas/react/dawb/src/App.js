import './App.css';
import React, { useState } from 'react';
import AsignaturasLista from './components/asignaturasLista.js';
// useEffect

function App() {

  const [muestraAsignaturas, setMuestraAsignaturas] = useState(true);

  return (
    <div className="App">
      <button onClick={()=> setMuestraAsignaturas(false)}>Esconde Asignaturas</button>
      {muestraAsignaturas && <AsignaturasLista />}
    </div>
  );
}

export default App;
