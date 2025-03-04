import "./Buscador.css";
import Searchbar from "../../components/Searchbar";
import List from "../../components/List";

export default function Buscador() {

    return (
      <main>
        <h1 className="titulo">Buscar ciudades</h1>
        <Searchbar></Searchbar>
        <List></List>

      </main>
    )
}


