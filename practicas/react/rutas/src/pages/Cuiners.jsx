import { useLocation } from "react-router-dom";

export default function Cuiners() {

  const query = useLocation().search;
  const parametres = new URLSearchParams(query);
  const nom = parametres.get("nom");
  const restaurant = parametres.get("restaurant");
  const tot = parametres.getAll("nom"); //si hay mas nombres coge todos.

  return (
    <div>
       <h2>Cuiners</h2>
       <p>{nom}</p>
    </div>
  )
}
