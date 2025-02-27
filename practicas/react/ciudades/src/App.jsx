import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

/* Componentes */
import Navbar from './components/Navbar';
import Formulario from './pages/formulario/Formulario';
import Inicio from './pages/inicio/Inicio';
import Ciudad from './pages/ciudad/Ciudad';
import Buscador from './pages/buscador/Buscador';

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar/>

        {/* Enlaces */}
        <Routes>
          <Route path="/" element={<Inicio/>}/>
          <Route path="/Formulario" element={<Formulario/>}/>
          <Route path="/Buscador" element={<Buscador/>}/>
          <Route path="/Ciudad/:id" element={<Ciudad />} /> {/* Página de detalles */}
        </Routes>

      </BrowserRouter>
    </>
  )
}

export default App
