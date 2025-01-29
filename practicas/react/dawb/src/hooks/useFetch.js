import { useState, useEffect } from "react";

export const useFetch = (url) => {
  // Declaración estados
  const [datos, setDatos] = useState(null);
  const [cargando, setCargando] = useState(false);
  const [error, setError] = useState(null);

  
  useEffect(() => { // -> para evitar llamadas infinitas 
    const fetchDatos = async () => {
      
      setCargando(true);

      try { // gestionar error
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error(response.statusText);
        }

        const json = await response.json();
      
        setCargando(false);
      
        setDatos(json);

        setError(null);

      } catch (err) {
        setCargando(false);
        setError("Error: No se han podido obtener los datos.");
      }
    };

    fetchDatos();

  }, [url]); /* volver a llamar cuando cambie de valor */
  
  return {datos: datos, cargando: cargando, error: error};
  
};