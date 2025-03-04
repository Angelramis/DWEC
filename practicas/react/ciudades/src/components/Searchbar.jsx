import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

export default function Searchbar() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState(searchParams.get("q") || "");
  const navigate = useNavigate();

  function handleSearch(e) {
    const value = e.target.value;
    setQuery(value);

    if (value.trim() === "") {
      setSearchParams({});
    } else {
      setSearchParams({ q: value });
    }
  }

  return (
    <input type="text" placeholder="Nombres de ciudades..." 
    value={query} onChange={handleSearch} className="input-buscador"
    />
  );
}
