import "./Ciudad.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { obtenerCiudad } from '../../db/firestore';

export default function Ciudad() {

  const { id } = useParams(); // Obtener el ID de la URL
  const [ciudad, setCiudad] = useState(null);

  useEffect(() => {
    async function fetchCiudad() {
      try {
        const datosCiudad = await obtenerCiudad(id);
        if (datosCiudad.exists()) {
          setCiudad(datosCiudad.data());
        } else {
          console.log("La ciudad no existe.");
        }
      } catch (error) {
        console.error("Error obteniendo la ciudad:", error);
      }
    }

    fetchCiudad();
  }, [id]);

  if (!ciudad) return <p>Cargando...</p>;

  return (
    <>
      <h1 className="titulo">Nombre ciudad</h1>
      <img src={ciudad.imagen} alt={`Imagen de ${ciudad.nombre}`} className="imagen-ciudad" />
      <p><strong>País:</strong> {ciudad.pais}</p>
      <p><strong>Población:</strong> {ciudad.poblacion}</p>
      <p><strong>Atractivos:</strong> {ciudad.atractivos}</p>
      <p><strong>Cultura:</strong> {ciudad.cultura}</p>
    </>
  )
  
}


