import { useState, useEffect } from "react";

export const useFetch = (url) => {
  const [datos, setDatos] = useState(null);
  
  useEffect(() => { {/* -> para evitar llamadas infinitas */}
    const fetchDatos = async () => {
      const response = await fetch(url);
      const json = await response.json();
      setDatos(json);
    };

    fetchDatos();

    
  }, [url]); {/* volver a llamar cuando cambie de valor */}
  
  return {datos: datos};

};