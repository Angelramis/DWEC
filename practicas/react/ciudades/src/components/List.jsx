import { useEffect, useState } from 'react';
import { obtenerCiudades } from '../db/firestore';
import { Link, useSearchParams } from 'react-router-dom';
import { eliminarCiudad } from '../db/firestore';

export default function List() {
  // Estados
  let [ciudades, setCiudades] = useState([]);
  let [searchParams] = useSearchParams();
  let busqueda = searchParams.get("q")?.toLowerCase() || "";

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
      // console.log(ciudades);
      setCiudades(ciudades);
    }
      
    obtenerCiudadesEffect();
  }, []);

  // Filtrar ciudades en base al buscador
  let ciudadesFiltradas = ciudades.filter(ciudad =>
    ciudad.nombre.toLowerCase().includes(busqueda)
  );

  return (
    <nav className="ciudades-nav">
      {ciudadesFiltradas.length > 0 ? (
        ciudadesFiltradas.map(ciudad => (
          <div className='ciudad-card' key={ciudad.id}>
            <Link to={`/Ciudad/${ciudad.id}`}>
              <img src={ciudad.imagen} alt="Imagen ciudad" className="imagen-ciudad"/>
            </Link>
            <div className='info-card'>
              <p>Ciudad: {ciudad.nombre}</p>
              <p>País: {ciudad.pais}</p>
              <p>Habitantes: {ciudad.poblacion}</p>
              <nav className="nav-botones">
                <Link to={`/Ciudad/${ciudad.id}`}>
                  <button className='boton-accion'>Ver más</button>
                </Link>
                <Link to={`/Formulario/${ciudad.id}`}>
                  <button className='boton-accion'>Editar</button>
                </Link>
                <button className='boton-accion' onClick={() => gestionEliminarCiudad(ciudad.id)}>
                  Eliminar
                </button>
              </nav>
            </div>
          </div>
        ))
      ) : (
        <p>No hay resultados.</p>
      )}
    </nav>
  );
}