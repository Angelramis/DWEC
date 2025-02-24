import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

/* Componentes */
import Navbar from './components/Navbar';
import Formulario from './pages/formulario/Formulario';
import Inicio from './pages/inicio/Inicio';


function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar/>

        {/* Enlaces */}
        <Routes>
          <Route path="/Inicio" element={<Inicio/>}/>
          <Route path="/Formulario" element={<Formulario/>}/>
        </Routes>

      </BrowserRouter>
    </>
  )
}

export default App
