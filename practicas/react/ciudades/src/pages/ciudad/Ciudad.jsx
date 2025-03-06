import "./Ciudad.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { obtenerCiudad } from '../../db/firestore';

export default function Ciudad() {
  const { id } = useParams();
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
        console.error("Error al obtener la ciudad: ", error);
      }
    }

    fetchCiudad();
  }, [id]);

  if (!ciudad) return <p>Cargando...</p>;

  return (
    <div className="root-ciudad">
      <main className="main-ciudad">
        <h1 className="titulo">{ciudad.nombre}</h1>
        <nav className="contenedor-imagen">
          <img src={ciudad.imagen} className="imagen-ciudad-individual"/>
        </nav>
        <h2 className="subtitulo-ciudad">País</h2>
        <p>{ciudad.pais}</p>
        <h2 className="subtitulo-ciudad">Población</h2>
        <p>{ciudad.poblacion} habitantes</p>
        <h2 className="subtitulo-ciudad">Atractivos</h2>
        <p>{ciudad.atractivos}</p>
        <h2 className="subtitulo-ciudad">Cultura</h2>
        <p>{ciudad.cultura}</p>
      </main>
    </div>
  )
}