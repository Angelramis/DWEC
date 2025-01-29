import React, { useState } from "react";
import './AsignaturasLista.css';
import { useFetch } from "../hooks/useFetch";

export default function AsignaturasLista() {

  const [url, setUrl] = useState("http://localhost:3000/asignaturas");
  const [, setAsignaturas] = useState(null);
  const {datos: asignaturas, cargando: cargando, error: error} = useFetch(url);

  // API fetch()
  fetch("http://localhost:3000/asignaturas")
    .then(response => response.json())
    .then(json => setAsignaturas(json))

    
  return (
    <div className="asignatura-lista">
      <h2>Listado de asignaturas</h2>
      { cargando && (<div>Cargando asignaturas...</div>) }
      { error && (<div> {error} </div >) }

      <ul>
        {asignaturas && asignaturas.map(asignatura => {
          <li key={asignaturas.id}>
            <h1>{asignatura.nombre}</h1>
            <p>{asignatura.horas["horas totales"]}</p>
          </li>
        })}
      </ul>
      <div className="filtros">
        <button onClick={() => setUrl("http://localhost:3000/asignaturas?idioma=Inglés")}>Inglés</button>
        <button onClick={() => setUrl("http://localhost:3000/asignaturas")}>Todos</button>
      </div>      
    </div>
  )
}
