import { useState } from 'react';
import './App.css';
import Carta from './components/Carta';

function App() {
  // Array de las imágenes
  const imagenes = [
    {"src": "/public/img/avion.jpg"},
    {"src": "/public/img/coche.jpg"},
    {"src": "/public/img/barco.jpg"},
    {"src": "/public/img/yate.jpg"},
    {"src": "/public/img/bici.jpg"},
    {"src": "/public/img/moto.jpg"}
  ];

  // Estado de cartas
  const [cartas, setCartas] = useState([]);

  function mezclarCartas() {
    const cartasMezcladas = [...imagenes, ...imagenes]
    .sort(()=> Math.random() - 0.5) // mitad de imagenes negativas
    .map(carta => ({...carta, id: Math.floor(Math.random() *10000)}))

    setCartas(cartasMezcladas);
  }

  console.log(cartas);

  return (
    <div>
      <h1>Joc de memòria</h1>
      <img src={imagenes[1].src}></img>
      {/* Hacer que del array de imagenes las ordene aleatoriamente.*/}
      <button onClick={mezclarCartas}>Mezclar cartas</button>
      
      <div className='card-grid'>
        {
        cartas.map(carta => (
          <Carta carta={carta} key={carta.id}></Carta>
        ))
      }
      </div>
    </div>
  )
}

export default App
