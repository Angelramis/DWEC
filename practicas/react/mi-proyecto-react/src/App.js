import './App.css';
import {useState} from 'react';

// HOOK useState. Permite trabajar con variables dinámicas
function App() {

  const [mostrarEventos, setMostrarEventos] = useState(true);

  const [eventos, setEventos] = useState([
    {titulo: "Examen DWEC", id: 1},
    {titulo: "Inicio navidad", id: 2},
    {titulo: "Inicio fiesta Sant Antoni", id: 3},
  ]);

  // console.log(mostrarEventos);

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
    <div className="App">

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
        <div key={evento.id}>
          <h2>{index} - {evento.titulo}</h2>
          <button onClick={() => handleClick(evento.id)}>Eliminar evento</button>
        </div>
      ))}

    </div>
  );
}

export default App;
