import { useEffect, useState } from 'react';
import { obtenerCiudades } from '../db/firestore';
import { Link } from 'react-router-dom';
import { eliminarCiudad } from '../db/firestore';

export default function List() {
  // Estados
  const [ciudades, setCiudades] = useState([]);

  // FUNCIONES
  async function gestionEliminarCiudad(id) {
    try {
      await eliminarCiudad(id);
      // Actualizar el estado para eliminar la ciudad de la vista
      setCiudades(ciudades.filter(ciudad => ciudad.id !== id));
      alert("Ciudad eliminada.");
    } catch (error) {
      console.error("Error eliminando ciudad:", error);
    }
  }

  // Función para obtener las ciudades
  useEffect(() => {
    async function obtenerCiudadesEffect() {
      let ciudades = await obtenerCiudades();
      console.log(ciudades);
      setCiudades(ciudades);
    }
      
    obtenerCiudadesEffect();
  }, []);

  return (
    <nav className="ciudades-nav">
      {ciudades.map((ciudad, indice) => (
        <nav className='ciudad-card' key={ciudad.id}>
          <Link to={`/Ciudad/${ciudad.id}`}>
            <img src= {ciudad.imagen} alt="Imagen ciudad" className="imagen-ciudad"/>
          </Link>
            <p>Ciudad: {ciudad.nombre}</p>
            <p>País: {ciudad.pais}</p>
            <p>Habitantes: {ciudad.poblacion}</p>
            <button className='boton-accion'>Editar</button>
            <button className='boton-accion' onClick={() => gestionEliminarCiudad(ciudad.id)}>Eliminar</button>
          </nav>
        ))}
    </nav>
  )
}