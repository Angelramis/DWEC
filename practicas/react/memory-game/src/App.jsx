import { useEffect, useState } from 'react';
import './App.css';
import Carta from './components/Carta';

function App() {
  // ESTADOS
  // Estado de cartas
  const [cartas, setCartas] = useState([]);
  // guardar las tarjetas escogidas
  const [eleccion1, setEleccion1] = useState(null); 
  const [eleccion2, setEleccion2] = useState(null); 
  const [deshabilitarClick, setDeshabilitarClick] = useState(false);  
  const [turnos, setTurnos] = useState(0);
  // array donde se insertan las imágenes
  const [imagenes, setImagenes] = useState([]);
  


  // FUNCIONES

  function elegirTema(tema) {
    let imagenesTema = null;

    if (tema == "Lugares") {
      imagenesTema = [
        {"src": "/img/lugares/anochecer.jpg", emparejada: false},
        {"src": "/img/lugares/ciudad.jpg", emparejada: false},
        {"src": "/img/lugares/desierto.jpg", emparejada: false},
        {"src": "/img/lugares/montes.jpg", emparejada: false},
        {"src": "/img/lugares/playa.jpg", emparejada: false},
        {"src": "/img/lugares/tierra.jpg", emparejada: false}
      ];
    } else if (tema == "Vehículos") {
      imagenesTema = [
        {"src": "/img/vehiculos/avion.jpg", emparejada: false},
        {"src": "/img/vehiculos/coche.jpg", emparejada: false},
        {"src": "/img/vehiculos/yate.jpg", emparejada: false},
        {"src": "/img/vehiculos/cohete.jpg", emparejada: false},
        {"src": "/img/vehiculos/bici.jpg", emparejada: false},
        {"src": "/img/vehiculos/moto.jpg", emparejada: false}
      ];
    }

    setImagenes(imagenesTema);
  }



  function mezclarCartas() {
    const cartasMezcladas = [...imagenes, ...imagenes]
    .sort(()=> Math.random() - 0.5) // mitad de imagenes negativas
    .map(carta => ({...carta, id: Math.floor(Math.random() *10000)}));
    
    setEleccion1(null);
    setEleccion2(null);
    setTurnos(0);
    setCartas(cartasMezcladas);
  }

  const handleEleccion = (carta) => {
    // Actualizar segun si ya esta asigada la primera o segunda eleccion
    if (!deshabilitarClick) {
      eleccion1 ? setEleccion2(carta) : setEleccion1(carta);
    }
  }

  useEffect(() => {
    if (eleccion1 && eleccion2) {
      setDeshabilitarClick(true);
      if (eleccion1.src == eleccion2.src) {
        // Son iguales
        setCartas(cartasPrevias => {
          return cartasPrevias.map(carta => {
            if (carta.src == eleccion2.src) {
              return {...carta, emparejada: true};
            } else {
              return carta;
            }
          })
        });
        resetearTurno();
      } else {
        // NO son iguales
        setTimeout(() => resetearTurno(), 1000);
      }
    }
  }, [eleccion1, eleccion2]);


  useEffect(() => {
    mezclarCartas();
  }, []); // al ser array vacio, solo se ejecuta 1 vez al principio


  const resetearTurno = () => {
    setEleccion1(null);
    setEleccion2(null);
    setDeshabilitarClick(false);
    setTurnos(turnosPrevios => turnosPrevios += 1);
  }


  return (
    <div>
      <h1>Joc de memòria</h1>

      <div className='seleccion-tema'>
        <label>Selecciona un tema</label>
        <select onChange={(e) => elegirTema(e.target.value)}>
          <option value="Vehículos">Vehículos</option>
          <option value="Lugares">Lugares</option>
        </select>
      </div>
      {/* Hacer que del array de imagenes las ordene aleatoriamente.*/}
      <button onClick={mezclarCartas}>Mezclar cartas</button>
      
      <div className='card-grid'>
        {
        cartas.map(carta => (
          <Carta 
            carta={carta}
            key={carta.id}
            handleEleccion={handleEleccion}
            girada = {carta === eleccion1 || carta === eleccion2 || carta.emparejada}
            deshabilitarClick={deshabilitarClick}
          />
        ))
      }
      </div>
      <p>Turnos: {turnos}</p>
    </div>
  )
}

export default App