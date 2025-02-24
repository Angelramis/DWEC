import { useEffect, useState } from 'react';
import { obtenerCiudades } from '../db/firestore';

export default function List() {
  const [ciudades, setCiudades] = useState([]);

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
            <p key={indice}>ID: {ciudad.id}</p>
            <p key={indice}>Ciudad: {ciudad.nombre}</p>
            <p key={indice}>País: {ciudad.pais}</p>
            <p key={indice}>Habitantes: {ciudad.poblacion}</p>
            <button className='boton-accion'>Detalles</button>
          </nav>
        ))}
    </nav>
  )
}