import "../components/Navbar.css";
import { NavLink } from 'react-router-dom';


export default function Navbar() {
    return (
      <header>
        <nav className="nav-logo">
          <p>Ciudades</p>
        </nav>

        <nav className="nav-paginas">
          <NavLink to="/">
            <p>Inicio</p>
          </NavLink>
          <NavLink to="/Buscador">
            <p>Buscador</p>
          </NavLink>
          <NavLink to="/Formulario">
            <p>Añadir Ciudad</p>
          </NavLink>
        </nav>
      </header>
    )
}