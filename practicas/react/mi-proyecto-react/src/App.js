import './App.css';
import React, {useState} from 'react';
import Titulo from './components/Titulo'; // importar el componente creado
import Modal from './components/Modal';

// HOOK useState. Permite trabajar con variables dinámicas


// PROPS -> pasar como parámetro

const subTitulo = "Todos los proyectos para desarrollo de aplicaciones Web";

function App() {

  const [mostrarEventos, setMostrarEventos] = useState(true);

  const [eventos, setEventos] = useState([
    {titulo: "Examen DWEC", id: 1},
    {titulo: "Inicio navidad", id: 2},
    {titulo: "Inicio fiesta Sant Antoni", id: 3},
  ]);

  const handleClick = (id) => {
    
    setEventos((eventosPrevios)=> {
      return eventosPrevios.filter((evento) => {
        return id !== evento.id;
      })
    });


    // setEventos(eventos.filter((evento) => {
    //   return id !== evento.id;
    // }));
    
    // console.log(id);
  }

  return (
    <div className="App"> {/*Solo un componente padre*/}
      <Titulo titulo="Eventos de DAW 24/25" subTitulo = {subTitulo}/> 
      { mostrarEventos && ( // Lógica para mostrar/ocultar botones
        <div> 
          <button onClick={() => setMostrarEventos(false)}>Ocultar eventos</button>
        </div>
      )}

      { !mostrarEventos && (
        <div>
          <button onClick={() => setMostrarEventos(true)}>Mostrar eventos</button>
        </div>
      )}

      {mostrarEventos && eventos.map((evento, index) => ( // jsx. - Si mostrarEventos es true
        <React.Fragment key={evento.id}>
          <h2>{index} - {evento.titulo}</h2>
          <button onClick={() => handleClick(evento.id)}>Eliminar evento</button>
        </React.Fragment>
      ))}

      <Modal>
        <h2>Stem Talks</h2>
        <p>No te lo pierdas: 30 y 31 de enero</p>
        <a href='https://stem.gdgmenorca.dev/' target='blank'>Página web</a>
      </Modal>

    </div>
  );
}

export default App;
