import { useState } from "react";
import { useNavigate, useSearchParams, NavLink } from "react-router-dom";

export default function Searchbar() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState(searchParams.get("q") || "");
  const navigate = useNavigate();

  function gestionarBusqueda(e) {
    let texto = e.target.value;
    setQuery(texto);

    if (texto.trim() == "") {
      setSearchParams({});
    } else {
      setSearchParams({ q: texto });
    }
  }

  return (
    <>
      <input type="text" onChange={gestionarBusqueda} placeholder="Nombres de ciudades..." className="input-buscador" id="input-busqueda"/>
    </>
  );
}
